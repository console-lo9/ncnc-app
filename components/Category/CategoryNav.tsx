import React, { useRef, useState } from 'react';

import Link from 'next/link';
import { conCategory1s } from 'types/categoryListTypes';

import styled from '@emotion/styled';

const CategoryNav = ({
    categoryList,
    id,
}: {
    categoryList: conCategory1s[];
    id: number;
}): JSX.Element => {
    const slider = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (slider.current) {
            setIsDown(true);
            setStartX(event.pageX - slider.current.offsetLeft);
            setScrollLeft(slider.current.scrollLeft);
        }
    };
    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseEnter = () => {
        setIsDown(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDown) return;
        event.preventDefault();
        if (slider.current) {
            const x = event.pageX - slider.current.offsetLeft;
            const move = x - startX;
            slider.current.scrollLeft = scrollLeft - move;
        }
    };
    // console.log('startX:', startX, 'scrollLeft', scrollLeft);
    return (
        <CategoryNavBar>
            <CategoryNavBox>
                <CategoryNavSlider
                    ref={slider}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                >
                    {categoryList.map((category: conCategory1s, i: number) => (
                        <Link
                            key={`categoryNav-${i}`}
                            href={`/categories/${category.id}`}
                        >
                            <CategoryNavA
                                className={id === category.id ? 'selected' : ''}
                            >
                                <CategoryNavItem>
                                    {category.name}
                                </CategoryNavItem>
                            </CategoryNavA>
                        </Link>
                    ))}
                </CategoryNavSlider>
            </CategoryNavBox>
        </CategoryNavBar>
    );
};

const CategoryNavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    max-width: 48rem;
    background-color: #fff;
    z-index: 49;
`;
const CategoryNavBox = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    font-size: 16px;
`;

const CategoryNavSlider = styled.div`
    padding: 0px 10px;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    font-size: 16px;
`;

const CategoryNavA = styled.a`
    display: inline-flex;
    padding: 10px 14px;
    height: 55px;
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 0 10px;
    align-items: center;
    justify-content: center;
    &.selected {
        border-bottom: 2px solid #f75656;
        padding: 10px 14px 9px 14px;
        color: #f75656;
    }
`;

const CategoryNavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default CategoryNav;
