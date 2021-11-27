import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { handleRegistration, login, error, handleNameChange, handleGoogleSign, changeEmailInput, changePasswordInput, handleChangeCkBox, handleResetPassword, } = useAuth();

    return (
        <div className="mx-5 my-5 bg-warning" onSubmit={handleRegistration}>
            <form>
                <h3 className="text-primary">Please {login ? 'Login' : 'Sign Up'} </h3>
                {!login && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Please type your name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={changeEmailInput} type="email" className="form-control" id="inputEmail3" placeholder="Please type your email" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={changePasswordInput} type="password" className="form-control" id="inputPassword3" placeholder="Please type your password" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={handleChangeCkBox} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">

                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 text-danger" >{error}</div>
                <button type="submit" className="btn btn-info">{login ? 'Login' : 'Sign Up'}</button>
                <br /> <br />
                <button onClick={handleResetPassword} type="button" className="btn btn-info btn-sm">Reset Password</button>
            </form>
            <hr />

            <button className="btn mb-4 btn-info rounded" onClick={handleGoogleSign}>Google Log In</button>

        </div>
    );
};

export default Login;