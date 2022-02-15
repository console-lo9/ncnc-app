import React, { useState } from 'react';

import Image from 'next/image';
import styled from '@emotion/styled';

import banner1 from '/assets/banner1.png';
import banner2 from '/assets/banner2.png';
import banner3 from '/assets/banner3.png';

type ContainerProps = {
    translateX: number;
};

type ButtonDivProps = {
    isActive: boolean;
};

const Wrapper = styled.div`
    display: flex;
`;

const Container = styled.div<ContainerProps>`
    width: 1125px;
    display: flex;
    transform: translateX(${(props) => props.translateX}px);
    transition: 350ms all ease-in-out;
`;

const Inner = styled.div`
    width: 375px;
    height: 141px;
    overflow: hidden;
    position: relative;
`;

const Buttons = styled.div`
    position: absolute;
    top: 165px;
    left: 310px;
    display: flex;
`;

const BtnDiv = styled.div<ButtonDivProps>`
    margin-right: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${(props) => (props.isActive ? '#000' : '#fff')};
`;

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

    const cardWidth = -375;
    const translateX = cardWidth * current;

    return (
        <Wrapper>
            <Container translateX={translateX}>
                <Inner>
                    <Image src={banner1} width={375} height={141} alt="menu" />
                </Inner>
                <Inner>
                    <Image src={banner2} width={375} height={141} alt="menu" />
                </Inner>
                <Inner>
                    <Image src={banner3} width={375} height={141} alt="menu" />
                </Inner>
            </Container>
            <Buttons>
                {[0, 1, 2].map((dot) => (
                    <BtnDiv
                        onClick={() => ClickHandler(dot)}
                        isActive={current === dot}
                    />
                ))}
            </Buttons>
        </Wrapper>
    );
};

export default Carousel;

/*

*/
