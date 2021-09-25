import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import Head from 'next/head'

export default function Layout({children}) {
	return (
		<div>
			<Head>
				<title>Next Commerce by Teguh Widodo</title>
			</Head>
			<AppBar position="static">
				<Toolbar>
					<Typography>NextCommerce</Typography>
				</Toolbar>
			</AppBar>
			<Container>
				{children}
			</Container>
			<footer>
				<Typography>All right reserved. Next Commerce.</Typography>
			</footer>
		</div>
	)
}
