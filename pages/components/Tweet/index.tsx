import React from 'react';

import { Container, Retweeted, TweetIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon  } from './styles';

interface Props{
    retweet?: boolean;
    nome: string;
    tag: string;
    desc: string;
    time: string;
    like: string;
    comments: string;
    retweetN: string;
}

const Tweet: React.FC<Props> = ({
    retweet,
    nome,
    tag,
    desc,
    time,
    like,
    comments,
    retweetN,
}) => {
  return (
      <Container>
        
        <Retweeted style={{display: retweet ? 'flex' : 'none'}}>
            <TweetIcon />
            Você retweetou
        </Retweeted>
      

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>{nome}</strong>
                    <span>{tag}</span>
                    <Dot />
                    <time>{time}</time>
                </Header>
                <Description>
                    {desc}
                </Description>
                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />
                        {comments}
                    </Status>
                    <Status>
                        <RetweetIcon />
                        {retweetN}
                    </Status>
                    <Status>
                        <LikeIcon />
                        {like}
                    </Status>
                </Icons>
            </Content>
        </Body>
      </Container>
  );
}

export default Tweet;