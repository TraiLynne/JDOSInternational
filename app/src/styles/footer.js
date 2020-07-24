import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #36393C;
    display: flex;
    flex-direction: column;
    color: #ebebeb;
    justify-content: space-around;
    padding: 50px;

    @media(min-width: 500px){
        flex-direction: row
    }
`

export const SubContainer = styled.div`
    width: 100%;

    @media(min-width: 500px){
        width: 20%;
    }
`