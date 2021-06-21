import React from 'react';
import { View , Text, StyleSheet, Button} from 'react-native'

import SudokuRow from './SudokuRow'

export default class SudokuBoard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clickValue: null ,
            clickX: null , 
            clickY: null 
        }

        this.clickValue = null ; 
        this.clickX = null ; 
        this.clickY = null ;

        this.idx = 1 ; 
    }

    clickCell(value,x,y){
        this.setState({clickValue:value,clickX:x,clickY:y})
        this.clickValue = value ; 
        this.clickX = x ; 
        this.clickY = y ;

        this.props.clickNum(null);
    }

    render(){
        if ( this.idx != this.props.idx ){
            this.idx = this.props.idx ; 
            this.clickValue = null ; 
            this.clickX = null ; 
            this.clickY = null ;
        }

        let matrix = this.props.matrix ; 
        let rows = [] ;   

        for ( var i = 0 ; i < 9 ; i ++ ){
            let key = i  ;
            rows.push(
                <SudokuRow 
                    key={key} x={i} 
                    rows={matrix[i]} 
                    display={this.props.display[i]} 
                    clickCell={this.clickCell.bind(this)}
                    clickValue={this.clickValue}
                    clickX={this.clickX}
                    clickY={this.clickY}
                    clickNumValue={this.props.clickNumValue}
                    idx={this.props.idx}
                    />
            )
        }

        return (
            <View style={styles.board}>
                {rows}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    board: {
        flex:10,
        margin:10
    } ,
    topIcon: {
        width:30,
        height:30,
        margin:15
    }
});