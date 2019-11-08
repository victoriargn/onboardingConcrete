"use strict";

const Joi = require("joi");

const USER_SCHEMA = Joi.object({
    id: Joi.number()
        .min(1),

    nome: Joi.string()
        .required(),

    location: Joi.string(),

    idade: Joi.number()
        .integer()
        .required(),

    UF: Joi.string()
        .min(2)
        .max(2)
        .required(),

    cidade: Joi.string()
        .required(),

    cpf: Joi.string()
        .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).required()
});

const GET_SCHEMA = Joi.array().items(USER_SCHEMA);

module.exports = {
    USER_SCHEMA,
    GET_SCHEMA
};