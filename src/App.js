import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/HomePage';
import { createContext, useEffect, useState } from 'react';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import { getCurrentUser, handleSignOut } from './Pages/Login/HandleLogin';


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(res => {
      setUser(res)
    })
  }, [])

  const signOutUser = () => {
    handleSignOut.then(res => {
      setUser(res)
    })
  }



  return (
    <div>
      <UserContext.Provider value={{ user, setUser, signOutUser }}>
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/:selectedService">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
