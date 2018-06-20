import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import '../App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleLogin = () => {
        ReactDOM.render(
            <App />, 
            document.getElementById('root')
        );
    }
  render() {
    return (
        <div className="row mt-30p">
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                {/* login form */}
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">Đăng nhập</div>
                    <div className="panel-body">
                        <form className="form">
                            <fieldset>
                                <div className="form-group">
                                    {/* input usrname */}
                                    <input className="form-control" placeholder="Tài khoản" name="username" type="username" autofocus=""/>
                                </div>

                                <div className="form-group">
                                    {/* input passwd */}
                                    <input className="form-control" placeholder="Mật khẩu" name="password" type="password" value=""/>
                                </div>

                                {/* login btn */}
                                <button  
                                    className="btn btn-primary"
                                    onClick={this.handleLogin}>
                                    Đăng nhập
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            {/* /.col */}
            </div>
        {/* /.row */}
        </div>
    );
  }
}

export default Login;
