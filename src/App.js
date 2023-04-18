import { ChatEngine } from 'react-chat-engine';
import MessageForm from './components/MessageForm';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const App = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="3db55e20-1dc3-4bd1-93e9-c86c2cea1cda"
      userName='Lucius'
      userSecret='0123456789'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;