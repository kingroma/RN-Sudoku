import React from 'react';
import { Image } from 'react-native';
import { View , Text , StyleSheet} from 'react-native'


export default class SudokuFunction extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.top}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        flex:2,
        backgroundColor:'#e2e2e2'
    } 
});