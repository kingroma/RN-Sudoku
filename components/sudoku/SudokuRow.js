import React from 'react';
import { View , Text, StyleSheet, Button} from 'react-native'

import SudokuCell from './SudokuCell'

export default class SudokuRow extends React.Component {
    constructor(props){
        super(props);
    }

    clickCell(value,x,y){
        this.props.clickCell(value,x,y);
    }

    render(){
        let cells = [] ;
        for ( var i = 0 ; i < 9 ; i ++ ){
            var key = this.props.x+''+i
            cells.push(
                <SudokuCell key={key} 
                    display={this.props.display[i]}
                    x={this.props.x} y={i} 
                    value={this.props.rows[i]}
                    clickCell={this.clickCell.bind(this)}
                    clickValue={this.props.clickValue}
                    clickX={this.props.clickX}
                    clickY={this.props.clickY}
                    clickNumValue={this.props.clickNumValue}
                    idx={this.props.idx}
                    />
            )
        }

        return (
            <View style={{flex:1}}>
                <View style={styles.row}>
                    {cells}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row', 
        flex:1
    } ,
    topIcon: {
        width:30,
        height:30,
        margin:15
    }
});