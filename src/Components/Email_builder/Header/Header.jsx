import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import useStyle from "./style"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header({ html, Zip, Plaintext, Pdf, Image }) {
  const classes = useStyle();
  console.log(classes);

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EmailIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Email Builder
          </Typography>

          <div>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
              color="primary"
            >
              Export
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem variant="contained" color="primary" className={classes.btn} onClick={html}>Export Html</MenuItem>
              <MenuItem variant="contained" color="primary" className={classes.btn} onClick={Zip}>Export Zip</MenuItem>
              <MenuItem variant="contained" color="primary" className={classes.btn} onClick={Plaintext}>Export Plaintext</MenuItem>
              <MenuItem variant="contained" color="primary" className={classes.btn} onClick={Pdf}>Export Pdf</MenuItem>
              <MenuItem variant="contained" color="primary" className={classes.btn} onClick={Image}>Export Image</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
