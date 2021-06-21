import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View , Text , StyleSheet } from 'react-native'

import SudokuScreen from './screens/SudokuScreen';


export default function App() {
    return (
		<SafeAreaView style={styles.app}>
			<SudokuScreen/>
			<StatusBar style="light" />
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1 ,
        
    } 
});