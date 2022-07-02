import * as yup from "yup";

export const LoginSchema = yup.object({
    email: yup
    .string()
    .required("You must enter data in email field!")
    .email("Enter correct email"),
    password: yup
    .string()
    .required("You must enter data in password field!")    
})