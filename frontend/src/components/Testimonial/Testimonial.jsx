import React, { useEffect, useState } from 'react';
import { getAllTestimonials } from '../../services/testimonial.service';

export default function Testimonial() {

    const [testimonialList, setTestimonialList] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    const [error, setError] = useState(false);
    const getAllTestimonial = async () => {
        await getAllTestimonials().then((res) => {
            console.log(res);
            if (!res) {
                setError(true);
            }
            setTestimonialList(res.data.testimonials);
        }).catch((err) => {
            setError(true);
        });
    }
    useEffect(() => {
        setIsMounted(true);
        getAllTestimonial();
        return () => setIsMounted(false);
    }, []);
    if (!isMounted) return (<div>loading</div>);
    return (
        <section id="testimonial" className="testimonial-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-10">
                            <h4 className="title">Testimonial</h4>
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row testimonial-active">
                            {testimonialList.length > 0 ?
                                testimonialList.map((item) => (
                                    <div key={item.testimonialId} className="col-lg-4">
                                        <div className="single-testimonial mt-30 mb-30 text-center">
                                            <div className="testimonial-image">
                                                <img src={`assets/images/${item.photo}`} alt="Author" />
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="text">{item.testimonialDescription}</p>
                                                <h6 className="author-name">{item.name}</h6>
                                                <span className="sub-title">{item.post}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <p>Loading</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
