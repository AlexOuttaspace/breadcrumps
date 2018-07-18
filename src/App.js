import React, { Component, Fragment } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

const Home = () => {
  return (
    <p>This is home route</p>
  );
}

const Jobs = () => {
  return (
    <p>This is jobs route</p>
  );
}

const Profile = () => {
  return (
    <p>This is profile route</p>
  );
}

const NewPassword = () => {
  return (
    <p>This is new password route</p>
  );
}

const seedPathmap = [
  {
    path: '',
    name: 'home'
  },
  {
    path: 'jobs',
    name: 'jobs'
  },
  {
    path: 'profile',
    name: 'profile'
  },
  {
    path: 'newpassword',
    name: 'new password'
  }
]

const BreadCrumbs = withRouter(
  props => {
    const { pathname } = props.location;

    let paths = [''];

    if (pathname !== '/') {
      paths = pathname.split('/');
    }

    const crumpslist = paths.map(path => {
      const tableItem = props.pathmap.find(item => item.path === path);

      if (tableItem) {
        return (
          <li key={tableItem.name}>{tableItem.name}</li>
        )
      }

      return null;
    });

    return (
      <ul>
        {crumpslist}
      </ul>
    )
  }
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header>
            <Link to='/'>Home</Link>
            <Link to='/jobs'>Jobs</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/profile/newpassword'>Password</Link>
          </header>
          <BreadCrumbs pathmap={seedPathmap} />
          <Switch>
            <Route path='/profile/newpassword' component={NewPassword} />
            <Route path='/jobs' component={Jobs} />
            <Route path='/profile' component={Profile} />
            <Route path='/' component={Home} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
