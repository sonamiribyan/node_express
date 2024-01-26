import { Brand } from "../models/models.js";


class BrandController {
    async get(req, res) {
        try {
            const brands = await Brand.findAll();
            return res.status(200).json({ message: 'success', brands });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
    async create(req, res) {
        try {
            const { name } = req.body;
            const brand = await Brand.create({ name });
            return res.status(200).json({ message: 'success', brand });
        }
        catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new BrandController();