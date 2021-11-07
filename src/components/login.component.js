import React , { useState } from "react";

import { loginUser } from './../redux/actions/authActionCreators'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

const LoginForm = ({ dispatchLoginAction }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSubmit = (event) =>{
        event.preventDefault();
        dispatchLoginAction(email, password,
            () => console.log("Logged In Successfully!"),
            (message) =>console.log(`Error: ${message}`));
    };
    return(
        <React.Fragment>
            <h1>Already User? Sign in...</h1>
            <form noValidate onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input noValidate id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"/><br/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input noValidate id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"/><br/>
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                    Login | <i className="fas fa-sign-in-alt"></i>
                </button>
                <button className="btn btn-outline-secondary">
                    Cancel | <i className="fas fa-times"></i>
                </button>
            </form>
        </React.Fragment>
    )
}
const mapDispatchToProps = dispatch => ({
    dispatchLoginAction: (email, password, onSuccess, onError) =>
        dispatch(loginUser({ email, password }, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(LoginForm);