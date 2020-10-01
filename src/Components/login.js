import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../Style/Login.css';


function Login(){
    const useStyles = makeStyles({
        root: {
          minWidth: 100,
          boxShadow: 25,
          alignContent: 100,
        },
        title: {
            fontSize: 25,
          },
          title2: {
            fontSize: 55,
          },
    });
          const classes = useStyles();
    return(
        <div className= 'container'>
       <div className='card'>
       <div className='txt'>
           <div className='heading'>
            CHIT - CHAT <i class="far fa-comment-dots"></i>
          </div>
          
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Your Chat room!
        </Typography>
        
        <Button variant="contained" color="secondary" href="#contained-buttons" >
       Login with Google
        </Button>
        
        </div>
     </div>   
    </div>
    );
}

export default Login;