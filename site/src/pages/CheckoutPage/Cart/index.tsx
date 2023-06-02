import React, {FC, Fragment} from "react"
import {
	Box, Avatar, IconButton, Typography,
	List, ListItem, ListItemAvatar, ListItemText
} from '@mui/material';
import {Delete as DeleteIcon} from "@mui/icons-material";

interface ICProps {

}

const products = [
	{
		name: 'Браслет 🇺🇦',
		price: 123.4,
		discount: 12,
		sku: 13213,
		weight: 12,
	},
	{
		name: 'Сережки-протяжки з тризубом',
		price: 123.4,
		discount: 0,
		sku: 13213,
		weight: 12,
	},
	{
		name: 'Браслет 🇺🇦',
		price: 123.4,
		discount: 12,
		sku: 13213,
		weight: 12,
	},
]
const Cart: FC<ICProps> = (props) => {
	
	const elements = products.map((product, key) => {
		return (
			<ListItem
				key={key}
				alignItems="flex-start"
				secondaryAction={
					<IconButton edge="end" aria-label="delete">
						<DeleteIcon/>
					</IconButton>
				}
			>
				<ListItemAvatar>
					<Avatar
						alt={product.name}
						src={'https://picsum.photos/100?random=' + key}
						sx={{width: 100, height: 100}}
					/>
				</ListItemAvatar>
				<ListItemText
					disableTypography={true}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						ml:1
					}}
				>
					<Box>
						<Typography>{product.name}</Typography>
						<Typography>SKU:{product.sku}</Typography>
					</Box>
					<Box>
						<Typography>{product.price} грн.</Typography>
						{!!product.discount && <Typography component={'em'} fontSize={'0.8rem'}>Знижка -{product.discount} %</Typography>}
					</Box>
				</ListItemText>
			</ListItem>
		)
	})
	return (
		<List>
			{elements}
		</List>
	)
}

export default Cart