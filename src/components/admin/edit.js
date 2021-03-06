import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
    const [a, setA] = useState();
    const [c, setC] = useState();
	const history = useHistory();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		author: '',
		title: '',
		slug: '',
		annotation: '',
		text: '',
		source: '',
		type: '',
		category: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

    function slugify(string) {
		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}

    useEffect(() => {
		axiosInstance.get('/type/')
		.then((res) => {
			  setA(res.data);
		});
	}, []);

    useEffect(() => {
		axiosInstance.get('/cat/')
		.then((res) => {
			  setC(res.data);
		});
	}, []);

	useEffect(() => {
		axiosInstance.get('admi/edit/postdetail/' + id).then((res) => {
			updateFormData({
				id: id,
				author: res.data.author,
				title: res.data.title,
				slug: res.data.slug,
				annotation: res.data.annotation,
				text: res.data.text,
				source: res.data.source,
		        type: res.data.type,
		        category: res.data.category,
			});
		});
	}, [id]);

	const handleChange = (e) => {
	    // eslint-disable-next-line
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value,
				// eslint-disable-next-line
				["slug"]: slugify(e.target.value.trim()),
			});

		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
		    .put(`admi/edit/` + id + '/', {
		    id: id,
			author: formData.author,
			title: formData.title,
			slug: formData.slug,
			annotation: formData.annotation,
			text: formData.text,
			source: formData.source,
		    type: formData.type,
		    category: formData.category,
		})
		.then(function () {
					history.push({
						pathname: '/admin/',
					});
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Post
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Post Title"
								name="title"
								autoComplete="title"
								value={formData.title}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={formData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="annotation"
								label="Post annotation"
								name="annotation"
								autoComplete="annotation"
								value={formData.annotation}
								onChange={handleChange}
								multiline
								rows={6}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="text"
								label="text"
								name="text"
								autoComplete="text"
								value={formData.text}
								onChange={handleChange}
								multiline
								rows={30}
							/>
						</Grid>
							<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="source"
								label="source"
								name="source"
								autoComplete="source"
								value={formData.source}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							Type
                            {a ? <Select
							    variant="outlined"
								required
								fullWidth
								id="type"
                                label="Type"
                                name="type"
								autoComplete="type"
                                value={formData.type}
								onChange={handleChange}>

                                {a.map((typ) => (
                            <MenuItem key = {typ.id} value={typ.id}>{typ.type}</MenuItem>))}
                             </Select> : "Wait!"}
						</Grid>
							<Grid item xs={12}>
							Category
							{c ?
							 <Select
							    variant="outlined"
								required
								fullWidth
								id="category"
                                label="Category"
                                name="category"
								autoComplete="category"
                                value={formData.category}
								onChange={handleChange}>

                                {c.map((cat) => (
                            <MenuItem key = {cat.id} value={cat.id}>{cat.category}</MenuItem>))}
                             </Select> : "Wait!"}
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Post
					</Button>
				</form>
			</div>
		</Container>
	);
}