// components/Button.js
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
        background-color: #0056b3;
        // transform: scale(1.05);
    }
`;


export default Button;
