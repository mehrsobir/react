import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `2px solid ${theme.palette.divider}`,
		color: '#F0EAD6',
		background: '#536872',
	},
	search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: '10px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header() {
	const classes = useStyles();
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

				    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                         }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <nav>
						<Link
							color="textPrimary"
							href="#"
							className={classes.link}
							component={NavLink}
							to="/create"
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