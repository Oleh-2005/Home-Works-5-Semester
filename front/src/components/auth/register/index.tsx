import {Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import { IRegister } from './types';
import { RegisterSchema } from './validation';
import classNames from 'classnames';
import CropperDialog from '../../common/CropperDialog/Index';
const RegisterPage : React.FC = () => {

    const initialValues : IRegister = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        photo: "",
        password: "",
        confirmPassword: ""
    }
    const onHandleSubmit = async (values: IRegister) =>{
        console.log("Send server form ", values);
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onHandleSubmit,
        validationSchema: RegisterSchema
    });

    const {errors, touched, handleSubmit , handleChange , setFieldValue} = formik;
    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Create new account</h1>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <CropperDialog 
                        onChange={setFieldValue}
                        field="photo"
                        error={errors.photo}
                        touched={touched.photo}
                        />
                        <div className="mb-3">
                            <label htmlFor="email" className='form-label'>
                                Email
                            </label>
                            <input 
                            type="email" 
                            className={classNames('form-control' , 
                                {"is-invalid": touched.email && errors.email},
                                {"is-valid": touched.email&&!errors.email}
                            )}                           
                            name='email' id='email'
                            onChange={handleChange} 
                            />
                            {touched.email&&errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </Form>
                </FormikProvider>
            </div>
        </div>
        
    );
}

export default RegisterPage;