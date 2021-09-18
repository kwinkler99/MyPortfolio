import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../style/form.scss'
import country from 'country-list-js';
import validator from 'validator';


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
                    <p>This is small form with validation.<br/>You can complete it. <br/>(Don't worry, data is not stored. You will see only alert.)</p>
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
                            !validator.isEmail(values.email)
                        ){
                            errors.email = 'Invalid email address';
                        }

                        if(!values.country) {
                            errors.country = 'Required';
                        } 
                        else if (!country.findByName(values.country)) {
                            errors.country = "This country doesn't exist"
                        }


                        let iso2 = ""
                        let locales = []

                        if(values.country && country.findByName(values.country)){
                            iso2 = country.findByName(values.country)['code']['iso2']
                            validator.isMobilePhoneLocales.map(item => {
                                if(item.split("-")[1] === iso2){
                                    locales.push(item)
                                }
                                return item
                            })

                            if(locales.length === 0){
                                locales = "any"
                            }
                        } else {
                            locales = "any"
                        }

                        if(!values.phone) {
                            errors.phone = 'Required';
                        } 
                        else if(
                            !validator.isMobilePhone(values.phone, locales)
                        ) {
                            errors.phone = 'Invalid phone'
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
                        <div>
                            <Field type="full_name" name="full_name" placeholder="Full name"/>
                            <ErrorMessage name="full_name" component="p" />
                        </div>
                        <div>
                            <Field type="email" name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="p" />
                        </div>
                        <div>
                            <Field type="country" name="country" list="country-name" placeholder="Country"/>
                                <datalist id="country-name">
                                    {list}
                                </datalist>
                            <ErrorMessage name="country" component="p" />
                        </div>
                        <div>
                            <Field type="phone" name="phone" placeholder="Phone"/>
                            <ErrorMessage name="phone" component="p" />
                        </div>
                        <button type="submit">Submit</button>
                    </Form> 

                )}
                </Formik> 
            </div>
        </div>
    );
}
  
export default MyForm;
  