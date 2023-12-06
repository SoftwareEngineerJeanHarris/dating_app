import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import HomePage from './HomePage';
import UserProfile from './UserProfile';
import ChatWindow from './ChatWindow';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile/:userId" component={UserProfile} />
        <Route path="/chat/:userId" component={ChatWindow} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;