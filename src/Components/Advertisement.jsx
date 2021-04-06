import React from "react";
import image from "./assests/ad.jpg";
import { Card } from "react-bootstrap";

function Advertisement() {
  return (
    <div>
      <Card className="mb-3">
        <div className="px-1 text-center">
          <img src={image} alt="wow" />
        </div>
      </Card>
    </div>
  );
}

export default Advertisement;
