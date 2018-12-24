import {Component} from "react";
import React from "react";

export default class Head extends Component {
    render(){
        return (
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
                    className="swirl-right">Geef jouw pronostiek door</span></span>
                </div>
                <i className="icon ico-l-sm icon-l-arrows-slim-down-dashed animated fadeInDown"></i>
                <a className="btn btn-border-white show-info animated fadeInUp" role="button" data-href="#content">Geboortegokje
                    & foto's</a>
            </div>
        );
    }
}