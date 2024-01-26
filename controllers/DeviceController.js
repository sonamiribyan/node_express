import fileService from "../services/FileService.js";
import { Device, DeviceInfo } from "../models/models.js";
import { json } from "sequelize";

class DeviceController {
    async get(req, res) {
        let { brandId, typeId, limit, page, info } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId) {

            devices = await Device.findAndCountAll({ limit, offset });
        }
        if (brandId && !typeId) {

            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
        }
        if (brandId && typeId) {

            devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
        }
        return res.json(devices);
    }
    async create(req, res) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const filename = await fileService.upload(img);
            const device = await Device.create({ name, price, brandId, typeId, info, img: filename });

            // if (info) {
            //     info = JSON.parse(info);
            //     info.forEach(element => {
            //         Device.create({
            //             title: element.title,
            //             description: element.description,
            //             deviceId: device.id,
            //         })
            //     });
            // }
            return res.status(200).json({ message: 'success', device });
        }
        catch (e) {
            return res.json(e.message)
        }

    }
    async show(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: { id },
            include: { model: DeviceInfo, as: 'info' }
        });
        return res.json(device);
    }
}

export default new DeviceController();