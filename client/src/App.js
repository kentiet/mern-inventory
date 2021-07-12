import './App.css';
import NavBar from './components/NavBar/NavBar'
import AssetList from './components/AssetList/AssetList'
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
    <>
      <NavBar />
      <AssetList assets={assetList}/>
    </>
  );
}

export default App;
