import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
import AssetForm from './components/AssetForm/AssetForm'
import {
  Switch,
  Route,
} from "react-router-dom";
import EditAssetForm from './components/EditAssetForm/EditAssetForm';

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/assets" exact component={AssetList} />
        <Route path="/assets/create" exact component={AssetForm} />
        <Route path="/assets/:id/edit" exact render={({ id, handleSubmit }) => <EditAssetForm id={id} handleSubmit={handleSubmit}/> } />
      </Switch>
    </div>
  );
}

export default App;
