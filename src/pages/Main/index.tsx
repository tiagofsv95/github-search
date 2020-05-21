import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

import api from '../../services/api';

import {
  DivHeader,
  Header,
  HeaderButton,
  Container,
  DivForm,
  Form,
  SearchButton,
} from './styles';
import logoLight from '../../assets/image/GithubSearch.svg';
import logoDark from '../../assets/image/GithubSearchDark.svg';
import { useTheme } from '../../hooks/themeContext';

const Main: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const history = useHistory();
  const [newUser, setNewUser] = useState('');

  const logo = theme.title === 'light' ? logoLight : logoDark;

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      await api.get(`/users/${newUser}`);

      history.push(`/result/${newUser}`);
    } catch (err) {
      history.push(`/notFound/${newUser}`);
    }
  }

  return (
    <>
      <Container>
        <DivHeader>
          <Header>
            <HeaderButton onClick={toggleTheme}>
              {theme.title === 'light' ? (
                <FiMoon color="#000" size={30} />
              ) : (
                <FiSun color="#fff" size={30} />
              )}
            </HeaderButton>
          </Header>
        </DivHeader>

        <DivForm>
          <img src={logo} alt="Github Search" />

          <Form onSubmit={handleSearch}>
            <input
              style={{
                flex: 1,
                border: `1px solid`,
                borderTopLeftRadius: '49ex',
                borderBottomLeftRadius: '49ex',
                background: theme.colors.primary,
                borderColor:
                  theme.title === 'dark' ? theme.colors.primary : '#000',
                color: theme.colors.primaryText,
                paddingLeft: 20,
                fontSize: 30,
              }}
              type="text"
              placeholder=""
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />

            <SearchButton>
              <FaSearch color={theme.colors.primary} size={30} />
            </SearchButton>
          </Form>
        </DivForm>
      </Container>
    </>
  );
};

export default Main;
