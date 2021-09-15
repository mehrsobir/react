import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	post: {
		backgroundColor: '#DBD0B7',
		paddingBottom: '10px'
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
		height: '36px',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
		height: '150px'
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
				<Grid container spacing={3} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.author} xs={12} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image="https://source.unsplash.com/random"
										title="Rasm"/>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h2 "
											component="h2"
											className={classes.postTitle}>
											{post.title.substr(0, 50)}...
										</Typography>
										<div>
											<Typography variant="p" color="textSecondary"
											                className={classes.postText}>
												{post.annotation}...
											</Typography>
										</div>
										<div>
											<Typography variant="p" color="textPrimary">
												Мақолаи {post.type.toLowerCase()}
											</Typography>
										</div>
											<Typography variant="p" color="textPrimary">
												Мавзӯъ:  {post.category.toLowerCase()}
											</Typography>
									</CardContent>
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