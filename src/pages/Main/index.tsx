import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SearchButton } from './styles';
import logo from '../../assets/image/GithubSearch.svg';

const Main: React.FC = () => {
  const history = useHistory();
  const [newUser, setNewUser] = useState('');

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
    <Container>
      <img src={logo} alt="Github Search" />

      <Form onSubmit={handleSearch}>
        <input
          style={{
            flex: 1,
            border: `1px solid`,
            borderTopLeftRadius: '49ex',
            borderBottomLeftRadius: '49ex',
            fontSize: 30,
          }}
          type="text"
          placeholder=""
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

export default Main;
