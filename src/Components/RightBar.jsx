import React from "react";
import { ListGroup } from "react-bootstrap";
import image from "./assests/ad.jpg";
import { Card } from "react-bootstrap";

function RightBar() {
  return (
    <>
      <ListGroup as="ul" className="mb-3" style={{ borderRadius: "8px" }}>
        <ListGroup.Item as="li">
          Add to your feed
          <span>
            <svg
              style={{ float: "right" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="grey"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </span>{" "}
        </ListGroup.Item>

        <ListGroup.Item as="li">
          <div className="d-flex">
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width="48"
                src="https://media-exp1.licdn.com/dms/image/C510BAQFybdyJxnwFQA/company-logo_100_100/0/1552144829593?e=1625702400&amp;v=beta&amp;t=77V4sCI4wmdvKPGNBvAvsjEcka3dlTVDz9eNsL-pR-E"
                loading="lazy"
                height="48"
                alt="JavaScript"
                id="ember833"
                class="lazy-image ember-view EntityPhoto-circle-3"
              ></img>
            </div>
            <div className="pl-2">
              <p className="mb-0" style={{ fontSize: "14px" }}>
                JavaScript
              </p>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Company - E-learning
              </p>
            </div>
          </div>

          <button
            style={{
              border: "2px solid grey",
              borderRadius: "15px",
              padding: "4px 15px",
              backgroundColor: "transparent",
              color: "grey",
              marginLeft: "55px",
              height: "32px",
            }}
          >
            <span className="mb-1">Follow</span>
          </button>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex">
            <div>
              <img
                width="48"
                src="https://media-exp1.licdn.com/dms/image/C560BAQGCzGZicS_iew/company-logo_100_100/0/1563558929015?e=1625702400&amp;v=beta&amp;t=kUQ9ij421R0Ul6tf_r3jed4CFjeNsH8f0tH0-ivgYxI"
                loading="lazy"
                height="48"
                alt="Google Developers Experts"
                id="ember839"
                class="lazy-image ember-view EntityPhoto-circle-3"
              ></img>
            </div>
            <div className="pl-2">
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Google Developers
              </p>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Company - E-learning
              </p>
            </div>
          </div>

          <button
            style={{
              border: "2px solid grey",
              borderRadius: "15px",
              padding: "4px 15px",
              backgroundColor: "transparent",
              color: "grey",
              marginLeft: "55px",
              height: "32px",
            }}
          >
            <span className="mb-1">Follow</span>
          </button>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          <div className="d-flex">
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width="48"
                src="https://media-exp1.licdn.com/dms/image/C510BAQFybdyJxnwFQA/company-logo_100_100/0/1552144829593?e=1625702400&amp;v=beta&amp;t=77V4sCI4wmdvKPGNBvAvsjEcka3dlTVDz9eNsL-pR-E"
                loading="lazy"
                height="48"
                alt="JavaScript"
                id="ember833"
                class="lazy-image ember-view EntityPhoto-circle-3"
              ></img>
            </div>
            <div className="pl-2">
              <p className="mb-0" style={{ fontSize: "14px" }}>
                JavaScript
              </p>
              <p className="mb-0" style={{ fontSize: "12px" }}>
                Company E-learning
              </p>
            </div>
          </div>

          <button
            style={{
              border: "2px solid grey",
              borderRadius: "15px",
              padding: "4px 15px",
              backgroundColor: "transparent",
              color: "grey",
              marginLeft: "55px",
              height: "32px",
            }}
          >
            <span className="mb-1">Follow</span>
          </button>
        </ListGroup.Item>
      </ListGroup>

      <ListGroup className="mb-3" style={{ borderRadius: "8px" }}>
        <ListGroup.Item style={{ fontSize: "14px", fontWeight: "600" }}>
          Today’s most viewed courses
          <span>
            <svg
              style={{ float: "right" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="grey"
              class="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </span>
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "12px", fontWeight: "500" }}>
          1.The Six Morning Habits of Hi... <br />
          <span style={{ fontSize: "11px", fontWeight: "400", color: "grey" }}>
            Pete Mockaitis and Bla Bla Bla
          </span>
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "12px", fontWeight: "500" }}>
          2.Speaking Confidently and Eft.. <br />
          <span style={{ fontSize: "11px", fontWeight: "400", color: "grey" }}>
            Another and Bla Bla Bla
          </span>
        </ListGroup.Item>
        <ListGroup.Item style={{ fontSize: "12px", fontWeight: "500" }}>
          3.Building Resilience <br />
          <span style={{ fontSize: "11px", fontWeight: "400", color: "grey" }}>
            The Last and Bla Bla Bla
          </span>
        </ListGroup.Item>
      </ListGroup>

      <Card className="mb-3" style={{ borderRadius: "9px" }}>
        <div className="px-1 text-center">
          <img
            src={image}
            alt="wow"
            style={{ width: "250px", borderRadius: "4px" }}
            className="pr-1"
          />
        </div>
      </Card>
      <div>
        <svg
          className="pl-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 14"
          data-supported-dps="56x14"
          fill="#0A66C2"
          class="mercado-match"
          width="56"
          height="14"
          focusable="false"
        >
          <g>
            <path
              class="background-mercado"
              d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
            ></path>
          </g>
        </svg>
        <span class="pl-2" style={{ fontSize: "12px" }}>
          LinkedIn Corporation © 2021
        </span>
      </div>
    </>
  );
}

export default RightBar;
