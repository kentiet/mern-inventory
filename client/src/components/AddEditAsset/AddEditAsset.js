import React from 'react'
import AssetForm from '../AssetForm/AssetForm'
import { useParams} from "react-router-dom";
import { Container } from 'semantic-ui-react';

const AddEditAsset = () => {
  const { id } = useParams()
  return (
    <Container>
      <AssetForm assetId={id}/>
    </Container>
  )
}

export default AddEditAsset;