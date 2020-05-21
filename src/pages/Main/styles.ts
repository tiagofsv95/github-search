import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1152px;
  min-height: 700px;
  background: ${(props) => props.theme.colors.backgroud};
  padding: 30px;
`;

export const DivHeader = styled.div`
  margin-right: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;
`;

export const HeaderButton = styled.button`
  border: 0;
  background: ${(props) => props.theme.colors.backgroud};
`;

export const DivForm = styled.div`
  margin-top: 244px;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 650px;
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
