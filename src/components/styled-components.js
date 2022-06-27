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

export const PlayerLi = styled.li`
    list-style: none;
    position: relative;
    padding: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    color: var(--light-color);
    font-size: .9em;
    font-weight: bold;
    margin-top: 10px;
    border-bottom: 1px dotted var(--main-color);
    transition: 0.3s;

    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }

    &:before{
        content: attr(data-abbr);
        color: var(--main-color);
        margin-right: 15px;
        font-weight: lighter;
    }

    button{
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: none;
        z-index: 1;
        background-color: transparent;
    }

    img{
        display: block;
        height: 70%;
        margin-right: 15px;
    }
`