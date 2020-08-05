import React from 'react';
import NavLinks from '../components/NavLinks';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MyMap from '../map/MyMap';
import Icon from '@material-ui/core/Icon';

import { createMuiTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';


import { Phone, PinDrop, MailOutline } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import './ContactPage.css';
import Footer from '../components/Footer';

import NavBarMobile from "../components/NavBarMobile";

const useStyles = makeStyles(theme => ({

    inputRoot: {
        color: "grey",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey"
        }
    },
}));


export default function ContactPage() {
    const classes = useStyles();

    return (
        <div className="contact-page">
            <NavBarMobile />
            <NavLinks />

            <div className="container-contact-us">
                <div className="container__headline">
                    <h1>We'd love to hear from you</h1>
                    <p>Questions? Did you make different experiences travelling? We're all ears.</p>
                </div>
                <div className="section">
                    <div className="card">
                        <div className="contact-info">
                            <p><Phone style={{ color: "#fff" }} />	158-695-6372</p>
                            <p><PinDrop style={{ color: "#fff" }} />	Alexanderplatz 2, 10178 Berlin</p>
                            <p><MailOutline style={{ color: "#fff" }} /><a href="#" style={{ paddingLeft: "5px", color: "#fff", textDecoration: "none" }} >info@etiquette.com</a></p>
                        </div>
                        <hr />
                        <div className="social-media">
                            <a href="#" className="social-media-icon"><InstagramIcon style={{ color: "#fff" }} fontSize='large' /></a>
                            <a href="#" className="social-media-icon"><TwitterIcon style={{ color: "#fff" }} fontSize='large' /></a>
                            <a href="#" className="social-media-icon"><FacebookIcon style={{ color: "#fff" }} fontSize='large' /></a>
                        </div>
                    </div>
                    <div className="form-container">
                        <form action="/">
                            <div className="row">

                                <TextField
                                    id="standard-full-width"

                                    style={{ margin: 8, }}
                                    placeholder="Name"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="standard-full-width"

                                    style={{ margin: 8 }}
                                    placeholder="E-mail"
                                    fullWidth
                                    margin="normal"
                                    color="red"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </div>

                            <div className="subject">
                                <TextField
                                    id="standard-full-width"

                                    style={{ margin: 0 }}
                                    placeholder="Subject"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="message">
                                <TextField
                                    classes={classes}
                                    id="outlined-multiline-static"
                                    label="Your message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    InputLabelProps={{
                                        style: {
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            width: "100%",
                                            color: "grey"
                                        }
                                    }}
                                />
                            </div>
                            <div className="submit">
                                <Button variant="contained" size="medium" >
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className="map"><a href="https://www.google.com/maps/place/Alexanderplatz/@52.5219814,13.4111173,17z/data=!3m1!4b1!4m5!3m4!1s0x47a84e1edb11286f:0x30fc01c366e4166e!8m2!3d52.5219814!4d13.413306" target="_blank"><img src={require('../images/contact-map.png')} /></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
