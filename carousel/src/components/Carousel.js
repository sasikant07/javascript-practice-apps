import React, {useEffect, useState, useRef} from 'react'

const Carousel = ({data}) => {
    const [active, setActive] = useState(0);
    const interval = useRef(null);
    
    useEffect(() => {
        start();
        return () => clearInterval(interval.current);
    }, []);

    const start = () => {
        interval.current = setInterval(() => {
        setActive((prev) => {
            if (prev === data.length - 1) {
            return 0;
            } else {
            return prev + 1;
            }
        });
        }, 3000);
    };

    const stop = () => {
        if (interval.current) clearInterval(interval.current);
    };

    const nextSlide = () => {
        stop();
        setActive((prev) => {
        if (prev === data.length - 1) {
            return 0;
        } else {
            return prev + 1;
        }
        });
    };

    const prevSlide = () => {
        stop();
        setActive((prev) => {
        if (prev === 0) {
            return data.length - 1;
        } else {
            return prev - 1;
        }
        });
    };

    const dotClick = (index) => {
        stop();
        setActive(index);
        start();
    }

  return (
    <>
        <div className="carousel">
            {data.map((item, index) => {
                return (
                    <div
                        key={item.id} 
                        className={active === index ? "carousel-item active" : "carousel-item"}
                    >
                        <img 
                            onMouseOver={stop}
                            onMouseLeave={start}
                            src={item.image} 
                            alt={item.image} />
                    </div>
                )
            })}
            <button className="prev" onClick={prevSlide}>&lt;</button>
            <button className="next" onClick={nextSlide}>&gt;</button>
        </div>
        <div className="dotContainer">
            {
                data.map((dot, index) => (
                    <div key={dot.id} onClick={() => dotClick(index)} className={`dot ${index === active ? "active" : ""}`}></div>
                ))
            }
        </div>
    </>
  )
}

export default Carousel;