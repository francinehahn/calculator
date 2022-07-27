import styled from 'styled-components'


export const MainContainer = styled.section `
    display: flex;
    flex-direction: column;
    background-color: black;
    @media screen and (min-width: 1201px) {
        margin: 15px auto;
        padding: 17vh 1vw 6vh 2.5vw;
        width: 22%;
        border-radius: 10px;
    }
    @media screen and (min-width: 320px) and (max-width: 1200px) {
        padding: 22vh 2vw 12vh 8vw;
        width: 90%;
    }
`

export const DisplaySection = styled.h1 `
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: right;
    margin-bottom: 6vh;
    @media screen and (min-width: 1200px) {
        font-size: 48px;
        padding-right: 2vw;
    }
    @media screen and (min-width: 850px) and (max-width: 1200px) {
        font-size: 74px;
        padding-right: 7vw;
    }
    @media screen and (min-width: 750px) and (max-width: 850px) {
        font-size: 64px;
        padding-right: 7vw;
    }
    @media screen and (min-width: 550px) and (max-width: 750px) {
        font-size: 56px;
        padding-right: 7vw;
    }
    @media screen and (min-width: 460px) and (max-width: 550px) {
        font-size: 48px;
        padding-right: 7vw;
    }
    @media screen and (min-width: 320px) and (max-width: 460px) {
        font-size: 42px;
        padding-right: 7vw;
    }
`

export const CalculatorSection = styled.section `
    display: grid;
    row-gap: 2vh;
    grid-template-columns: repeat(4, 25%);
    width: 100%;

    button {
        font-family: Arial, Helvetica, sans-serif;
        border: none;
        cursor: pointer;
        @media screen and (min-width: 1200px) {
            font-size: 24px;
            padding: 2vh 0;
        }
        @media screen and (min-width: 1100px) and (max-width: 1200px) {
            font-size: 34px;
            padding: 8.5vh 0;    
        }
        @media screen and (min-width: 980px) and (max-width: 1100px) {
            font-size: 32px;
            padding: 8vh 0;    
        }
        @media screen and (min-width: 900px) and (max-width: 980px) {
            font-size: 30px;
            padding: 7vh 0;    
        }
        @media screen and (min-width: 850px) and (max-width: 900px) {
            font-size: 28px;
            padding: 6.2vh 0;    
        }
        @media screen and (min-width: 760px) and (max-width: 850px) {
            font-size: 28px;
            padding: 5.8vh 0;    
        }
        @media screen and (min-width: 680px) and (max-width: 760px) {
            font-size: 26px;
            padding: 5.2vh 0;    
        }
        @media screen and (min-width: 600px) and (max-width: 680px) {
            font-size: 24px;
            padding: 4.7vh 0;    
        }
        @media screen and (min-width: 550px) and (max-width: 600px) {
            font-size: 24px;
            padding: 4.1vh 0;    
        }
        @media screen and (min-width: 510px) and (max-width: 550px) {
            font-size: 24px;
            padding: 3.7vh 0;    
        }
        @media screen and (min-width: 450px) and (max-width: 510px) {
            font-size: 22px;
            padding: 3.3vh 0;    
        }
        @media screen and (min-width: 415px) and (max-width: 450px) {
            font-size: 19px;
            padding: 3vh 0;    
        }
        @media screen and (min-width: 320px) and (max-width: 415px) {
            font-size: 18px;
            padding: 2.8vh 0;
        }
    }

    button:nth-child(1) {
        grid-column-start: 1;
    }

    button:nth-child(17) {
        grid-column-start: 1;
        grid-column-end: 3;
        background-color: rgb(82, 82, 82);
        color: white;
        border-radius: 65px;
        width: 90%;
        text-align: left;
        padding-left: 25px;
    }

    button:nth-child(4), button:nth-child(8), button:nth-child(12), button:nth-child(16), button:nth-child(19) {
        background-color: orange;
        color: white;
        border-radius: 50%;
        width: 70%;
        :active {
            background-color: darkorange;
        }
    }

    button:nth-child(1), button:nth-child(2), button:nth-child(3) {
        background-color: rgb(204, 204, 204);
        color: black;
        border-radius: 50%;
        width: 70%;
    }

    button:nth-child(5), button:nth-child(6), button:nth-child(7), button:nth-child(9), button:nth-child(10), button:nth-child(11), button:nth-child(13), button:nth-child(14), button:nth-child(15), button:nth-child(18) {
        background-color: rgb(82, 82, 82);
        color: white;
        border-radius: 50%;
        width: 70%;
    }
`