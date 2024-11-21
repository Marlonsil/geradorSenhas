//marlon
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ImporSenha({ route }) {
    return (
        <View style={styles.container}> 
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>A Importância de Criar Senhas Fortes para Sua Segurança</Text>
                
                <Image 
                    source={require('../imgs/senhacelular.jpg')} 
                    style={styles.image}
                />
                
                <View style={styles.textBox}>
                    <Text style={styles.bodyText}>
                    Uma senha forte é essencial para proteger suas contas e informações pessoais contra acessos não autorizados.
                     Ela dificulta ataques de hackers, especialmente os que usam métodos automatizados, como força bruta. Utilize
                      combinações de letras maiúsculas, minúsculas, números e caracteres especiais, evitando palavras óbvias ou 
                      informações pessoais. Segurança começa com uma senha bem criada! </Text>
                </View>

            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        padding: 20,
        backgroundColor: '#000C29',  
    },
    scrollContainer: {
        flexGrow: 1,  
    },
    title: {
        fontSize: 26,  
        fontWeight: 'bold',  
        color: '#fff',  
        marginBottom: 20,  
        textAlign: 'center',  
    },
    image: {
        width: 300, 
        height: 300,  
        marginTop: 20,  
        borderRadius: 10,  
        alignSelf: 'center',  
    },
    textBox: {
        backgroundColor: '#fff',  
        padding: 20,  
        marginVertical: 15,  
        borderRadius: 10,  
        shadowColor: '#fff',  
        shadowOpacity: 0.1,  
        shadowRadius: 5,  
        elevation: 5,  
    },
    bodyText: {
        fontSize: 18,  
        color: '#000C29',  
        lineHeight: 24,  
        textAlign: 'justify',  
        marginBottom: 10,  
    },
});

