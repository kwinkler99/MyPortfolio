import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../style/form.scss'
import country from 'country-list-js';


function MyForm() {
    let country_names = country.names();

    const list = country_names.map(country => {
        return <option key={country} value={country}></option>
    })

    return (
        <div id="form">
            <div className="small-window">
                <div>
                    <h1>Form</h1>
                    <p>This is small form with validation.<br/>You can complete it :)</p>
                </div>
                <Formik 
                    initialValues={{ 
                        full_name: '', 
                        email: '',
                        phone: '',
                        country: '',
                    }}
                    validate={values => {
                        const errors = {};

                        if(!values.full_name) {
                            errors.full_name = 'Required';
                        } else if (
                            !/^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(values.full_name)
                        ) {
                            errors.full_name = 'You have to put your name and surname'
                        }

                        if(!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ){
                            errors.email = 'Invalid email address';
                        }

                        if(!values.phone) {
                            errors.phone = 'Required';
                        } 
                        else if(
                            !/^\+(?:[0-9] ?){6,14}[0-9]$/i.test(values.phone)
                        ) {
                            errors.phone = 'Invalid phone'
                        }

                        if(!values.country) {
                            errors.country = 'Required';
                        } 
                        else if (!country.findByName(values.country)) {
                            errors.country = "This country doesn't exist"
                        }
                        return errors;
                    }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                          }, 400);
                          actions.resetForm({
                            values: {
                                full_name: '', 
                                email: '',
                                phone: '',
                                country: '',
                            },
                        });
                    }}
                >
                {() => (
                    <Form>
                        <Field type="full_name" name="full_name" placeholder="Full name"/>
                        <ErrorMessage name="full_name" component="p" />

                        <Field type="email" name="email" placeholder="email" />
                        <ErrorMessage name="email" component="p" />

                        <Field type="country" name="country" list="country-name" placeholder="country"/>
                            <datalist id="country-name">
                                {list}
                            </datalist>
                        <ErrorMessage name="country" component="p" />

                        <Field type="phone" name="phone" placeholder="phone"/>
                        <ErrorMessage name="phone" component="p" />

                        <button type="submit">Submit</button>
                    </Form> 

                )}
                </Formik> 
            </div>
        </div>
    );
}
  
export default MyForm;
  