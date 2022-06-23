import styled from "styled-components"

export const Hexagon = styled.div`
    position: relative;
    background-color: var(--main-color);
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);

    div#bg{
        position: absolute;
        inset: 5px;
        width: ${props => `${props.size - 10}px`};
        height: ${props => `${props.size - 10}px`};
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        background-color: var(--light-color);

        img{
            position: absolute;
            inset: 0px;
            width:  ${props => `${props.size - 10}px`};
            height:  ${props => `${props.size - 10}px`};
            clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
    }
`