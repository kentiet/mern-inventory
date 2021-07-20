import React from 'react'
import { Icon, Message } from 'semantic-ui-react'

const ErrorPage = () => (
  <Message negative icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>We're sorry, you don't have admin permission</Message.Header>
      <p>Redirecting back to Home page in 3 seconds</p>
    </Message.Content>
  </Message>
)

export default ErrorPage