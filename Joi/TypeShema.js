import Joi from "joi";

const TypeShema = Joi.object().keys({
    name: Joi.string().max(10).required(),
});
export default TypeShema;