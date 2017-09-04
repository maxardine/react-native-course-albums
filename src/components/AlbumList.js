import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            //console.log(response.data);
            this.setState({ albums: response.data });
        });
    }

    renderAlbums() {
        return this.state.albums.length === 0 ? <Text>Loading...</Text> : 
        this.state.albums.map(
            album => <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }   
}

export default AlbumList;
