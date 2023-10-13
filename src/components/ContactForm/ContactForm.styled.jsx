import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  border: 1px solid #82d47b;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  &:focus {
    border-color: #00ff00;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
  color: #666;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: #82d47b;
  margin-top: 10px;
  pointer-events: none;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ButtonForm = styled.button`
  font-size: 25px;
  padding: 10px 15px;
  background-color: #82d47b;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 320px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 150px;
  }

  &:active {
    background-color: black;
  }
`;
