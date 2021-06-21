import React from 'react';
import { View , Text , StyleSheet} from 'react-native'

import * as SudokuUtil from '../components/sudoku/SudokuUtil';
import SudokuTop from '../components/sudoku/SudokuTop';
import SudokuBoard from '../components/sudoku/SudokuBoard';
import SudokuFunction from '../components/sudoku/SudokuFunction';
import SudokuLastNum from '../components/sudoku/SudokuNum';

export default class SudokuScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            matrix: SudokuUtil.makeSudoku9X9() ,
            display: this.newDisplay(),
            clickNumValue: null ,
            idx: 1
        }
    }

    newDisplay(){
        let display = []

        for ( var i = 0 ; i < 9 ; i ++ ) {
            let row = [];
            for ( var j = 0 ; j < 9 ; j ++ ){
                row.push(false);
            }
            display.push(row);
        }
        
        let count = 0 ; 

        while( count <= 37 ){
            var x = Math.floor(Math.random()*9);
            var y = Math.floor(Math.random()*9);
            
            if ( display[x][y] == false ) {
                display[x][y] = true ; 
                count++;
            }
        }
        return display ; 
    }

    changeMatrix(matrix){
        this.setState({
            matrix: matrix,
            display:this.newDisplay(),
            clickNumValue: null,
            idx: this.state.idx +1 
        });
    }

    clickNum(value){
        console.log('click num value',value)
        this.setState({clickNumValue:value})
    }

    render(){
        return (
            <View style={styles.screen}>
                <SudokuTop changeMatrix={this.changeMatrix.bind(this)}/>
                <SudokuBoard 
                    matrix={this.state.matrix} display={this.state.display} 
                    clickNum={this.clickNum.bind(this)}
                    clickNumValue={this.state.clickNumValue}
                    idx={this.state.idx}
                    />
                <SudokuFunction/>
                <SudokuLastNum clickNum={this.clickNum.bind(this)}/>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1 ,
        flexDirection: "column" 
    } 
});