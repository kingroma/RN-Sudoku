import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View , Text , StyleSheet} from 'react-native'


export default class SudokuLastNumCell extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        let value = this.props.value ; 
        return (
            <View style={styles.cell}>
                <TouchableOpacity style={{flex:1}} onPressIn={()=>{this.props.clickNum(value)}}>
                    <Text style={styles.cellText}>{value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        flex:1,
        borderWidth:1,
        borderColor:'#abcdef',
        borderWidth:2,
        borderRadius:10,
        justifyContent: 'center',
        margin: 5 ,
        marginTop: 20,
        marginBottom:20,
        padding: 2
    } ,
    cellText:{
        fontSize:40,
        textAlign:'center'
    }
});