import JWt from 'jsonwebtoken';

export default function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Fix typo in 'authorization'
            console.log(token);
            if (!token) {
                return res.status(401).json({ message: "user is unauthenticated" }); // Fix typo in 'unauthenticated'
            }
            const decoded = JWt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(401).json({ message: "not allowed" }); // Fix typo in 'unauthenticated'
            }
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).json({ message: "user is unauthenticated" }); // Fix typo in 'unauthenticated'
        }
    }
}
