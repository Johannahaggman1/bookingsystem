import React, { Component } from "react";

class Login extends Component {


    render() {

        return(

            <div className={"Login_wrapper"}>

                <div className={"login-image"}>
                </div> 

                <div className={"login_section"}>
                        <p className={"login-header"}><i className={"fas fa-dumbbell"}> Logga in </i></p>
                    <form className={"login-from_wrapper"}>
                        <input type={"text"} name={"username"} placeholder={" Användarnamn"}/>
                        <input type={"password"} name={"password"} placeholder={" Lösenord"}/>
                        <button type={"submit"}>Logga in</button>
                    </form>
                </div>

            </div>

        )

    }
}

export default Login