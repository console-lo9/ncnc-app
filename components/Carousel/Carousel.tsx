import React, { useState } from 'react';

import Image from 'next/image';
import banner1 from '/public/banner1.png';
import banner2 from '/public/banner2.png';
import banner3 from '/public/banner3.png';

import * as Styled from './styled';

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const ClickHandler = (dot: number) => {
        if (dot === 0) {
            setCurrent(0);
        } else if (dot === 1) {
            setCurrent(1);
        } else {
            setCurrent(2);
        }
    };

    const cardWidth = -672;
    const translateX = cardWidth * current;

    return (
        <Styled.Wrapper>
            <Styled.Container translateX={translateX}>
                <Styled.Inner>
                    <Image
                        src={banner1}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner2}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                    />
                </Styled.Inner>
                <Styled.Inner>
                    <Image
                        src={banner3}
                        alt="menu"
                        layout="fill"
                        sizes="672px"
                    />
                </Styled.Inner>
            </Styled.Container>
            <Styled.Buttons>
                {[0, 1, 2].map((dot, i) => (
                    <Styled.BtnDiv
                        key={i}
                        onClick={() => ClickHandler(dot)}
                        isActive={current === dot}
                    />
                ))}
            </Styled.Buttons>
        </Styled.Wrapper>
    );
};

export default Carousel;
