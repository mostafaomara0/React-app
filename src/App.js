import "bulma/css/bulma.css"
import ProfileCard from "./profileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png"

function App (){
    return(
        <div>
            <section className="hero is-primary">
              <div className="hero-body">
                <p className="title">
                porsnal digital assistants
                </p>
            </div>
           </section>
            
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <ProfileCard 
                        title="Alexa" 
                        handel="@alexa99" 
                        image={alexaImage}
                        discribtion="Alexa was created by Amazone and helpe you to buy things"
                        />
                        </div>
                        <div className="column is-4">
                        <ProfileCard 
                        title="Cortana" 
                        handel="@cortana99"  
                        image={cortanaImage}
                        discribtion="Cortana made by Microsoft .how knows what it dose!"
                        />
                        </div>
                        <div className="column is-4">
                        <ProfileCard
                         title="Siri" 
                         handel="@siri99" 
                         image={siriImage}
                         discribtion="Siri made by Apple and is being phase out "
                         />
                        </div>
                    </div>
                </section>
            </div>
         
            
        </div>
    )
}
export default App;