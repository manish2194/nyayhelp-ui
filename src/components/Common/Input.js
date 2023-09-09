import styled from 'styled-components';
const Input = styled.input`
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
    border: 1.5px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    color: #555;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        outline: none;
    }
`;

export default Input;