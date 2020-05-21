import React, { useState, FormEvent } from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Form, SearchButton, HeaderButton } from './styles';
import logoLight from '../../assets/image/GithubSearch.svg';
import logoDark from '../../assets/image/GithubSearchDark.svg';
import { useTheme } from '../../hooks/themeContext';

interface Props {
  user: string;
}

const Header: React.FC<Props> = ({ user }) => {
  const { theme, toggleTheme } = useTheme();
  const history = useHistory();
  const match = useRouteMatch(`/result/${user}`);
  const [newUser, setNewUser] = useState(user);

  const logo = theme.title === 'light' ? logoLight : logoDark;

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      await api.get(`/users/${newUser}`);

      history.push(`/result/${newUser}`);

      if (match?.path !== `/result/${newUser}`) {
        window.location.reload(true);
      }
    } catch (err) {
      history.push(`/notFound/${newUser}`);
    }
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Github Search" />
      </Link>

      <Form onSubmit={handleSearch}>
        <input
          style={{
            flex: 1,
            border: `1px solid`,
            borderTopLeftRadius: '49ex',
            borderBottomLeftRadius: '49ex',
            background: theme.colors.primary,
            borderColor: theme.title === 'dark' ? theme.colors.primary : '#000',
            color: theme.colors.primaryText,
            paddingLeft: 20,
            fontSize: 30,
          }}
          type="text"
          placeholder={user}
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />

        <SearchButton>
          <FaSearch color={theme.colors.primary} size={30} />
        </SearchButton>

        <HeaderButton onClick={toggleTheme}>
          {theme.title === 'light' ? (
            <FiMoon color="#000" size={30} />
          ) : (
            <FiSun color="#fff" size={30} />
          )}
        </HeaderButton>
      </Form>
    </Container>
  );
};

export default Header;
