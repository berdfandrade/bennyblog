// src/App.tsx
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/posts/:postId" component={PostDetail} />
    </Switch>
  );
};

export default App;
