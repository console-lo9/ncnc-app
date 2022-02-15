import React, { useRef, useState } from 'react';

import Link from 'next/link';
import { conCategory1s } from 'types/categoryListTypes';

import * as Styled from './styled';

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
    const letDownFalse = () => {
        setIsDown(false);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - slider.current!.offsetLeft;
        const move = x - startX;
        slider.current!.scrollLeft = scrollLeft - move;
    };

    return (
        <Styled.CategoryNavBar>
            <Styled.CategoryNavBox ref={slider}>
                <Styled.CategoryNavSlider
                    onMouseDown={handleMouseDown}
                    onMouseUp={letDownFalse}
                    onMouseLeave={letDownFalse}
                    onMouseMove={handleMouseMove}
                >
                    {categoryList.map((category: conCategory1s, i: number) => (
                        <Link
                            key={`categoryNav-${i}`}
                            href={`/categories/${category.id}`}
                        >
                            <Styled.CategoryNavA
                                className={id === category.id ? 'selected' : ''}
                            >
                                <Styled.CategoryNavItem>
                                    {category.name}
                                </Styled.CategoryNavItem>
                            </Styled.CategoryNavA>
                        </Link>
                    ))}
                </Styled.CategoryNavSlider>
            </Styled.CategoryNavBox>
        </Styled.CategoryNavBar>
    );
};

export default CategoryNav;
