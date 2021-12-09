import React from 'react';

import Button from '../Button'

import { 
    Container,
    Topside, 
    LogoIcon, 
    MenuButton, 
    HomeIcon, 
    ExploreIcon, 
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ListIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topside>
              <LogoIcon />
              <MenuButton>
                  <HomeIcon />
                  <span>Página Inicial</span>
              </MenuButton>
              
              <MenuButton>
                  <ExploreIcon />
                  <span>Explorar</span>
              </MenuButton>
              
              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>
              
              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>
              
              <MenuButton>
                  <FavoriteIcon />
                  <span>Itens salvos</span>
              </MenuButton>
              
              <MenuButton>
                  <ListIcon />
                  <span>Listas</span>
              </MenuButton>
              
              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>
              
          </Topside>
          <Botside>
              <Avatar />
              <ProfileData>
                  <strong>Emilly Monteiro</strong>
                  <span>emymonteiro.sweetie@gmail.com</span>
              </ProfileData>
              <ExitIcon />
          </Botside>
      </Container>
  );
}

export default MenuBar;