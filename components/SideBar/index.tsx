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
                <FollowSuggestion key={0}
                    name="Vue"
                    nickname="@vuejs"
                />,
                <FollowSuggestion key={1}
                    name="React"
                    nickname="@reactjs"
                />,
                <FollowSuggestion key={2}
                    name="Svelte"
                    nickname="@sveltejs"
                />,
            ]} />
            <List title="Trending Topics" elements={[<News key={0} />,<News key={1} />,<News key={2} />]} />
          </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;