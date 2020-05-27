import React, {Component} from "react";

class About extends Component {

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

            <div className={"about_wrapper"}>
                <div className={"about-info"}>
                    <p className={"about-info-header"}><i className={"fas fa-dumbbell"}> StG workouts</i></p>
                    <p>Vi kommer göra vårt bästa för att hålla dig motiverad, så att du kan fortsätta med dina goda träningsvanor nu när vardagen ser lite annorlunda ut. Oavsett om du vill träna hemifrån, utomhus eller på något av våra träningscenter så har vi något för dig. Vi har därför samlat allt du behöver för att träna hemma. Välj bland över hundra olika träningsprogram, Online Training-pass, livesända gruppträningsklasser, PT Online och mycket mer. </p>
                </div>
                <div className={"about-image"}>
               </div>
            </div>



        )


    }



}

export default About;