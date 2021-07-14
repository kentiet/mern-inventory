import React from 'react'
import AssetForm from '../AssetForm/AssetForm'
import { useParams} from "react-router-dom";
import { Container, Header, Icon } from 'semantic-ui-react';

const AddEditAsset = () => {
  const { id } = useParams()
  return (
    <Container>
      <Header as='h3' icon textAlign='center' color='violet'>
        <Icon name='upload' circular />
        <Header.Content>Create Asset</Header.Content>
      </Header>
      <AssetForm assetId={id}/>
    </Container>
  )
}

export default AddEditAsset;