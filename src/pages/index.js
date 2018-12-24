import React, {Component} from 'react';
import '../../public/static/css/fontello-icon.css';
import '../../public/static/css/linea-icon.css';
import '../../public/static/css/bootstrap.min.css';
import '../../public/static/css/animate.css';
import '../../public/static/css/main.css';
import '../../public/static/css/color-1.css';
import 'jquery';
import 'bootstrap';
import 'kinetic';
import Lightbox from "react-simple-lightbox";
import Head from "../components/head";
import Geslacht from "../components/Geslacht";
import Gallery from "../components/Gallery";

export default class index extends Component {
    render(){
        require('../../public/static/js/main');
        return (
            <div className="page-overlay">
                <div id="preloader">
                    <div className="alignment">
                        <div className="v-align center-middle">
                            <div className="heart-animation one">
                                <i className="icon icon-heart"></i>
                            </div>
                            <div className="heart-animation two">
                                <i className="icon icon-heart"></i>
                            </div>
                            <div className="heart-animation three">
                                <i className="icon icon-heart"></i>
                            </div>
                            <div className="heart-animation four">
                                <i className="icon icon-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-image-bg reveal scale-in"></div>
                <div className="overlay-bg-black overlay-opacity"></div>
                <header>
                    <nav className="navbar navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 text-white col-transform">
                                    <div className="navbar-wrapper">
                                        <button className="navbar-button show-info" data-href="#content">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <Head />
                <div id="content" className="page-content col-md-12 text-center bg-white">
                    <Geslacht />
                    <div className="bezel"></div>
                    <Gallery />
                    <div className="footer copyrights">
                        <div className="copyright">© 2019 babyghysel | Development by Jens Ghysel</div>
                    </div>
                </div>
            </div>
        );
    }
}