import React from "react";
import './Buttons.css';
import Button from "@material-ui/core/Button";

export default function Buttons() {
  return (
    <div className="button-group">
      <Button variant="outlined" color="secondary">
        DOS AND DONT'S
      </Button>
      <Button variant="outlined" color="secondary">
        COVID 19
      </Button>
      <Button variant="outlined" color="secondary">
        SAFETY
      </Button>
      <Button variant="outlined" color="secondary">
        STYLE
      </Button>
      <Button variant="outlined" color="secondary">
        HEALTH
      </Button>
      <Button variant="outlined" color="secondary">
        ESSENTIALS
      </Button>
    </div>
  );
}
