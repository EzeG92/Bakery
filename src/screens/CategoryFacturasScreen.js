import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, Image } from 'react-native'
import facturas from '../../src/assets/images/facturas.jpg'

const CategoryFacturasScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FACTURAS</Text>
            <Image
                style={styles.imageContainer}
                source={facturas}
            />
            <Pressable 
            onPress={() => navigation.navigate('DetalleFacturas')}
            style={styles.button}>
                <Text>Ver detalle</Text>
            </Pressable>
        </View>
    )
}

export default CategoryFacturasScreen

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
        height: 25,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        backgroundColor: '#F5EBE0'
    },

    imageContainer: {
        width: '80%',
        height: '50%',
        borderRadius: 30,
        marginTop: 30,
    }
}) 