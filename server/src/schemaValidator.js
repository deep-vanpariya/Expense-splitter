import Ajv from "ajv"
import formatsAjv from "ajv-formats"

const ajv = new Ajv();
formatsAjv(ajv)

const signUpSchema = ajv.compile({
    type: "object",
    properties: {
        username: { type: "string", minLength: 6 },
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 6 }
    },
    required: ["email", "password", "username"]

})

const signInSchema = ajv.compile({
    type: "object",
    properties: {
        username: { type: "string", minLength: 6 },
        password: { type: "string", minLength: 6 }
    },
    required: ["password", "username"]

})

export {
    signUpSchema,
    signInSchema
}