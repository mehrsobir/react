import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Card, CardContent, CardMedia, Grid, Divider, List,
        ListItemText, Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	post: {
		backgroundColor: '#DBD0B7',
		paddingBottom: '10px'
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		fontWeight: "bold",
		textAlign: 'left',
		height: '36px',
		color: 'darkblue',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
		height: '120px'
	},
}));

const Posts = (props) => {
	const { posts } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main" className={classes.post}>
            			<Typography variant = "h4">
			    		Latest Posts
				</Typography>
			   	<Divider variant="middle" xs={12} md={12} style={{ margin: '10px'}}/>
				<Grid container spacing={3} alignItems="flex-end">
					{posts.map((post) => {
						return (
							<Grid item key={post.author} xs={12} md={4}>

									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image="https://source.unsplash.com/random"
											title="Rasm"/>

										<CardContent className={classes.cardContent}>
										<Link
						     			    href = {'article/' + post.id}>
											<Typography
												gutterBottom
												variant="h2"
												component="h2"
												className={classes.postTitle}>
												{post.title}
											</Typography>
				            			</Link>
											<div>
												<Typography variant="body2" color="textSecondary"
											                className={classes.postText}>
													{post.annotation.substr(0, 350)}...
												</Typography>
											</div>
										</CardContent>
										<Divider variant="middle" xs={12} md={12} style={{ margin: '10px'}}/>
										<List>
											<ListItemText>
												Мақолаи {post.typeS.toLowerCase()}
											</ListItemText>
											<ListItemText>
												Бахши  {post.categoryS.toLowerCase()}
											</ListItemText>
										</List>
									</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
