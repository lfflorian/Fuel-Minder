import React from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './scenes/Login/Login';
import Main from './scenes/Main/Main';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <button type="button" className="btn">Hello World</button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/main" Component={Main} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return <h2>Home</h2>;
};

export default App;
