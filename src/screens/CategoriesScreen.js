import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PRODUCTOS</Text>
            <Pressable 
            onPress={() => navigation.navigate('Pan')}
            style={styles.button}>
                <Text>PAN</Text>
            </Pressable>

            <Pressable 
            onPress={() => navigation.navigate('Facturas')}
            style={styles.button}>
                <Text>FACTURAS</Text>
            </Pressable>

            <Pressable 
            onPress={() => navigation.navigate('Tortas y Postres')}
            style={styles.button}>
                <Text>TORTAS Y POSTRES</Text>
            </Pressable>

        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5BDAF',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'FiraSans',
        marginTop: 50,
    },

    button: {
        height: 35,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        backgroundColor: '#F5EBE0'
    }
})