import React from "react";

import Button from "react-bootstrap/Button";
import sample from "../../images/projects/googlemeet.mp4";
import sample1 from "../../images/projects/product-hunt-alpha.mp4";
import sample2 from "../../images/projects/dineout.mp4";
import sample3 from "../../images/projects/livechat.mp4";
import "./projects.styles.css";

const TimeLine = () => {
  return (
    <>
      <h1 className=" text-center font-details ">PROJECTS</h1><br/>
      <div className="container1" id="projects">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>PRODUCT HUNT CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample1} type="video/mp4" />
                  </video>
                </div>
                <p>
                  Product Hunt Alpha is a product research website where users
                  can research products also add their own products.This was a
                  collaborative one built as a construct week project along with
                  three more developers.
                </p>
                <div>
                  <a
                    href="https://github.com/nitansh11/product-hunt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>DINEOUT CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample2} type="video/mp4" />
                  </video>
                </div>
                <p>
                  Dineout is a restaurant table reservation application allowing
                  diners to reserve a guaranteed table at the top restaurants in
                  the city.This was a collaborative one built as a construct
                  week project along with two more developers.
                </p>
                <div>
                  <a
                    href="https://github.com/ashish921998/Hexagon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>GOOGLE MEET CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample} type="video/mp4" />
                  </video>
                </div>
                <p>
                  Google Meet Clone is a simple one-one calling.It also got
                  couple of features like text messagging from one person to
                  another,screen sharing and simply calling functionality.This
                  was done by taking reference from youtube.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/Google-Meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>LIVE CHAT</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample3} type="video/mp4" />
                  </video>
                </div>
                <p>
                  A Live chat application where we can chat with our friends in
                  private rooms in real-time.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/chat_application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div><br/>
    </>
  );
};

export default TimeLine;
