import * as yup from "yup";

export const RegisterSchema = yup.object({
    email: yup
    .string()
    .required("You must enter data in email field!")
    .email("Enter right email"),
    photo: yup
    .string()
    .required("Choose image")
})