import Joi from "joi";

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.details[0].message,
            });
        }
        if (!req.value) {
            req.value = {};
        }
        req.value['body'] = value;
        next();
    }
}

export default validateRequest;
