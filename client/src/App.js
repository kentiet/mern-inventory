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

import LoginForm from './components/LoginForm/LoginForm';
import { Container } from 'semantic-ui-react';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionsList from './components/TransactionsList/TransactionsList';
import CheckOutAsset from './components/CheckOutAsset/CheckOutAsset';
import LoginPage from './pages/login-page/login-page';

function App() {

  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))

  useEffect(() => { 
    setIsLogin(localStorage.getItem('token'))
  })
  
  console.log('app.js login', isLogin);

  
  if(isLogin !== null) {
    return (
        <Container>
          <NavBar isAuth={isLogin}/>
          <br />
          <Switch>
            {/* <Route path="/" exact component={LoginForm} /> */}
            <ProtectedRoute path="/home" exact component={Home} isAuth={isLogin}/>
            <ProtectedRoute path="/assets" exact component={AssetList} isAuth={isLogin}/>
            <ProtectedRoute path="/assets/create" exact component={AddEditAsset} isAuth={isLogin}/>
            <ProtectedRoute path="/assets/:id/edit" exact component={AddEditAsset} isAuth={isLogin}/>
            <ProtectedRoute path="/assets/:id/checkout" exact component={CheckOutAsset} isAuth={isLogin}/>
            <ProtectedRoute path="/items" exact component={ConsumableList} isAuth={isLogin}/>
            <ProtectedRoute path="/items/create" exact component={AddEditConsumable} isAuth={isLogin}/>
            <ProtectedRoute path="/items/:id/edit" exact component={AddEditConsumable} isAuth={isLogin}/>
            <ProtectedRoute path="/transactions/" exact component={TransactionsList} isAuth={isLogin}/>
            <ProtectedRoute path="/transactions/:id/checkout" exact component={TransactionForm} isAuth={isLogin}/>
            
          </Switch>

        </Container>
      );
  } else {
    return (
      <Container>
          {/* <NavBar isAuth={isLogin}/> */}
          <LoginPage />
      </Container>
    )
  }
}

export default App;
