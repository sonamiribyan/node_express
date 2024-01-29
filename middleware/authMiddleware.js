import JWt from 'jsonwebtoken';

export default function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Fix typo in 'authorization'
        console.log(token);
        if (!token) {
            res.status(401).json({ message: "user is unauthenticated" }); // Fix typo in 'unauthenticated'
        }
        const decoded = JWt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: "user is unauthenticated" }); // Fix typo in 'unauthenticated'
    }
}
