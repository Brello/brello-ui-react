import React from 'react'
import './login.styles.scss'
import GoogleLogin from 'react-google-login'

class LoginPage extends React.Component {


    onSignIn = (data) => {
        console.log(data)
    }

    render() {
        return (
            <GoogleLogin
            clientId="29454054203-h6li7bqro1e4bgt2q59ir2q91pnol5d4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.onSignIn}
            onFailure={this.onSignIn}
            cookiePolicy={'single_host_origin'}
          />)
    }
}


export default LoginPage