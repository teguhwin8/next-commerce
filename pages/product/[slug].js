import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import NextLink from "next/link"
import { Grid, Link } from "@material-ui/core"
import useStyles from "../../utils/styles"
import Image from "next/image"

export default function ProductScreen() {
	const classes = useStyles()
	const router = useRouter()
	const { slug } = router.query
	const product = data.products.find((a) => a.slug === slug)

	if (!product) {
		return <div>Product Not Found</div>
	}

	return (
		<Layout title={product.name}>
			<div className={classes.section}>
				<NextLink href="/" passHref>
					<Link>back to products</Link>
				</NextLink>
			</div>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6}>
					<Image
						src={product.image}
						alt={product.title}
						width={640}
						height={640}
            layout="responsive"
					></Image>
				</Grid>
			</Grid>
		</Layout>
	)
}
