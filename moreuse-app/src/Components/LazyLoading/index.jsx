import styled from 'styled-components';

const PageLoading = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLoader = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  border:8px solid;
  border-color:#E4E4ED;
  border-right-color: #766DF4;
  animation:s2 1s infinite linear;

  @keyframes s2 {to{transform: rotate(1turn)}}
`;

export const LazyLoading = () => {

  return (
    <PageLoading>
      <CustomLoader />
    </PageLoading>
  )
}
