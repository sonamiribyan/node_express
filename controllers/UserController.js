import bcrypt from 'bcrypt';
import { User, Basket } from "../models/models.js";
import JWt from 'jsonwebtoken';
const generateJwt = (id, email, role) => {
    return JWt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });

}
class UserController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(422).json('email or password are wrong');
        }
        let comparePassword = bcrypt.compareSync(user.password, password);
        if (comparePassword) {
            return res.status(422).json('email or password are wrong');
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async register(req, res) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.status(422).json('passowrd and email is required');
        }
        const user = await User.findOne({
            where:
            {
                email
            }
        });
        if (user) {
            return res.status(422).json('user already exist');
        }
        const hashPassowrd = await bcrypt.hash(password, 5);
        const newUser = await User.create({ email, role, password: hashPassowrd });
        const basket = await Basket.create({ userId: newUser.id });
        const jwt = generateJwt(newUser.id, newUser.email, newUser.role);
        return res.json(jwt);
    }
    async auth(req, res) {
        const jwt = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({jwt});
    }
}

export default new UserController();