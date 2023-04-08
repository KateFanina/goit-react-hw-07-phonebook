import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleMain = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 0;
`;

const TitleList = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 0;
`;

const CloseButton = styled(CloseIcon)`
  grid-template-columns: 40px;
  justify-content: end;
  position: absolute;
  right: 12px;
  top: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: mintcream;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    fill: blue;
    cursor: pointer;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: rgb(1, 1, 1);
  background-color: aliceblue;
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
`;

export { WrapperTitle, TitleMain, TitleList, CloseButton, ContactWrapper };
