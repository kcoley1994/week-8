import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './AlbumCard.css'

export default class AlbumCard extends Component {
  
    render() {
        const{ album } = this.props
        const mapAlbumName =album.map((spot) => {
            return spot
        })
        return (
            <div className='card'>
                    {mapAlbumName.map((spot) =>{
                        return(

                        <Card className='container' sx={{ maxWidth: 345 }}>
                        <CardActionArea >
                            <CardMedia 
                            component="img"
                            height="140"
                             image={spot.images[0].url}/> 
                            <CardContent className='card-color'>
                            <Typography  gutterBottom variant="h5" component="div" key={spot.name}>
                            {spot.name}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                        )
                    })}
            </div>
        );
    }
}








