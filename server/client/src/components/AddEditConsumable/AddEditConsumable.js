import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Header, Icon } from 'semantic-ui-react'
import ConsumableForm from '../ComsumableForm/ConsumableForm'

const AddEditConsumable = () => {
  const id = useParams()

  return (
    <Container>
      <Header as='h3' icon textAlign='center' color='violet'> 
        <Icon name='upload' circular />
        <Header.Content>Create Item</Header.Content>
      </Header>
      <ConsumableForm id={ id }/>
    </Container>
  )
}

export default AddEditConsumable