import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FacturasDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle de Facturas</Text>
        </View>
    )
}

export default FacturasDetailScreen

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