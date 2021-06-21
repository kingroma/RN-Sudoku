import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text , StyleSheet} from 'react-native'

import * as SudokuUtil from './SudokuUtil'

export default class SudokuTop extends React.Component {
    constructor(props){
        super(props);
    }

    refresh(){
        console.log('press refresh button')
        this.props.changeMatrix(SudokuUtil.makeSudoku9X9());
    }

    render(){
        return (
            <View style={styles.top}>
                <TouchableOpacity onPressOut={()=>{this.refresh()}}>
                    <Image style={styles.topIcon} 
                        source={require('../../images/refresh.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={styles.topIcon} 
                        source={require('../../images/settings.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        flexDirection:'row', 
        justifyContent: 'flex-end',
        flex:1
    } ,
    topIcon: {
        width:30,
        height:30,
        margin:15
    }
});