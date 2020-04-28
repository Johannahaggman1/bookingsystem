import React, {Component} from "react";

class Register extends Component {

constructor(props){
        super(props)

        //initillerat state
        this.state = {
            companyImage: "",
            companyInfo: ""
        }

    }

    render() {

        return(

            <div className={"register_wrapper"}>
                <div className={"register-section"}>
                    <p className={"register-input-header"}><i className={"fas fa-dumbbell"}> Bli medlem </i></p>
                    <p>På några klick kan du komma igång med din nya livsstil, allt du behöver göra är att fylla i fälten nedan! Varmt välkommen!</p>
                    <form className={"register-from_wrapper"}>
                        <input type={"text"} name={"firstName"} placeholder={" Förnamn"}/>
                        <input type={"text"} name={"lastName"} placeholder={" Efternamn"}/>
                        <input type={"mail"} name={"email"} placeholder={" E-mail"}/>
                        <input type={"number"} name={"number"} placeholder={" Telefonnummer"}/>
                        <button type={"submit"}>Registrera</button>
                    </form>
                </div>
                <div className={"register-image"}>

                </div>
            </div>



        )


    }



}

export default Register;