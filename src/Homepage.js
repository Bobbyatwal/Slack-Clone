import React from 'react';
import "./Homepage.css";

function Homepage() {
    return (
       
            <div className="homepage">
                    <h1>Welcome to my Slack Application Clone </h1>
                    <h1 className="border" >
                      Visit my Portfolio:{" "}
                      <a href="http://DripDeveloper.com" target="_blank">
                        {" "}
                        Drip Developer
                      </a>
                    </h1>

                    <p>
                      <ul>
                        Below is a list of technology used in this application:
                        <li>ReactJS</li>
                        <li>Google User Authentication</li>
                        <li>Material-UI</li>
                        <li>React Context API</li>
                        <li>React Router</li>
                        <li>Firebase Real-time Database</li>
                        <li>CSS Variables</li>
                        <li>Flexbox</li>
                      </ul>
                    </p>
                  </div>
       
    )
}

export default Homepage;
