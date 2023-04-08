import styled from 'styled-components';
import { Form, Field } from 'formik';

const CompleteForm = styled(Form)`
  margin-bottom: 40px;
`;

const Label = styled.label`
  color: #2a2a2a;
  display: grid;
  font-size: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 18px;
  border-radius: 4px;
  border-image: linear-gradient(to right, grey, silver) 1;
  padding: 5px;
  &:focus {
    outline-color: #2196f3;
  }
`;

const Button = styled.button`
  background-color: lavender;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 30%), 2px 0px 2px rgb(0 0 0 / 14%),
    0px 0px 3px rgb(0 0 0 / 20%);
  color: #2a2a2a;
  cursor: pointer;
  font-size: 18px;
  margin-left: 110px;
  margin-right: 110px;
  padding: 8px;
  border-image: linear-gradient(to left, #743ad5, #d53a9d);
  &:hover {
    scale: 1.1;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export { CompleteForm, Label, Input, Button };
