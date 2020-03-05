import React, { useState } from 'react';
const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
    }
    let FNmessage;
    if (formState.firstName.length < 2 && formState.firstName.length > 0){
        FNmessage=<p>Error: name must be at least 2 characters.</p>
    }
    let LNmessage;
    if (formState.lastName.length < 2 && formState.lastName.length > 0){
        LNmessage=<p>Error: name must be at least 2 characters.</p>
    }
    let EMmessage;
    if (formState.email.length < 5 && formState.email.length > 0){
        EMmessage=<p>Error: email must be at least 5 characters.</p>
    }
    let PSmessage;
    if (formState.password.length < 8 && formState.password.length > 0){
        PSmessage=<p>Error: password must be at least 8 characters.</p>
    }
    let CPmessage;
    if (formState.confirmPassword.length < 8 && formState.confirmPassword !== formState.password){
        CPmessage=<p>Error: passwords must match.</p>
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <p>{FNmessage}</p>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <p>{LNmessage}</p>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <p>{EMmessage}</p>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{PSmessage}</p>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{CPmessage}</p>
                <br/>   
                <input type="submit" />     
            </form>
            <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
}
export default RegisterForm;