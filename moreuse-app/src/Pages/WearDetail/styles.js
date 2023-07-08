import styled from 'styled-components';

export const WearDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const WearImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 20%;
    // tablets y smartphones
    @media only screen and (max-width: 768px) {
      width: 30%;
    }

    height: auto;
  }
`;

export const WearDetailContent = styled.div`
  margin: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: auto;
`;

export const inicio = styled.a`
  background-color: gray !important;
  color: white  !important;
  padding: 15px 25px  !important;
  text-decoration: none  !important;

  a:hover {
    background-color: #223094  !important;
  }

`
;

