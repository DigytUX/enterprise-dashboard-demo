import { Box, Drawer, List, ListItem, Toolbar } from '@mui/material'
import { ReactElement } from 'react'
import { SvgIconProps } from '@mui/material'

interface ILinks {
  icon: ReactElement<SvgIconProps>
  onClick: () => void
}

interface Props {
  links: ILinks[]
  width: string | number
}

const SideBar = ({ links, width }: Props) => {
  return (
      <Drawer 
        variant="permanent" 
        sx={{
          width:width,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 70, boxSizing: 'border-box' },
        }}
        data-testid="sidebar"
      >
        <Toolbar />
        <List>
        {links.map((link, index) => (
          <ListItem 
            data-testid={`sidebar-link-${index}`} 
            button 
            key={index} 
            onClick={link.onClick}
          >
          {link.icon}
        </ListItem>
      ))}
      </List>
    </Drawer>
  )
}

export default SideBar