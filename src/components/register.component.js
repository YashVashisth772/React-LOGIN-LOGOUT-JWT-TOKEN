import React from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser  } from '../redux/actions/authActionCreators';

const RegisterForm = ({ dispatchRegisterAction }) =>{

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastLname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        dispatchRegisterAction(firstName, lastName, email, password, 
            () => console.log("Logged In Successfully!"),
            (message) =>console.log(`Error: ${message}`));
    };

    return(
        <React.Fragment>
            <h1>New User? Sign up...</h1>

            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label><br />
                    <input noValidate type="firstName" id="firstName" placeholder="First Name"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        className="form-control" /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label><br />
                    <input noValidate type="lastName" id="lastName" placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => { setLastLname(e.target.value) }} 
                        className="form-control" /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label><br />
                    <input noValidate type="email" id="email1" placeholder="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control"  /><br />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label><br />
                    <input noValidate type="password" id="password1" placeholde="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control"  /><br /><br />
                </div>
                    <button type="submit" className="btn btn-primary mr-2"
                    >Register | <i className="fas fa-user-plus"></i>
                    </button>
                    <button className="btn btn-outline-secondary">
                    Cancel | <i className="fas fa-times"></i>
                       </button>
            </form>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction : (firstName, lastName, email, password, onSuccess, onError )=> 
        dispatch(registerUser({ firstName, lastName, email, password }, onSuccess, onError ))
}) 
export default connect(null, mapDispatchToProps)(RegisterForm);