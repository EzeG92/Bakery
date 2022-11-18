import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable, Image } from 'react-native'
import postres from '../../src/assets/images/postres.jpg'

const CategoryPostresScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TORTAS Y POSTRES</Text>
            <Image
                style={styles.imageContainer}
                source={postres}
            />
            <Pressable 
            onPress={() => navigation.navigate('DetalleTortasyPostres')}
            style={styles.button}>
                <Text>Ver detalle</Text>
            </Pressable>
        </View>
    )
}

export default CategoryPostresScreen

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