import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
import Home from './pages/home-page/home-page';

import {
  Switch,
  Route,
} from "react-router-dom";
import AddEditAsset from './components/AddEditAsset/AddEditAsset';
import ConsumableList from './components/ConsumableList/ConsumableList';
import AddEditConsumable from './components/AddEditConsumable/AddEditConsumable';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/create" exact component={AddEditAsset} />
        <Route path="/assets/:id/edit" exact component={AddEditAsset} />
        <Route path="/items" exact component={ConsumableList} />
        <Route path="/items/create" exact component={AddEditConsumable} />
        <Route path="/items/:id/edit" exact component={AddEditConsumable} />
      </Switch>
    </div>
  );
}

export default App;
