import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import banner1 from '/public/banner1.png';
import banner2 from '/public/banner2.png';
import banner3 from '/public/banner3.png';

import * as Styled from './styled';

const Carousel = () => {
    const [current, setCurrent] = useState(1);
    const [mouseStart, setMouseStart] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const ClickHandler = (dot: number) => {
        if (dot === 0) {
            setCurrent(1);
        } else if (dot === 1) {
            setCurrent(2);
        } else {
            setCurrent(3);
        }
    };

    const cardWidth = -672;
    const translateX = cardWidth * current;
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = '350ms';
        }
    }, [current]);
    const handleDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setMouseStart(event.pageX);
    };
    const handleUp = (event: React.MouseEvent<HTMLDivElement>) => {
        const moved = mouseStart - event.pageX;
        if (Math.abs(moved) < 50) {
            return;
        }
        if (moved < 0) {
            setCurrent((prev) => prev - 1);
        } else {
            setCurrent((prev) => prev + 1);
        }
        return;
    };
    const handleEnd = () => {
        if (carouselRef.current) {
            if (current === 0) {
                carouselRef.current.style.transition = 'none';
                setCurrent(3);
                return;
            }
            if (current === 4) {
                carouselRef.current.style.transition = 'none';
                setCurrent(1);
                return;
            }
        }
    };
    console.log(current);
    return (
        <Styled.Wrapper>
            <Styled.Container
                translateX={translateX}
                onMouseDown={(e) => handleDown(e)}
                onMouseUp={(e) => handleUp(e)}
                onTransitionEnd={handleEnd}
                ref={carouselRef}
            >
                <Styled.Inner>
                    <Image
                        src={banner3}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                        draggable="false"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner1}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                        draggable="false"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner2}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                        draggable="false"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner3}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                        draggable="false"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner1}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                        draggable="false"
                    />
                </Styled.Inner>
            </Styled.Container>
            <Styled.Buttons>
                {[0, 1, 2].map((dot, i) => (
                    <Styled.BtnDiv
                        key={i}
                        onClick={() => ClickHandler(dot)}
                        isActive={current === dot + 1}
                    />
                ))}
            </Styled.Buttons>
        </Styled.Wrapper>
    );
};

export default Carousel;
