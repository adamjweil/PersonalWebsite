import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = (props) => (

        <footer className="page-footer font-small blue-grey lighten-5 pt-0">

            <div>
                <div className="container">

                    <div className="row py-4 d-flex align-items-center">


                        <div className="col-12 col-md-5 text-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text text-center text-md-left"><strong>Get connected with us on social networks!</strong></h6>
                        </div>

                        <div className="col-12 col-md-7 text-center text-md-right">

                            <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>

                            <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>

                            <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>

                            <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>

                            <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                        </div>


                    </div>

                </div>
            </div>


            <div className="container mt-5 mb-4 text-center text-md-left">
                <div className="row mt-3">


                    <div className="col-md-3 col-lg-4 col-xl-3 mb-4 dark-grey-text">
                        <h6 className="title font-weight-bold"><strong>Company name</strong></h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto">
                          </hr>
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 dark-grey-text">
                        <h6 className="title font-weight-bold"><strong>Products</strong></h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto">
                        </hr>
                        <p><a href="#!" className="dark-grey-text">MDBootstrap</a></p>
                        <p><a href="#!" className="dark-grey-text">MDWordPress</a></p>
                        <p><a href="#!" className="dark-grey-text">BrandFlow</a></p>
                        <p><a href="#!" className="dark-grey-text">Bootstrap Angular</a></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 dark-grey-text">
                        <h6 className="title font-weight-bold"><strong>Useful links</strong></h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto">
                        </hr>
                        <p><a href="/Home" className="dark-grey-text">Home</a></p>
                        <p><a href="/Projects" className="dark-grey-text">Projects</a></p>
                        <p><a href="/Resume" className="dark-grey-text">Resume</a></p>
                        <p><a href="/Contact" className="dark-grey-text">Contact</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 dark-grey-text">
                        <h6 className="title font-weight-bold"><strong>Contact</strong></h6>
                        <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto">
                        </hr>
                        <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                        <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                        <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>


                </div>
            </div>

            <div className="footer-copyright py-3 text-center">
                <div className="container-fluid">
                    © 2017 Copyright: <a href="https://mdbootstrap.com/material-design-for-bootstrap/"><strong> MDBootstrap.com</strong></a>
                </div>
            </div>


        </footer>


);

export default Footer;
