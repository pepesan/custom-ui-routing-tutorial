import React from 'react';
import { Formik } from 'formik';
import Menu from "../../common/Menu";

class FormFormik extends React.Component {

    constructor(props) {
        super(props);
        this.initialValues = { name: '', amount: '', date: '', category: '' }
    }
    validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.amount) {
            errors.amount = 'Required';
        }
        if (!values.date) {
            errors.date = 'Required';
        }
        if (!values.category) {
            errors.category = 'Required';
        }
        return errors;
    }
    handleSubmit = (values, setSubmitting) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div id="expenseForm">
                    <h2>Formulario con Formik</h2>
                    <Formik
                        initialValues={this.initialValues}
                        validate={values => this.validate(values)}
                        onSubmit={(values, {setSubmitting}) => this.handleSubmit(values, setSubmitting)}>
                        {
                            ({
                                 values,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 isSubmitting,
                                 /* and other goodies */
                             }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">

                                        <label
                                            htmlFor="name" className="form-label ">Title <span>{errors.name && touched.name && errors.name}</span></label>
                                        <input type="text" id="name" name="name" placeholder="Enter expense title" className="form-control"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.name}/>
                                    </div>
                                    <div className="mb-3">
                                    <label
                                        htmlFor="amount" className="form-label">Amount <span>{errors.amount && touched.amount && errors.amount}</span></label>
                                    <input type="number" id="amount" name="amount" placeholder="Enter expense amount" className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.amount}/>
                                        <div id="errores-amount"></div>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Spend
                                        Date <span>{errors.date && touched.date && errors.date}</span></label>
                                    <input type="date" id="date" name="date" placeholder="Enter date" className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.date}/>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="category" className="form-label">Category <span>{errors.category && touched.category && errors.category}</span></label>
                                        <select id="category" name="category" className="form-control"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.category}>
                                            <option value="">Select</option>
                                            <option value="Food">Food</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Academic">Academic</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" value="Submit" className="btn btn-primary" disabled={isSubmitting}/>
                                    </div>
                                </form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default FormFormik;