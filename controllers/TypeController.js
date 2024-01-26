import { Type } from "../models/models.js";

class TypeController {
    async get(req, res) {
        try {
            const types = await Type.findAll();
            return res.status(200).json({ message: 'success', types });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async create(req, res) {
        try {
            const { name } = req.body;
            const type = await Type.create({ name });
            return res.status(200).json({ message: 'success', type });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new TypeController();