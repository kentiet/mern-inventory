import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import ConsumableForm from '../ComsumableForm/ConsumableForm'

const AddEditConsumable = () => {
  const id = useParams()

  return (
    <Container>
      <ConsumableForm id={ id }/>
    </Container>
  )
}

export default AddEditConsumable