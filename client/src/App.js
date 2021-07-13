import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
import AssetForm from './components/AssetForm/AssetForm'
import { useEffect, useState } from 'react';

function App() {
  const [assetList, setAssetList] = useState([])


  useEffect(() => {
    fetch('http://localhost:3001/api/v1/assets')
      .then(res => {
        return res.json()
      }).then(data => {
        setAssetList(data)
      })
  }, [])


  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-start-1 col-span-8">
        <NavBar />
      </div>
      <div className="col-start-2 col-span-6">
        <AssetList assets={assetList} />
      </div>

      <div className="col-start-2 col-span-6">
        <AssetForm />
      </div>


    </div>
  );
}

export default App;
