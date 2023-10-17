import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom' 
import { useFormik } from 'formik';
import * as Yup from 'yup';




const Task1 = () => {
    const navigate = useNavigate()

    const home = () =>{
        navigate('/')
    }

    let userSchema = Yup.object({
        fname: Yup.string().min(2, 'Too Short!').max(20, 'Too Longf!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')    

    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            
        },
        validationSchema:userSchema,
        onSubmit: values => {
            alert('Registration successfull');
        },
    });

    const registrationForm = () =>(
        <div className='maincontainer'>
            <div className='maincontainer_home'>
                <button onClick={home}>Home</button>

            </div>
           <div className='maincontainer_container'>
                <div className='maincontainer_container_heading'>
                    <h2>Registration Form </h2>
                </div>
                <div className='maincontainer_container_form'>
                    <form action="/" onSubmit={formik.handleSubmit}>
                        <label htmlFor="fname">Name : </label>
                        <input
                            type="text"
                            name='fname'
                            placeholder='Enter your name'
                            onChange={formik.handleChange}
                            value={formik.values.fname}
                        />
                        {formik.errors.fname && formik.touched.fname ? (<div>{formik.errors.fname}</div>) : null}                       

                         <label htmlFor="email">Email : </label>
                        <input 
                            type="text" 
                            name='email' 
                            placeholder='Enter your email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                        <label htmlFor="password">Password : </label>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='**********'
                            onChange={formik.handleChange}
                            value={formik.values.passowrd}
                        />
                        {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : null}                       

                        <label htmlFor="confrim password">Confrim Password : </label>
                        <input 
                            type="password" 
                            name='passwordConfirmation' 
                            placeholder='**********'
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirmation}
                        />
                        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? (<div>{formik.errors.passwordConfirmation}</div>) : null}                       
                        <button type="submit">Submit</button>
                    </form>
                </div>
           </div>
            
        </div>
    )
  return (
      <div>
       {registrationForm()}
    </div>
  )
}

export default Task1