import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreadDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
        </View>
    )
}

export default BreadDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5BDAF',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'FiraSans',
        marginTop: 50,
    }
})