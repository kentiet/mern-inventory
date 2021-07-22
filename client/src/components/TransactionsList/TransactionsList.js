import React, { useEffect, useState } from 'react'
import { Container, Icon, Table } from 'semantic-ui-react'
import Transaction from '../Transactions/Transactions'

const TransactionsList = () => { 
    const [transactions, setTransactions] = useState([])

    useEffect(() => { 
      fetch('https://mern-inventory-api.herokuapp.com/api/v1/transactions')
      .then(res => res.json())
      .then(data => { 
        setTransactions(data)
      })
    }, [])


    return (
      <Container>
      <h3 style={{ textAlign: 'center'}}><Icon name='tag' />Transactions</h3>
      <Table color='brown'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Recipient</Table.HeaderCell>
            <Table.HeaderCell>Agent</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { transactions.map((transaction, i) => { 
            return (
              <Transaction 
              key = { i }
              agent={ transaction.agent} 
              recipient = { transaction.recipient }
              quantity = { transaction.quantity }
              consumable = { transaction.consumable }
              date = { transaction.createdAt }
            />
            )
          })}
        </Table.Body>
      </Table>
      </Container>
    )
}

export default TransactionsList