import { useState } from 'react';
import axios from 'axios';

const projectID = "3db55e20-1dc3-4bd1-93e9-c86c2cea1cda";

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID':"3db55e20-1dc3-4bd1-93e9-c86c2cea1cda", 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className='container'>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div className="button-container">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1 className="error">{error}</h1>
        </div>
      </div>
    </div>
  );
  
};

export default Modal;