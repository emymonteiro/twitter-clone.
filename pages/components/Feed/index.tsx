import React from 'react';
import { ArrowAltCircleDown } from 'styled-icons/fa-regular';

import Tweet from '../Tweet';
import { Container, Tab, Tweets } from './styles';

const arr = [
    { 
      nome: 'Emilly',
      tag: '@Emy',
      desc: 'Minha mensagem no tweet',
      time: '09 de dez',
      like: '12',
      comments: '18',
      retweetN: '100',
      retweet: true
    },
    { 
      nome: 'Alisson',
      tag: '@alisson',
      desc: 'Minha mensagem no tweet 2',
      time: '10 de dez',
      like: '4452',
      comments: '180',
      retweetN: '999'
    },
    { 
      nome: 'Alisson',
      tag: '@alisson',
      desc: 'Minha mensagem no tweet 2',
      time: '10 de dez',
      like: '4452',
      comments: '180',
      retweetN: '999'
    },
    { 
      nome: 'Alisson',
      tag: '@alisson',
      desc: 'Minha mensagem no tweet 2',
      time: '10 de dez',
      like: '4452',
      comments: '180',
      retweetN: '999'
    },
    { 
      nome: 'Alisson',
      tag: '@alisson',
      desc: 'Minha mensagem no tweet 2',
      time: '10 de dez',
      like: '4452',
      comments: '180',
      retweetN: '999'
    },
]

const Feed: React.FC = () => {
  return (
      <Container>
          <Tab>Tweets</Tab>
          <Tweets>
              {
                arr.map((item, key) =>
                    (
                        <Tweet key={key}
                            nome={item.nome} 
                            tag={item.tag} 
                            desc={item.desc}
                            time={item.time}
                            like={item.like}
                            comments={item.comments}
                            retweetN={item.retweetN}
                            retweet={item.retweet}
                        />
                    )
                )
              }
          </Tweets>
      </Container>
  );
}

export default Feed;