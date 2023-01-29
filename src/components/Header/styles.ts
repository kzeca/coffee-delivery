import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    div {
        display: flex;
        gap: 0.75rem;
    }

`

export const LocationContainer = styled.div`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};

    svg {
        color: ${props => props.theme["purple"]};;
    }

`

export const CartButton = styled.button`
    isolation: isolate;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["yellow-light"]};
    
    svg {
        color: ${props => props.theme["yellow-dark"]}
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: ${props => props.theme["yellow-dark"]};
        z-index: 1;
        flex-grow: 0;
        color: ${props=> props.theme.white};
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        right: 9.375rem;
        top: 1.563rem;
    }
`