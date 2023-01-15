import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlbumCard from '../AlbumCard/AlbumCard';
import './Searchbox.css'

export default class Searchbox extends Component {
    constructor() {
        super();
        this.state = {
            search_string: [],
            artist: '',
            albums: []
        } 
    }
    Search = async (event,token) => {
        event.preventDefault()
        console.log(event)
        const search_string = event.target.value
        
        
        var searchParameters ={
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.token
            }
        }
        const artistID = await fetch('https://api.spotify.com/v1/search?q=' + search_string + '&type=artist', searchParameters)
        const data2 = await artistID.json()
        const artist = data2.artists.items[0].id
        console.log(artist)
        const albumData = await fetch('https://api.spotify.com/v1/artists/' + artist + '/albums?include_groups=album&market=US&limit=50', searchParameters)
        const data3 = await albumData.json()
        const album =data3.items
        console.log(album)
        this.setState(() => {
            return (
                {
                    search_string: search_string,
                    artist:data2.artists.items[0].id,
                    albums:album
                }  
            )
            })
    } 

    render() {
        return (
            <div>
                <Box component="form"
                    sx={{
                        '& > :not(style)': { mb: 3, width: '100vh' },
                    }}
                    noValidate autoComplete="off">
                    
                    <TextField className='search-box'
                        id="outlined-basic" 
                        label="Search Artist"
                        variant="outlined"
                        onClick={this.Search}
                    /> 
                     
                </Box>
                <AlbumCard album ={this.state.albums}/>
            </div>
        )
    }
}
