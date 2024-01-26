import bcrypt from 'bcrypt';

class UserController {
    async login(req, res) {

    }
    async register(req, res) {

    }
    async auth(req, res) {
        res.status(200).json('successfully user auth')
    }
}

export default new UserController();