import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Emilly Monteiro</h1>
              <h2>emymonteiro.sweetie@gmail.com</h2>

              <p>
                  Developer at <a href="https://fivem.com">@SouthRP</a>
              </p>
              
              <ul>
                  <li>
                      <LocationIcon />
                      Campo Grande - MS, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 25 de Agosto de 1997
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>94</strong>
                  </span>
                  <span>
                      <strong>700 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;