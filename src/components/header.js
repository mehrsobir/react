import React , { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `2px solid ${theme.palette.divider}`,
		color: '#F0EAD6',
		background: '#536872',
	},

}));

function Header() {
	const classes = useStyles();
	let history = useHistory();
	const user = localStorage.getItem('User_name')
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				className={classes.appBar}>
				<Toolbar>
					<Typography variant="h4" style={{ flex: 1 }}>
					<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
						Mehr Science Forum
						</Link>
					</Typography>
					<Typography variant="h4" style={{ flex: 1 }}>
					<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
						</Link>
					</Typography>
                    <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>

                    <nav>
						<Link
							color="textPrimary"
							href="#"
							className={classes.link}
							component={NavLink}
							to="/register"
						>
							Register
						</Link>
					</nav>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/login"
					>
						Login
					</Button>
					<Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button>
                    <MenuIcon />
                </Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;