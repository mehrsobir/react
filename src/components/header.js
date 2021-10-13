import React , { useState } from 'react';
import { getUser, removeUser } from "../Utils/Common";
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
	const user = getUser();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
	const handleLogoutSubmit= () => {
		removeUser();
		history.push('/login');
        window.location.reload();
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
							to="/admin"
							underline="none"
							color="textPrimary"
						>
						{user ? user['name'] : ""}
						</Link>
					</Typography>
                   {user ?  <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/> : ""}

                    <nav>
						<Link
							color="textPrimary"
							className={classes.link}
							component={NavLink}
							to="/register"

						>
							{user ? "" : "Register"}
						</Link>
					</nav>
					<Button
						color="primary"
						variant= {user ? "primary" : ""}
						className={classes.link}
						component={NavLink}
						onClick={handleLogoutSubmit}
						to="/login"
					>
						{user ? "Logout" : ""}
					</Button>
                    <MenuIcon />
                </Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;