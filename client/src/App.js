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
import React , {Component, useEffect, useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import LoginForm from './components/LoginForm/LoginForm';
import { Container } from 'semantic-ui-react';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionsList from './components/TransactionsList/TransactionsList';
import CheckOutAsset from './components/CheckOutAsset/CheckOutAsset';

function App() {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isLogin: false
  //   }
  // }
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))

  useEffect(() => { 
    setIsLogin(localStorage.getItem('token'))
  })
  // componentDidMount() {
  //   const token = localStorage.getItem('token')
  //   const expires = localStorage.getItem('expires')
  //   if (token) {
  //     this.setState({isLogin: true})
  //   } 
  // }
  
  return (
      <Container>
        <NavBar />
        <br />
        <Switch>
          <Route path="/" exact component={LoginForm} />
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
}

export default App;
