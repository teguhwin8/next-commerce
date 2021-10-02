import React from "react"
import Layout from "../../components/Layout"
import NextLink from "next/link"
import { Button, Card, Grid, Link, List, ListItem, Typography } from "@material-ui/core"
import useStyles from "../../utils/styles"
import Image from "next/image"
import Product from "../../models/Product"
import db from "../../utils/db"

export default function ProductScreen(props) {
	const { product } = props
	const classes = useStyles()

	if (!product) {
		return <div>Product Not Found</div>
	}

	return (
		<Layout title={product.name} description={product.description}>
			<div className={classes.section}>
				<NextLink href="/" passHref>
					<Link>
						<Typography>back to products</Typography>
					</Link>
				</NextLink>
			</div>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6}>
					<Image src={product.image} alt={product.title} width={640} height={640} layout="responsive"></Image>
				</Grid>
				<Grid item xs={12} md={3}>
					<List>
						<ListItem>
							<Typography component="h1" variant="h1">
								{product.name}
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>Kategori: {product.category}</Typography>
						</ListItem>
						<ListItem>
							<Typography>Merk: {product.brand}</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Rating: {product.rating} stars {product.numReviews} reviews
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>{product.description}</Typography>
						</ListItem>
					</List>
				</Grid>
				<Grid item xs={12} md={3}>
					<Card>
						<List>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Harga</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>Rp {product.price}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container>
									<Grid item xs={6}>
										<Typography>Status</Typography>
									</Grid>
									<Grid item xs={6}>
										<Typography>{product.countInStock ? "Tersedia" : "Stok habis"}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button fullWidth variant="contained" color="primary">
									Add to cart
								</Button>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	)
}

export async function getServerSideProps(context) {
	const { params } = context
	const { slug } = params

	await db.connect()
	const product = await Product.findOne({ slug }).lean()
	await db.disconnect()
	return {
		props: {
			product: db.convertDocToObj(product),
		},
	}
}
