import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'

const HomeItem = ({ itemName, path }) => {
  const [pickColor, setPickColor] = useState('red')

  const colors = [
     "red","orange","yellow","olive","green","teal",
     "blue","violet","purple","pink","brown","grey","black"  
  ]

  const randomPickColor = () => { 
    const maxLength = colors.length
    const picked = Math.floor(Math.random() * (maxLength - 1))
    
    return colors[picked]
  }
  
  useEffect(() => { 
    let myColor = randomPickColor()
    setPickColor(myColor)
  }, [])

  return (
    <Card
      color={ pickColor }
      href={ path }
      header={ itemName }
  />
  )
}

export default HomeItem;