import React from 'react';
import { Image } from 'react-native';
import { View , Text , StyleSheet} from 'react-native'

import SudokuNumCell from './SudokuNumCell'

export default class SudokuLastNum extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let cells = [];

        for ( var i = 1 ; i <= 9 ; i ++ ){
            cells.push(
                <SudokuNumCell clickNum={this.props.clickNum} key={'numCell'+i}value={i} />
            )
        }

        return (
            <View style={styles.num}>
                {cells}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    num: {
        flex:2,
        flexDirection:'row', 
    } 
});