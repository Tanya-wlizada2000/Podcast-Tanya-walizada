import "./About.css";
const About = () => {
    return (
        <>
            <div className="mainContianeer">
                <div className="aboutItem">
                    <div className="aboutHeading">
                    <h2>Talk. Listen. Get inspired by every minute of it.</h2>
                    </div>
                    
                    <div className="thingingimgIdeaimgText">
                        <div className="thingingimg">
                            <img src="thinking.svg" alt="thinking" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                        <div className="thingingimg">
                            <img src="ideas.png" alt="idea" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                    </div>
                   
                   <div className="aboutPinkBox">
                       <div className="pinkBoxText" style={{
                            marginTop:"100px"
                        }}>
                        <h3 style={{
                            fontSize:"36px",
                            fontWeight:"700",
                            width:"900px",
                            margin:"0 auto"
                        }}>One of the best daily podcasts that covers every topic on Spotify.</h3>
                        <div className="pinkBoximg" style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            paddingBottom:"80px"
                        }}>
                            <img src="users.png" alt="users" />
                            <img src="platform.png" alt="platform" />
                        </div>
                       </div>
                   </div>
                </div>
            </div>
        </>
    );
}

export { About };