import { TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import * as React from 'react'

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface LoginProps {
    onSubmit: (values: Values) => void;
}

const LoginForm: React.FC<LoginProps> = ({ onSubmit }) => {
    return (
        <div className="App_loginContainer-Form">
            <Formik
                initialValues={{firstName: '', lastName: '', email: ''}}
                onSubmit={values => {
                    onSubmit(values);
                }}
                >
                {({ values, handleChange, handleBlur }) => (   
                <Form className='App_loginContainer-Form_box'>                    
                    <TextField 
                        name="firstName" 
                        value={values.firstName}
                        label='First Name:'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextField 
                        name="lastName" 
                        value={values.lastName}
                        label='Last Name:'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextField 
                        name="email" 
                        value={values.email}
                        label='Email:'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <button type='submit' className='App_loginContainer-Form_btn'>Submit</button>    

                    <pre>{JSON.stringify(values)}</pre>
                </Form>                     
                )}
            </Formik>
        </div>
    );
}

export default LoginForm;