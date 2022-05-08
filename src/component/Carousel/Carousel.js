import React from 'react';
import banner1 from "../../images/banner1.jpeg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpeg"

const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Khusboo Perfumes House</h2>
                            <h5>A House of Authenticate Fragrance.Happy this Eid time with Khushboo.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Extra 20% Discount in this Ramadan</h3>
                            <h5>Let's spread the sanctity of Ramadan with fragrance of Khushboo</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className='text-black'>Ahsan brand that you are looking for your brand </h3>
                            <h5 className='text-black'>Do business with Ahsan Perfumes.We have a wide variety of perfumes and we sell them at wholesale prices.</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;