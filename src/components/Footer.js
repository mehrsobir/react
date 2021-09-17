import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `5px solid ${theme.palette.divider}`,
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		background: '#536872',
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Mehr Science Forum
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


function Footer() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container maxWidth="hg" component="footer" className={classes.footer}>
				<Box mt={0}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Footer;