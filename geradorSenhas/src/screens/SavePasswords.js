import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function SavedPasswords ({route}) {
    const {savedPasswords} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Senhas Salvas</Text>
            <FlatList
            data={savedPasswords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}> {item} </Text>
                </View>
                )}
            />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000C29',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff'
    },
    passwordContainer: {
        backgroundColor: '#2C0F40',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
    },
    passwordText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    });
    //marlon