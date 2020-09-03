import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './index.css';

import Chat from 'chat/Chat';

const App = () => (
  <Container>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolorem
      necessitatibus ipsum ducimus vero? Dolore quos aperiam, rem iste neque ut
      magnam quaerat? Necessitatibus ullam alias id deleniti, consequatur fugit,
      ipsa saepe, quo accusamus animi quas. Aliquid necessitatibus voluptate
      illum nostrum, reprehenderit unde quis alias ea nemo earum, porro neque.
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
      repellendus corporis maxime! Dolores obcaecati nemo optio atque beatae!
      Sit, exercitationem dolor ex maiores voluptatum odit mollitia
      voluptatibus. Rem ab temporibus error corporis sed facere, molestias ad
      quas libero modi eaque tenetur cumque molestiae esse vitae sit deleniti
      quos illo, odio hic explicabo dicta magni vero facilis! Itaque porro
      obcaecati facere beatae eligendi maiores. Dicta architecto ipsum velit
      necessitatibus esse ut quasi facere deleniti, voluptatem fugiat.
    </p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
