import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

interface User {
    username: string;
    password: string;
}

const Login: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  })

  const Login = async () => {
    try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(
            `${user.username}@fuelminder.com`,
            user.password
          );
          navigate('/main');
      } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) =>
            setUser({ ...user, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
            setUser({ ...user, password: e.target.value })
        }
      />
      <button onClick={Login}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;