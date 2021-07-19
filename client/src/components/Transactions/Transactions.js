import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Transaction = ({ agent, recipient, consumable, quantity, date }) => {

  return (
    <>
    <Table.Row>
      <Table.Cell>{ consumable }</Table.Cell>
      <Table.Cell>{ recipient }</Table.Cell>
      <Table.Cell>{ agent }</Table.Cell>
      <Table.Cell>{ quantity }</Table.Cell>
      <Table.Cell>{ date }</Table.Cell>
    </Table.Row>
    </>
  )

}

export default Transaction