import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import SideBar from './components/navigation/sidebar/sidebar';
import { Inbox as InboxIcon, Mail as MailIcon } from '@mui/icons-material';
import Dashboard from './components/dashboard/dashboard';

// turn into layout

const App = () => {
  const links = [
    {
      icon:<InboxIcon />,
      onClick:() => alert('hi')
    }
  ]

  const widthAndOffset = '70px'

  return (
    <div data-testid="app" className="App">
      <Box>
        <SideBar width={widthAndOffset} links={links} />
        <Dashboard yOffSet={'70px'} />
      </Box>
    </div>
  );
}

export default App;
