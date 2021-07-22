import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
import Home from './pages/home-page/home-page';
import {
  Route,
  Switch,
} from "react-router-dom";
import AddEditAsset from './components/AddEditAsset/AddEditAsset';
import ConsumableList from './components/ConsumableList/ConsumableList';
import AddEditConsumable from './components/AddEditConsumable/AddEditConsumable';
import React , { useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Container } from 'semantic-ui-react';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionsList from './components/TransactionsList/TransactionsList';
import CheckOutAsset from './components/CheckOutAsset/CheckOutAsset';
import LoginPage from './pages/login-page/login-page';
import AdminRoute from './components/AdminRoute/AdminRoute';
import jsonwebtoken from 'jsonwebtoken'
import ErrorPage from './pages/error-page/error-page';

function App() {

  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => { 
    setIsLogin(localStorage.getItem('token'))
  }, [isLogin])

  useEffect(() => {
    if(localStorage.getItem('token') === null) return
    const token = localStorage.getItem('token').split(" ")[1]
    const agentRole = jsonwebtoken.decode(token).role

    if(agentRole === 'admin') {
      setIsAdmin(true)
    }
  }, [])

  if(isLogin !== null) {
    return (
        <Container>
          <NavBar isAuth={isLogin}/>
          <br />
          <Switch>
            <Route path="/home" exact component={Home}/>
            <ProtectedRoute path="/assets" exact component={AssetList} isAuth={isLogin}/>
            <AdminRoute path="/assets/create" exact component={AddEditAsset} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            <AdminRoute path="/assets/:id/edit" exact component={AddEditAsset} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            <AdminRoute path="/assets/:id/checkout" exact component={CheckOutAsset} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            <ProtectedRoute path="/items" exact component={ConsumableList} isAuth={isLogin}/>
            <AdminRoute path="/items/create" exact component={AddEditConsumable} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            <AdminRoute path="/items/:id/edit" exact component={AddEditConsumable} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            <ProtectedRoute path="/transactions/" exact component={TransactionsList} isAuth={isLogin} />
            <AdminRoute path="/transactions/:id/checkout" exact component={TransactionForm} errorComponent={ErrorPage} isAuth={isLogin} isAdmin={isAdmin}/>
            
          </Switch>

        </Container>
      );
  } else {
    return (
      <Container>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={LoginPage}/>
          {/* <NavBar isAuth={isLogin}/> */}
          {/* <LoginPage /> */}
      </Container>
    )
  }
}

export default App;
