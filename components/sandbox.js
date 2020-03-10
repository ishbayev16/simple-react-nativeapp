import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1, 
        // flex: 1 covers whole screen
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne:{
        flex: 3,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        flex: 1,

        backgroundColor: 'red',
        padding: 30,
    },
    boxFour: {
        flex: 1,

        backgroundColor: 'skyblue',
        padding: 40,
    },

});