import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/index';

import { Container } from './styles';

const NotFound: React.FC = () => {
  const { user } = useParams();

  return (
    <>
      <Header user={user} />
      <Container>
        <p>User not found :(</p>
      </Container>
    </>
  );
};

export default NotFound;
