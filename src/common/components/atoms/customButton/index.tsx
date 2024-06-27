import { Button, Grid, Zoom, styled } from '@mui/material';
import React from 'react'

type Props = {}
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  margin:'auto',
  fontSize: '1.1rem',
  borderRadius: '10px',
  padding: '5px 20px',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CustomBtn = ({text,fun}:any) => {
  return <Grid container justifyContent="center">
  <Grid item>
    <Zoom in={true} timeout={500}>
      <CustomButton variant="contained" onClick={fun}>
      {text}
      </CustomButton>
    </Zoom>
  </Grid>
</Grid>
}

export default CustomBtn