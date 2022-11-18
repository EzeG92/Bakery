import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostresDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle de Tortas y Postres</Text>
        </View>
    )
}

export default PostresDetailScreen

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