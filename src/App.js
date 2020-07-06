import React from 'react';
import Login from  './components/login/login'
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Service from './components/admin/services/service'
import Layout  from './components/admin/layout'
import Spinner from './components/spinner/spinner'

function App() {
  return (
    <div className="App">

          <Router>
              <Switch >
                  <Route path="/"  component={Login} />:
                  <Route path="/login"  component={Login} ></Route>
                  <Route path="/home"  component={Layout} />
                  <Route Path="/home-service" component={Service}/>
              </Switch>
                {/* <Protected exact path="/profile" component={Profile}></Protected> */}
          </Router>




      {/* <Layout></Layout> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
