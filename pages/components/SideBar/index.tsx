import React from 'react';
import StickyBox from 'react-sticky-box'
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News';
import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>
          <StickyBox>
          <Body>
            <List title="Talvez você curta" elements={[
                <FollowSuggestion
                    name="Guilherme Serra"
                    nickname="@Urgod"
                />,
                <FollowSuggestion
                    name="Yuri Figueredo"
                    nickname="@FormeiADM"
                />,
                <FollowSuggestion
                    name="Arnaldo José"
                    nickname="@BoMataLadrao_LULALIVRE"
                />,
            ]} />
            <List title="Trending Topics" elements={[<News />,<News />,<News />]} />
            <List title="Trending Topics" elements={[<News />,<News />,<News />]} />
            <List title="Trending Topics" elements={[<News />,<News />,<News />]} />
            <List title="Trending Topics" elements={[<News />,<News />,<News />]} />
            <List title="Trending Topics" elements={[<News />,<News />,<News />]} />
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;