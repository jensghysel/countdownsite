import React, {Component} from 'react';
import '../../public/static/css/fontello-icon.css';
import '../../public/static/css/linea-icon.css';
import '../../public/static/css/bootstrap.min.css';
import '../../public/static/css/simplelightbox.min.css';
import '../../public/static/css/animate.css';
import '../../public/static/css/slick.css';
import '../../public/static/css/main.css';
import '../../public/static/css/color-1.css';
// import '../../public/static/js/jquery-1.12.4';
// import '../../public/static/js/jquery-migrate-1.4.1';
import 'jquery';
// import '../../public/static/js/bootstrap.min';
import 'bootstrap';
// import '../../public/static/js/kinetic';
import 'kinetic';
import 'simple-lightbox';
// import '../../public/static/js/jquery.final-countdown';
// import '../../public/static/js/simple-lightbox.min';
// import '../../public/static/js/slick.min';

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
                <div id="info" className="col-md-12 text-white text-center page-info col-transform">
                    <div className="title-front">We are expecting</div>
                    <div className="all-title">
                        Julie <span>&</span> Jens
                    </div>
                    <div className="countdown-title">
                <span className="countdown-left"><span
                    className="countdown-right">Countdown To Baby Arrival</span></span>
                    </div>
                    <div className="countdown container">
                        <div className="clock row">
                            <div className="clock-item clock-days countdown-time-value col-sm-6 col-md-3">
                                <div className="wrap">
                                    <div className="inner">
                                        <div id="canvas-days" className="clock-canvas"></div>

                                        <div className="text">
                                            <p className="val">0</p>
                                            <p className="type-days type-time">DAYS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clock-item clock-hours countdown-time-value col-sm-6 col-md-3">
                                <div className="wrap">
                                    <div className="inner">
                                        <div id="canvas-hours" className="clock-canvas"></div>

                                        <div className="text">
                                            <p className="val">0</p>
                                            <p className="type-hours type-time">HOURS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clock-item clock-minutes countdown-time-value col-sm-6 col-md-3">
                                <div className="wrap">
                                    <div className="inner">
                                        <div id="canvas-minutes" className="clock-canvas"></div>

                                        <div className="text">
                                            <p className="val">0</p>
                                            <p className="type-minutes type-time">MINUTES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clock-item clock-seconds countdown-time-value col-sm-6 col-md-3">
                                <div className="wrap">
                                    <div className="inner">
                                        <div id="canvas-seconds" className="clock-canvas"></div>

                                        <div className="text">
                                            <p className="val">0</p>
                                            <p className="type-seconds type-time">SECONDS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="title-date">
                <span className="swirl-left"><span
                    className="swirl-right">July 17, 2017, in Odessa, Ukraine</span></span>
                    </div>
                    <i className="icon ico-l-sm icon-l-arrows-slim-down-dashed animated fadeInDown"></i>
                    <a className="btn btn-border-white show-info animated fadeInUp" role="button" data-href="#content">Geboortegokje
                        & foto's</a>
                </div>
                <div id="content" className="page-content col-md-12 text-center bg-white">
                    <section className="section container">
                        <h2 className="section-title">
                            <span>Geboortegokje</span>
                        </h2>
                        <div className="text-content">Hieronder kan je met je hulp van je naam jouw gokje wagen over het
                            geslacht en naam. Wij kijken alvast uit naar jullie antwoorden.
                        </div>
                    </section>
                    <div className="bezel"></div>
                    <section className="section section-gallery" id="gallery">
                        <h2 className="section-title t0">
                            <span>Photo Album</span>
                        </h2>
                        <div className="gallery-images row">
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img1.jpg">
                                        <img src="static/img/gallery/gallery-img1.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img2.jpg">
                                        <img src="static/img/gallery/gallery-img2.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img3.jpg">
                                        <img src="static/img/gallery/gallery-img3.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img4.jpg">
                                        <img src="static/img/gallery/gallery-img4.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img5.jpg">
                                        <img src="static/img/gallery/gallery-img5.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img6.jpg">
                                        <img src="static/img/gallery/gallery-img6.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img7.jpg">
                                        <img src="static/img/gallery/gallery-img7.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6  no-space">
                                <div className="bearr-gallery-item">
                                    <a href="static/img/gallery/gallery-img8.jpg">
                                        <img src="static/img/gallery/gallery-img8.jpg" alt="" />
                                        <div className="fade-icon">
                                            <span className="icon"><i className="icon icon-heart"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="footer copyrights">
                        <div className="copyright">© 2019 babyghysel | Development by Jens Ghysel</div>
                    </div>
                </div>
            </div>
        );
    }

}