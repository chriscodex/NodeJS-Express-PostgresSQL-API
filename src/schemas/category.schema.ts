import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

/* Validations types */
export interface createCategory {
  name: string,
  image: string
}

/* Validations Schemas - Client Request */
export const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required()
})

export const updateCategorySchema = Joi.object({
  name: name,
  image: image
})

export const getCategorySchema = Joi.object({
  id: id.required()
})

