import React, { useRef } from 'react';
import Proptypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const initialValues = {
    name:'',
    description: '',
    level: '',
}


const FormTaskFormik = ({add, length}) => {

    
    const taskAddSchema = Yup.object().shape({
        name: Yup.string()
            .min(6, ' Name too short')
            .max(20, ('Name too long'))
            .required('Username is required'),
        description: Yup.string()
            .min(12, ' Description too shor')
            .max(25, 'Description too long')
            .required('Description is requires'),
        
    })

    function addTask(name, description, isCompleted, levelTask){
       
       
        const newTask = new Task(
            name,
            description,
            isCompleted,
            levelTask
        );
        add(newTask)
    }
    
    return (
        <div>
            <h2>Formulario task formik</h2>
            <Formik
                initialValues= {initialValues}
                // ** Yup validation Schema
                validationSchema= {taskAddSchema}
                onSubmit={async (values) => {
                    
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    addTask(values.name, values.description, false, values.level);                    
                 }}
            >
            {({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur}) =>(
                    <Form className='d-flex justify-content-center mb-4'>
                        <div className='form-outline flex-fill'>
                            <label htmlFor='name'>Name</label>
                            <Field
                                className='form-control form-control-lg'
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name taks"
                            ></Field>
                            {/** Name task errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor='description'>Description</label>
                            <Field
                                className='form-control form-control-lg'
                                name="description"
                                id="description"
                                type="text"
                                placeholder="description task"
                            ></Field>
                            {/** Description Task errors */}
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name='description' component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor='level'></label>
                            <Field
                                className='form-control form-control-lg'
                                id="level"
                                name="level"
                                as="select"
                                
                            >
                                <option disable selected>Select one option</option>
                                <option value={LEVELS.NORMAL}>NORMAL</option>
                                <option value={LEVELS.URGENT}>URGENTE</option>
                                <option value={LEVELS.BLOCKING}>BLOQUING</option>

                            </Field>
                            <button  type='submit' className='btn btn-success btn-lg ms-2' >
                                {length > 0 ? 'Add New task': 'Create your first task'}
                                
                            </button>
                        </div>
                </Form>
                )}          
                
            </Formik>
        </div>
    );
}

FormTaskFormik.Prototype = {
    add: Proptypes.func.isRequired,
    length: Proptypes.number.isRequired,
    

}

export default FormTaskFormik;
