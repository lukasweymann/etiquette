import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import NavLinks from "../components/NavLinks";
import CountrySelect from "../components/CountrySelect";
import CuriousMapContainer from '../components/CuriousMapContainer';
import "./HomePage.css";
import Logo from "../images/etiquette-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function HomePage() {
  const classes = useStyles();

  return (
    <div className="homepage">
      <NavLinks />
      <div className="homepage-container">
        <img src={Logo} className="etiquette-logo" alt="company's logo" />
        <CountrySelect/>
        <div className={classes.root}>
          <Button className="curious-button" variant="contained" component={Link} to="#CuriousMap">Are you curious?</Button>
        </div>
        <Link
          to={{
            hash: "#curious-map",
          }}
        >
          Are you curious?
        </Link>
        
        <CuriousMapContainer id="CuriousMap"/>
      </div>
    </div>
  );
}
