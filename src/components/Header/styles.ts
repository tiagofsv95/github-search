import styled from 'styled-components';

export const Container = styled.div`
  width: 1152px;
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.backgroud};
  margin: auto;
  justify-content: center;

  img {
    display: flex;
    margin: 30px auto;
    justify-content: center;
    height: 50px;
  }
`;

export const Form = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  min-width: 650px;
`;

export const SearchButton = styled.button`
  background: ${(props) => props.theme.colors.others};
  border: 0;
  padding: 0 15px;
  height: 50px;
  width: 100px;
  border-top-right-radius: 49ex;
  border-bottom-right-radius: 49ex;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderButton = styled.button`
  margin-left: 50px;
  border: 0;
  background: ${(props) => props.theme.colors.backgroud};
`;
