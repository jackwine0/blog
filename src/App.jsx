import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogView from './pages/BlogView';
import BlogEdit from './pages/BlogEdit';
import BlogCreate from './pages/BlogCreate';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={BlogList} />
          <Route path="/blogs/create" component={BlogCreate} />
          <Route path="/blogs/:id/edit" component={BlogEdit} />
          <Route path="/blogs/:id" component={BlogView} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
