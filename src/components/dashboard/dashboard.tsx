import {Box, Grid, Typography, Paper} from '@mui/material'
import Bar from '../charts/bar/bar-chart'
import ChordChart from '../charts/chord/chord-chart'
import TreemapChart from '../charts/treemap/treemap'

interface Props {
  yOffSet: string | number
}


const data = {
  name: 'Celtics',
  children: [
    {
      name: 'Guards',
      children: [
        {
          category: 'Guards',
          name: 'Kemba Walker',
          value: 20.4,
          children:[
            {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, 
          ]
        },
        {
          category: 'Guards',
          name: 'Marcus Smart',
          value: 12.9,
       
          children:[
            {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, 
          ]
        },
        {
          category: 'Guards',
          name: 'Brad Wanamaker',
          value: 6.9,
          children:[
            {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, {
              category: 'Guards',
              name: 'Kemba Walker',
              value: 20.4,
            }, 
          ]
        },
        {
          category: 'Guards',
          name: 'Tremont Waters',
          value: 3.6,
        },
        {
          category: 'Guards',
          name: 'Carsen Edwards',
          value: 3.3,
        },
        {
          category: 'Guards',
          name: 'Romeo Langford',
          value: 2.5,
        },
      ],
    },
    {
      name: 'Forwards',
      children: [
        {
          category: 'Forwards',
          name: 'Jayson Tatum',
          value: 23.4,
        },
        {
          category: 'Forwards',
          name: 'Jaylen Brown',
          value: 20.3,
        },
        {
          category: 'Forwards',
          name: 'Gordon Hayward',
          value: 17.5,
        },
        {
          category: 'Forwards',
          name: 'Grant Williams',
          value: 3.4,
        },
        {
          category: 'Forwards',
          name: 'Javonte Green',
          value: 3.4,
        },
        {
          category: 'Forwards',
          name: 'Semi Ojeleye',
          value: 3.4,
        },
        {
          category: 'Forwards',
          name: 'Vincent Poirier',
          value: 1.9,
        },
      ],
    },
    {
      name: 'Centers',
      children: [
        {
          category: 'Centers',
          name: 'Daniel Theis',
          value: 9.2,
        },
        {
          category: 'Centers',
          name: 'Enes Kanter',
          value: 8.1,
        },
        {
          category: 'Centers',
          name: 'Robert Williams III',
          value: 5.2,
        },
        {
          category: 'Centers',
          name: 'Tacko Fall',
          value: 3.3,
        },
      ],
    },
  ],
};

// wrap this in a page

const Dashboard = ({ yOffSet }: Props) => {
  return (
    <Box sx={{ml:yOffSet}}>
      <Grid container>
        <Grid sx={{p:0}} item xs={12} md={6}>
          <Box sx={{ boxSizing:'border-box'}}>
            <Typography variant="h4" textAlign="left">Test</Typography>
            <Bar />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" textAlign="left">Test</Typography>
            <TreemapChart data={data} height={400} width={600} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard