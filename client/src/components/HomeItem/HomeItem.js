import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const HomeItem = ({ itemName, path }) => {
  const [pickColor, setPickColor] = useState('red');
  
  useEffect(() => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'black',
    ];

    const maxLength = colors.length;
    const picked = Math.floor(Math.random() * (maxLength - 1));

    setPickColor(colors[picked]);
  }, []);

  return (
    <Link to={path}>
      <Card color={pickColor} href={path} header={itemName} />
    </Link>
  );
};

export default HomeItem;
