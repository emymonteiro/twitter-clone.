import React from 'react';

import { Container, Retweeted, TweetIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon  } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
        <Retweeted>
            <TweetIcon />
            Você retweetou
        </Retweeted>
      

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Emilly Monteiro</strong>
                    <span>emymonteiro.sweetie@gmail.com</span>
                    <Dot />
                    <time>09 de dez</time>
                </Header>
                <Description>
                    Meu Post
                </Description>
                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />
                        18
                    </Status>
                    <Status>
                        <RetweetIcon />
                        18
                    </Status>
                    <Status>
                        <LikeIcon />
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>
      </Container>
  );
}

export default Tweet;