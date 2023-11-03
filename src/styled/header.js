import styled from 'styled-components';

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(151, 151, 151, 0.2);
height: 45px;
overflow-y: auto;
top: 0;
background-color: #3a506b;
position: fixed;
z-index: 1000;
width: 100%;

a{
    font-family: 'Bitter', serif;
}


.Title{
    color: white;
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    letter-spacing: 0px;
    font-weight: 200;
    padding-left: 32px;
    padding-bottom: 6px;
}

/* Tablets (Portrait-Modus) */
@media (min-width: 577px) and (max-width: 810px) {
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;

    .Title{
        padding-left: 0px;
        padding-bottom: 0px;
    }

    a{
        font-family: 'Bitter', serif;
        font-size: 12px;
    }

}


`;
