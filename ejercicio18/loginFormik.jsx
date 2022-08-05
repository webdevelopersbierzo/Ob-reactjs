
import React from 'react';
import{ useLocation, useHistory } from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string()
                .email('Invalid Email Format')
                .required('Email is required'),
    password: Yup.string()
                .required('Password is required')
})

const LoginFormik = () => {
   

    const initialCredentials = {
        email: '',
        password: ''
    }
    const location = useLocation();

    const history = useHistory();
    
    const navigate = (path)=>{
        history.push(path);
    }
    const goBack = ()=>{
        history.goBack();
    }
    return (
        
       <div>
            <h4>Login Formkik</h4>
            <Formik
                initialValues={initialCredentials}
                // ++ yup validation schema
                validationSchema = {loginSchema}
                // ** onSubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // we save the date in localstore
                    await localStorage.setItem('credentials', values);
                    history.push('/profile');
                 }}
            
            >
                {/* We obtain props from Formik*/}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
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
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>

                        )
                    }
                

            </Formik>
            <div>
                <button onClick={()=>navigate('/register')}>Register</button>
                <button onClick={ goBack }>Go back</button>
            </div>
       </div>
    );
}

export default LoginFormik;
