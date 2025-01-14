import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Copyright } from '@material-ui/icons';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebse.config';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const LogIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {

    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(token, user);

  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    console.log(errorCode, errorMessage, email, credential);
  });

}

const handleFacebookSignIn = () =>{
    firebase.auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    console.log(credential,accessToken, user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
}

    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
    </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(8, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    return (
        <div>

            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                     </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                SIGN IN
                                
                         </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                              </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid><br/>

                        </form>
                        <Button onClick={handleGoogleSignIn} variant="contained" color="Secondary"> <GTranslateIcon/> SIGN IN WITH GOOGLE</Button><br/><br/>
                        <Button onClick={handleFacebookSignIn}variant="contained" color="primary">  <FacebookIcon/>  SIGN IN WITH FACEBOOK</Button>

                        <Box mt={5}>
                                <Copyright />
                                
                            </Box>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
};

export default LogIn;