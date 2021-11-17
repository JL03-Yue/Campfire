import { ChatEngine } from 'react-chat-engine';

// ---
import ChatCard from './components/ChatCard';
// ---

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '34682948-4302-4888-8cee-10b59d66a043';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      //renderChatCard={(chat) => <ChatCard {...chat} />}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// const censorList = ["test", "suicide"];

// function censor(word) {
//     var censored = word;
//     for (var i = 0; i < censorList.length; i++) {
//         if (censorList[i].includes(censored))
//             censored = censored.text.replace(/./g, '*');
//     }
//     return censored;
// }

export default App;
