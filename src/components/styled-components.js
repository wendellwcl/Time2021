import styled from "styled-components"

export const Hexagon = styled.div`
    position: relative;
    background-color: var(--main-color);
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);

    button{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border: none;
        background-color: transparent;
    }

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