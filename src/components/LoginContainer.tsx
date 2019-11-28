import React from 'react'
import LoginForm from './LoginForm'

const LoginContainer = () => {
        return (
            <div className='App_loginContainer'>
                <h1>logify</h1>
                <LoginForm onSubmit={({firstName, lastName, email}) => {
                    console.log(firstName, lastName, email)
                }}/>
            </div>
        )
}
export default LoginContainer;
