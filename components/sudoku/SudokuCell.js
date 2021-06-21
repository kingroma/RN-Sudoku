import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View , Text, StyleSheet} from 'react-native'

export default class SudokuCell extends React.Component {
    constructor(props){
        super(props);

        this.finish = false ;
        this.selectValue = null ;
        this.idx = this.props.idx ; 
    }

    click(){
        let value = this.props.value ;
        console.log('click cell value',value)

        if ( this.props.display == false && this.finish == false) {
            value = null ; 
            console.log('click cell hide')
        }
        this.props.clickCell(value,this.props.x,this.props.y);
    }

    render(){
        if ( this.idx != this.props.idx ){
            this.finish = false ;
            this.selectValue = null ;
            this.idx = this.props.idx ; 
        }

        let cellStyle2 = {} ; 
        let x = this.props.x ;
        let y = this.props.y ;
        let value = this.props.value ;
        let display = this.props.display ;

        if ( y % 3 == 2 ){
            cellStyle2.borderRightWidth = 4
        } 
        
        if ( x % 3 == 2 ) {
            cellStyle2.borderBottomWidth = 4
        }

        let cellTextStyle2 = {} ;
        
        if ( (this.finish == true || display == true ) && this.props.clickValue == value ){
            cellStyle2.backgroundColor = '#abcdef'
        }

        if ( display == false && this.finish == false ) {
            value = ''
        }

        if ( this.selectValue != null ) {
            value = this.selectValue ;
        }

        if ( this.props.clickX == x && this.props.clickY == y ){
            cellStyle2.backgroundColor = '#fedcba';

            if ( this.props.clickNumValue != null ){
                this.selectValue = this.props.clickNumValue;
                this.finish=false
                value = this.props.clickNumValue ;
                
                if ( this.selectValue == this.props.value ){
                    this.finish = true 
                    this.props.clickCell(value,this.props.x,this.props.y);
                }
            } 
        }

        if ( this.finish == true ) {
            value = this.props.value 
        }

        if ( value != this.props.value ){
            cellTextStyle2.color = '#aa0000'
        } else if ( this.finish == true ) {
            cellTextStyle2.color = '#2222ff'
        } else {
            cellTextStyle2.color = '#000000'
        }
        
        let result = (
            <TouchableOpacity style={{flex:1}} 
                onPressIn={()=>{this.click()}}>
                <Text style={[styles.cellText,cellTextStyle2]}
                >
                    {value}
                </Text>
            </TouchableOpacity>
        )

        return (
            <View style={[styles.cell,cellStyle2]}>
                {result}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex:1,
        borderColor:'#999999',
        borderWidth: 1,
        padding:0,
        margin:0,
    } ,
    cellText:{
        fontSize:40,
        textAlign:'center'
    },
    topIcon: {
        width:30,
        height:30,
        margin:15
    }
});