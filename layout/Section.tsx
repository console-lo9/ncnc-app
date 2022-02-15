import styled from '@emotion/styled';
import React from 'react';

const Section = (props: any) => {
    return <SectionBox>{props.children}</SectionBox>;
};

const SectionBox = styled.div`
    margin: 1px;
    background-color: #ffffff;
    border-radius: 0.5rem;
`;

export default Section;
