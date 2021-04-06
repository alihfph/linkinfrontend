import React from "react";
import { Card } from "react-bootstrap";

function Bio({ bioText }) {
  return (
    <div>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Info</Card.Title>
          <Card.Text>{bioText}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Interests</Card.Title>
          <div className="d-flex">
            <div className="d-flex col" style={{ paddingLeft: "0" }}>
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&amp;v=beta&amp;t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo"
                  loading="lazy"
                  alt="Strive School"
                  id="ember2536"
                  class="pv-entity__logo-img EntityPhoto-square-4 lazy-image ember-view"
                  style={{ height: "56px", width: "56px" }}
                ></img>
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "0",
                    paddingLeft: "10px",
                    fontSize: "14px",
                  }}
                >
                  Strive School
                </p>
                <p
                  style={{
                    marginBottom: "0",
                    paddingLeft: "10px",
                    fontSize: "12px",
                    color: "#00000099",
                  }}
                >
                  1,531 followers
                </p>
              </div>
            </div>
            <div className="d-flex col">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGO4Mxhy8KAgQ/company-logo_100_100/0/1564764741123?e=1625702400&amp;v=beta&amp;t=-Aj4XkoY_M2rssT8hVM3jztJyRBM0vKQ-w_4ge6IVU8"
                  loading="lazy"
                  alt="GitHub"
                  id="ember2542"
                  class="pv-entity__logo-img EntityPhoto-square-4 lazy-image ember-view"
                  style={{ height: "56px", width: "56px" }}
                ></img>
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "0",
                    paddingLeft: "10px",
                    fontSize: "14px",
                  }}
                >
                  GitHub
                </p>
                <p
                  style={{
                    marginBottom: "0",
                    paddingLeft: "10px",
                    fontSize: "12px",
                    color: "#00000099",
                  }}
                >
                  1,867,373 followers
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bio;
