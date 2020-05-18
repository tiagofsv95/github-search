import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FaBuilding,
  FaGlobe,
  FaStar,
  FaUserFriends,
  FaBoxOpen,
} from 'react-icons/fa';

import Header from '../../components/Header/index';

import api from '../../services/api';

import {
  Container,
  Perfil,
  PerfilInfo,
  PerfilName,
  PerfilLogin,
  PerfilCompany,
  PerfilLocation,
  PerfilFollowing,
  PerfilRepos,
  PerfilStars,
  Repository,
  RepositoryTitle,
  RepositoryDescription,
  RepositoryStar,
} from './styles';

interface UserInterface {
  avatar_url: string;
  name: string;
  login: string;
  company: string;
  location: string;
  following: number;
  public_repos: number;
  public_gists: number;
}

interface RepositoryInterface {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

const Result: React.FC = () => {
  const { user } = useParams();
  const [userState, setUserState] = useState<UserInterface>(
    {} as UserInterface,
  );
  const [repositories, setRepositories] = useState<RepositoryInterface[]>([]);

  useEffect(() => {
    async function fecthData(): Promise<void> {
      const userData = await api.get<UserInterface>(`/users/${user}`);
      const response = await api.get<RepositoryInterface[]>(
        `/users/${user}/repos`,
      );

      const repositoryData = response.data;

      setUserState(userData.data);

      const repository = repositoryData.sort(
        (a, b) =>
          parseInt(String(b.stargazers_count), 10) -
          parseInt(String(a.stargazers_count), 10),
      );

      setRepositories(repository);
    }
    fecthData();
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Container>
        <Perfil>
          <img src={userState.avatar_url} alt="user_avatar" />
          <PerfilInfo>
            <PerfilName>{userState.name}</PerfilName>
            <PerfilLogin>{userState.login}</PerfilLogin>
            <PerfilCompany>
              <div>
                <FaBuilding size={20} color="#5c5c5c" />
                <p>{userState.company || ' '}</p>
              </div>
            </PerfilCompany>
            <PerfilLocation>
              <div>
                <FaGlobe size={20} color="#5c5c5c" />
                <p>{userState.location}</p>
              </div>
            </PerfilLocation>
            <PerfilFollowing>
              <div>
                <FaUserFriends size={20} color="#5c5c5c" />
                <p>{userState.following}</p>
              </div>
            </PerfilFollowing>
            <PerfilRepos>
              <div>
                <FaBoxOpen size={20} color="#5c5c5c" />
                <p>{userState.public_repos}</p>
              </div>
            </PerfilRepos>
            <PerfilStars>
              <div>
                <FaStar size={20} color="#5c5c5c" />
                <p>{userState.public_gists}</p>
              </div>
            </PerfilStars>
          </PerfilInfo>
        </Perfil>

        <ul>
          {repositories.map((repository) => (
            <Repository key={repository.id}>
              <div>
                <RepositoryTitle>{repository.name}</RepositoryTitle>
                <RepositoryDescription>
                  {repository.description}
                </RepositoryDescription>
                <RepositoryStar>
                  <div>
                    <FaStar size={25} color="#5c5c5c" />
                    <p>{repository.stargazers_count}</p>
                  </div>
                </RepositoryStar>
              </div>
            </Repository>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Result;
