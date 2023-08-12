import {Box, Grid, Typography, Paper} from '@mui/material'
import Bar from '../charts/bar/bar-chart'
import ChordChart from '../charts/chord/chord-chart'

interface Props {
  yOffSet: string | number
}

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
            <ChordChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard