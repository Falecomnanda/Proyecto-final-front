import React, { useContext } from 'react';
import { Context } from './../store/appContext';

const Login = props => {
    const {store, actions} = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input type="text" id="username" name="username" className="form-control"
                                onChange={ e => actions.handleChange(e)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" id="password" name="password" className="form-control"
                                onChange={ e => actions.handleChange(e)} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary btn-block"
                            onClick={() => actions.getLogin(props.history)}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;