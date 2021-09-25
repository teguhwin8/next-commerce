import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import Head from 'next/head'
import useStyles from "../utils/styles"

export default function Layout({ children }) {
	const classes = useStyles()

	return (
		<div>
			<Head>
				<title>Next Commerce by Teguh Widodo</title>
			</Head>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<Typography>NextCommerce</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>
				{children}
			</Container>
			<footer className={classes.footer}>
				<Typography>All right reserved. Next Commerce.</Typography>
			</footer>
		</div>
	)
}
