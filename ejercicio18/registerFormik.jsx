import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import {useHistory, useLocation} from 'react-router-dom'


const RegisterFormik = () => {

    const submit = (values)=>{
        alert('Register user')
    }
    
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role : ROLES.USER
    }
    
    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                .min(6, 'username too short')
                .max(12, 'username too long')
                .required('Username is required '),
            email: Yup.string()
                .email('Invalid Email Format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, ' Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'password must match'
                    )
                }).required('You musht confirm the password')
            
        }

    )

    const history = useHistory();
    const location= useLocation();
    const navigate = (path)=>{
        history.push(path)
    }
    const goBack = ()=>{
        history.goBack();
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Your username" />
                            
                            {/* Username Errors */}
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="confirm">Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="confirm passsword"
                                type='password'
                            />
                            {/* Confirm Password Errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>): null}

                        </Form>
                    )
            }

            </Formik>
            <div>
                <button onClick={()=>navigate('/login')}>Go to login</button>
                <button onClick={ goBack }>Go back</button>
            </div>
        </div>
    );
}

export default RegisterFormik;
