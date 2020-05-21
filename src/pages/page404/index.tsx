import React from 'react';

import Header from '../../components/Header/index';

import { Container } from './styles';

const page404: React.FC = () => {
  const user = '';

  return (
    <>
      <Header user={user} />
      <Container>
        <p>Error 404: Page Not Found! :( </p>
      </Container>
    </>
  );
};

export default page404;
