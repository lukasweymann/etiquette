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


export default function ContactPage() {

    return (
        <div className="contact-page">
            <NavBarMobile />
            <NavLinks />

            <div className="container">
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

                                    style={{ margin: 8 }}
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
                                    placeholder="e-mail"
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
                                    id="outlined-multiline-static"
                                    color="primary"
                                    multiline
                                    rows={4}
                                    defaultValue="Your message here.."
                                    variant="outlined"
                                />
                            </div>
                            <div className="submit">
                                <Button variant="contained" size="medium" color="primary" >
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </div>

                </div>
                <div className="map">
                    <MyMap lng={52.520303} lat={13.410801} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
