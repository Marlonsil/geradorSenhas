import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

export function ModalPassword({senha, handleClose, salvarSenha}) {

    function copyToClipboard() {
        Clipboard.setStringAsync(senha);
        Toast.show({
            type: 'success',
            text1: 'senha salva',
            text2: 'senha copiada',
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onPress={copyToClipboard}>
                    <Text style={styles.text}> {senha} </Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={salvarSenha}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Toast />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: "#000C29",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#fff",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text:  {
        color: "#000C29",
        textAlign: "center",
        fontWeight: "bold",
    },    
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        borderRadius: 8,
        marginLeft: 4,
        backgroundColor: "#071D92",
    },
    buttonSave: {
        backgroundColor: "#071D92",
        borderRadius: 8,
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: 'bold',
        
    },
    buttonText: {
        color: "#FFF",
        fontWeight: 'bold',
        
    }

})
//marlon