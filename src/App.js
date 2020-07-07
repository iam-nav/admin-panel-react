import React from 'react';
import Login from  './components/login/login'
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Service from './components/admin/services/service'
import Layout  from './components/admin/layout'
import Protected from './components/protected_route/protected'
import Alerts from './components/validation/Alert'
// import Spinner from './components/spinner/spinner'

function App() {
  return (
    <div className="App">

          <Router>
              <Switch >
                  <Route path="/" exact component={Login} />:
                  {/* <Route Path="/home-service" component={Service}/> */}
                  <Protected exact path="/home" component={Layout}></Protected>
              </Switch>
   
          </Router>




      {/* <Layout></Layout> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
