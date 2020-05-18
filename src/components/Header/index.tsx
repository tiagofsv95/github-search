import React, { useState, FormEvent } from 'react';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SearchButton } from './styles';
import logo from '../../assets/image/GithubSearch.svg';

interface Props {
  user: string;
}

const Header: React.FC<Props> = ({ user }) => {
  const history = useHistory();
  const match = useRouteMatch(`/result/${user}`);
  const [newUser, setNewUser] = useState(user);

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
            fontSize: 30,
          }}
          type="text"
          placeholder={user}
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />

        <SearchButton>
          <FaSearch color="#FFF" size={30} />
        </SearchButton>
      </Form>
    </Container>
  );
};

export default Header;
