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
import React , {Component } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import LoginForm from './components/LoginForm/LoginForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogin: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const expires = localStorage.getItem('expires')
    if (token) {
      this.setState({isLogin: true})
    } 
  }


  // const [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   const expires = localStorage.getItem('expires')
  //   token ? setIsLogin(true) : setIsLogin(false)
  // }, [isLogin])


  // if(!isLogin) {
  //   return <Redirect to={{pathname: "/login"}} />
  // }
render() {
  console.log("app.js logged", this.state.isLogin);
  
  return (
    <Container>
      <NavBar />
      <br />
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <ProtectedRoute path="/home" exact component={Home} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/assets" exact component={AssetList} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/assets/create" exact component={AddEditAsset} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/assets/:id/edit" exact component={AddEditAsset} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/items" exact component={ConsumableList} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/items/create" exact component={AddEditConsumable} isAuth={this.state.isLogin}/>
        <ProtectedRoute path="/items/:id/edit" exact component={AddEditConsumable} isAuth={this.state.isLogin}/>
      </Switch>

      </Container>
    );
  }
}

export default App;
