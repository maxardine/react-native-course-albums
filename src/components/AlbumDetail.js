import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    
    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={props.album.image} />
                </View>
                <View>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'coloumn',
    }
}

export default AlbumDetail;
