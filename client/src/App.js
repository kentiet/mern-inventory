import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
import Home from './pages/home-page/home-page';

import {
  Switch,
  Route,
} from "react-router-dom";
import AddEditAsset from './components/AddEditAsset/AddEditAsset';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/create" exact component={AddEditAsset} />
        <Route path="/assets/:id/edit" exact component={AddEditAsset} />
      </Switch>
    </div>
  );
}

export default App;
