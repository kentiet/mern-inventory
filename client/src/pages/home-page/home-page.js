import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import HomeItem from '../../components/HomeItem/HomeItem'

const Home = (props) => {
  const items = [
    { name: "Assets", path: '/assets' },
    { name: "Consumables", path: '/items'}
  ]

  return (
      <Card.Group centered>
        <Grid>
          <Grid.Row columns={2}></Grid.Row>
          <Grid.Row columns={2}>
              {
              items.map((item, i) => { 
                return (
                <Grid.Column stretched>
                  <HomeItem 
                    key={ i }
                    itemName = { item.name }
                    path= { item.path }
                  />
                </Grid.Column>
                )
              })
            }
          </Grid.Row>
        </Grid>
      </Card.Group>
  )
}

export default Home