import {Form, FormikProvider, useFormik } from 'formik';
import { LoginSchema } from "./validation";
import { ILogin } from "./types";
import classNames from 'classnames';
import React from 'react';
const LoginPage : React.FC = () => {
    const initialValues : ILogin = {
        
        email: "",
        password: ""
    }
    const onHandleSubmit = async (values: ILogin) =>{
        console.log("Send server form ", values);
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onHandleSubmit,
        validationSchema: LoginSchema
    });
    const {errors, touched, handleSubmit , handleChange } = formik;
    return (
        <div className="row">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">Login into account</h1>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
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
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input 
                        type="password" 
                        className={classNames('form-control' , 
                                {"is-invalid": touched.password && errors.password},
                                {"is-valid": touched.password&&!errors.password}
                        )}  
                        name='password' id='password'
                        onChange={handleChange}
                        />
                        {touched.password&&errors.password && <div className='invalid-feedback'>{errors.password}</div>}
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

export default LoginPage;