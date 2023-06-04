import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
// 
const pages = [ 'signin' , 'signup']
// const pages = ['tripdetails','tripsgiven','triprequest','tripstaken','availabletrip', 'signin' , 'signup']


const DropDownElements = () => {
  const id = localStorage.getItem('userId')
  const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
    <Button
    sx={{ my: 2, color: 'red', display: 'block',fontWeight:'14rem' }}
  id="demo-positioned-button"
  aria-controls={open ? 'demo-positioned-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
            >
                <strong>
                Auth

                </strong>
</Button>
<Menu
  id="demo-positioned-menu"
  aria-labelledby="demo-positioned-button"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
        >
                {id !==null || undefined ? 
            <MenuItem sx={{ textTransform: 'capitalize', letterSpacing: '2px', color: 'black' }} onClick={() => { localStorage.removeItem('userId');navigate(0) }}>logout</MenuItem>
                    :
                    <>
                   <Link to={`/signin`} style={{textDecoration:'none'}}>
                      <MenuItem sx={{textTransform:'capitalize',letterSpacing:'2px',color:'black'}} onClick={handleClose}>signin</MenuItem>
                    </Link>
                   <Link to={`/signup`} style={{textDecoration:'none'}}>
                      <MenuItem sx={{textTransform:'capitalize',letterSpacing:'2px',color:'black'}} onClick={handleClose}>signup</MenuItem>
                    </Link>
                    </>
          }

                {/* {pages?.map((page,i) => {
            return(
                <Link key={i} to={`/${page}`} style={{textDecoration:'none'}}>
                    <MenuItem sx={{textTransform:'capitalize',letterSpacing:'2px',color:'black'}} onClick={handleClose}>{page}</MenuItem>
                    </Link>
            )
        })} */}
  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
  {/* <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
   'signin' , 'signup'
  */}
            </Menu>
            </>
  )
}

export default DropDownElements