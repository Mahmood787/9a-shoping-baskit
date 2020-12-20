import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";

const useStyle = makeStyles((theme)=>({
    title:{
        flexGrow: 1,
        textAlign: "start"
    },
    menuButton: {
        marginRight: theme.spacing(2)
      },
      appBar:{
          background:"black",
          marginBottom: "40px"
      }
}))

interface Props {
    setJamboState: (id:boolean)=>void
}
const Header = () => {
    const classes = useStyle()
    return (
        <div >
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar>
                <IconButton
                    edge="start"
                    className = {classes.menuButton}
                    color = "inherit"
                    aria-label = "menu"
                    >
            <MenuIcon /> 
          </IconButton>
            <Typography variant="h5" className={classes.title}>Shopping Basket</Typography>
                   
                        <Button variant="contained"
                         color="secondary"
                        
                         >
                             Home
                         </Button >
                    
                     <Button variant="contained" color="secondary"
                        style={{marginLeft:"20px"}}
                        className="about"
                       
                     >About</Button >
                
                </Toolbar>
            </AppBar>
            
        </div>
    )
}
export default Header
