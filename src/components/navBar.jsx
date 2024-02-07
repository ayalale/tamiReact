import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Outlet,Link} from 'react-router-dom'


export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (<>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Link to="/"><Tab value="one" label="home" />
        <Link to="/todo"><Tab value="two" label="todo" /></Link>
        <Link to="/post"><Tab value="three" label="post" /></Link>
        <Link to="/photo"><Tab value="four" label="photo" /></Link>
        <Link to="/user"><Tab value="five" label="user" /></Link>
        </Link>
      </Tabs>
    </Box>                             
    <Outlet/>
    </>
  );
}