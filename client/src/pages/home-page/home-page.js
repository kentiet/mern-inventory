import React from 'react'
import { Card } from 'semantic-ui-react'
import HomeItem from '../../components/HomeItem/HomeItem'

const Home = () => {
  const items = [
    { name: "Assets", path: '/assets' },
    { name: "Consumables", path: '/consumables'}
  ]
  return (
    <Card.Group centered>
        {
        items.map((item, i) => { 
          return <HomeItem 
            key={ i }
            itemName = { item.name }
            path= { item.path }
          />
        })
      }
    </Card.Group>
  )
}

export default Home