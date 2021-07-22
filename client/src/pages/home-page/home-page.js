import React, { useEffect, useState } from 'react'
import { Card, Container, Grid } from 'semantic-ui-react'
import HomeItem from '../../components/HomeItem/HomeItem'

const Home = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))

  useEffect(() => { 
    setIsLogin(localStorage.getItem('token'))
  }, [isLogin])

  const items = [
    { name: "Assets", path: '/assets' },
    { name: "Consumables", path: '/items'}
  ]

  return (
    <Container>
      <div>
        <h3 style={{textAlign: "center", marginTop: "10%", marginBottom: "5%"}}>Inventory Management</h3>
      </div>
      <Card.Group centered>
        <Grid>
          <Grid.Row columns={2}></Grid.Row>
          <Grid.Row columns={2}>
              {
              items.map((item, key) => { 
                console.log(key)
                return (
                <Grid.Column stretched>
                  <HomeItem 
                    key={ key }
                    itemName = { item.name }
                    path= { item.path }
                    isAuth = {isLogin}
                  />
                </Grid.Column>
                )
              })
            }
          </Grid.Row>
        </Grid>
      </Card.Group>
    </Container>
  )
}

export default Home