import React, {FC} from "react"
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Link,
    Rating,
    Typography
} from '@mui/material';
import {
    Favorite as FavoriteIcon,
    ReadMore as ReadMoreIcon,
    Schedule as ScheduleIcon,
    Share as ShareIcon
} from "@mui/icons-material";

interface ICProps {
    // link: string,
    title: string,
    description: string,
    image: string,
    rating: number,
    date: Date
}

const ArticleCard: FC<ICProps> = (props) => {
    return (
        <Card sx={{display: 'flex', justifyContent: 'column', height: '100%'}}>
            <CardMedia
                component="img"
                sx={{
                    width: {xs: 150, sm: 250, md: 300}
                }}
                image={props.image}
                alt={props.title}
            />
            <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        mb: 2
                    }}>
                        <Typography
                            color="text.secondary"
                            sx={{display: 'flex'}}
                        >
                            <ScheduleIcon sx={{mr: 1}}/>
                            {props.date.toLocaleDateString()}
                        </Typography>
                        <Rating
                            size="small"
                            precision={0.5}
                            value={props.rating}
                            readOnly
                        />
                    </Box>
                    <Link
                        href="#"
                        underline="none"
                        variant="h5"
                        color="text.primary"
                        sx={{display: 'flex', mb: 2}}
                    >
                        {props.title}
                    </Link>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions
                    disableSpacing
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box>
                        <IconButton aria-label="add to favorites" disabled={true}>
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </Box>
                    <Button
                        endIcon={<ReadMoreIcon/>}
                        variant={'contained'}
                    >
                        Детальніше
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default ArticleCard