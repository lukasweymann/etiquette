import React, { useState } from "react";
import './Buttons.css';
import Button from "@material-ui/core/Button";

export default function Buttons(props) {
 
  
  return (
    <div>
    <div className="button-group">
      <Button onClick={() => props.handleQuery(`donts`)} 
       variant="outlined" color="secondary">
        DOS AND DONT'S
      </Button>
      <Button
      onClick={() => props.handleQuery(`covid19`)} 
       variant="outlined" color="secondary">
        COVID 19
      </Button>
      <Button onClick={() => props.handleQuery(`safety`)} variant="outlined" color="secondary">
        SAFETY
      </Button>
      <Button onClick={() => props.handleQuery(`style`)} variant="outlined" color="secondary">
        STYLE
      </Button>
      <Button variant="outlined" color="secondary">
        HEALTH
      </Button>
      <Button variant="outlined" color="secondary">
        ESSENTIALS
      </Button>
     
    </div>
    <div className="button-group">
    <Button onClick={() => props.handleQuery(`donts`)} 
    variant="outlined" color="secondary">
     DOS AND DONT'S
   </Button>
   <Button
   onClick={() => props.handleQuery(`covid19`)} 
    variant="outlined" color="secondary">
     COVID 19
   </Button>
   <Button onClick={() => props.handleQuery(`safety`)} variant="outlined" color="secondary">
     SAFETY
   </Button>
   <Button onClick={() => props.handleQuery(`style`)} variant="outlined" color="secondary">
     STYLE
   </Button>
   <Button variant="outlined" color="secondary">
     HEALTH
   </Button>
   <Button variant="outlined" color="secondary">
     ESSENTIALS
   </Button>
    </div>
    </div>
  );
}
