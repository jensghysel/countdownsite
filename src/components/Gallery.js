import {Component} from "react";
import React from "react";
import Lightbox from "react-simple-lightbox";

export default class Gallery extends Component {
    render(){
        return (
            <section className="section section-gallery" id="gallery">
                <h2 className="section-title t0">
                    <span>Photo Album</span>
                </h2>
                <div className="gallery-images row">
                    {this._renderGallery()}
                </div>
            </section>
        );
    }

    _renderGallery() {
        let rows = [];
        for(let i = 1; i < 5; i++){
            let imageSrc = 'static/img/gallery/gallery-img'+i+'.jpg';
            rows.push(
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 no-space" key={i}>
                    <div className="bearr-gallery-item">
                        <a href="#">
                            <Lightbox style={{cursor: "pointer"}}>
                                <img src={imageSrc} alt="" />
                                <div className="fade-icon">
                                    <span className="icon"><i className="icon icon-heart"></i></span>
                                </div>
                            </Lightbox>
                        </a>
                    </div>
                </div>
            );
        }
        return rows;
    }
}