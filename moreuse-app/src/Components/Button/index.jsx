import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100%;
  background-color: #2EAAE2;
  color: #2C2E83;
  font-size: 1.2em;
  font-weight: 700;
  padding: 8px 8px;
  border-radius: 6px;
  opacity: 0.96;
  cursor: pointer;
  border: none;
  margin: 0 5px;
  &:hover {
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = ({ text = "", onPress }) => {

  return (
    <ButtonContainer>
      <ButtonStyled onClick={onPress}>
        { text }
      </ButtonStyled>
    </ButtonContainer>
  )
}
