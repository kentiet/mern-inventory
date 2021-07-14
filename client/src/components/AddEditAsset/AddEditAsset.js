import React from 'react'
import AssetForm from '../AssetForm/AssetForm'
import { useParams} from "react-router-dom";

const AddEditAsset = () => {
  const { id } = useParams()
  return (
    <div>
      <AssetForm assetId={id}/>
    </div>
  )
}

export default AddEditAsset;