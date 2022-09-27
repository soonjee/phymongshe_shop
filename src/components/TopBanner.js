import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/TopBanner.scss"
import { top_banner } from "../data/common";
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TopBanner = () => {
    const topSlider = useRef(null);
    return (
        <div className='TopBanner'>
            <Slider
                arrows={false}
                autoplay={true}
                fade={true}
                ref={topSlider}
            >
                {
                    top_banner.map((it, idx) => {
                        return (
                            // key={it.idx 넣어도 됨}
                            <div key={it.id}>
                                <Link to={it.link}>{it.content}</Link>
                            </div>
                        )
                    })
                }
            </Slider>
            <FiArrowLeft onClick={() => topSlider.current.slickPrev()} className="icon L" />
            <FiArrowRight onClick={() => topSlider.current.slickNext()} className="icon R" />
        </div>
    )
}

export default TopBanner