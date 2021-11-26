import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIndex: {
        flex: 1, 
        margin: 15,
        marginTop: 20
    },
    containerIndex2: {
        flex: 1, 
        textAlign: 'center', 
        alignItems: 'center' 
    },
    containerPerfil: {
        flex: 1,
        flexDirection: 'row'
    },
    containerCaixaPerfil: {
        margin: 1
    },
    containerTabs: {
        marginTop: 826
    },
    imgLogo: {
        width: 200,
        height: 200,
        margin: 20
    }, 
    imgPerfil: {
        width: 80,
        height: 80,
        margin: 20
    },
    imgDevice: {
        width: 100,
        height: 100,
        opacity: 0.3
    },
    h2: {
        fontSize: 30,
        margin: 0,
        padding: 20
    }, 
    h3: {
        fontSize: 25,
        margin: 0,
        padding: 10
    },
    h4: {
        margin: 0,
        padding: 15
    },
    h5: {
        fontWeight: 'bold',
        fontSize: 25
    },
    space: {
        margin: 0,
        padding: 20
    },
    Button: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        borderRadius: 17
    },
    countContainer: {
        width: 250,
        height: 45,
        backgroundColor: '#0086FF',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5
    },
    Button2: {
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color:'#1C1C1C',
        textDecorationLine: 'underline',
        padding: 5
    },
    countContainer2: {    
        width: 250,
        height: 45,
        backgroundColor: '#EEF5F5',
        borderColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5
    },

// Formulario, Inputs, Textearea

/*
        width: 250,
        height: 40,
        fontSize: 17,
        borderColor: '#1C1C1C',
        alignItems: 'center',
        borderRadius: 3,
        padding: 10,
        marginBottom: 15,
        elevation: 1    
*/

    loginInput: { 
        backgroundColor: '#FFF',
        width: 250,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    loginMsg: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#A33333',
        marginTop: 5,
        marginBottom: 15
    },   
    satus:{
        margin: 50,
        color: "#A72813",
        fontSize: 18,
        textAlign: 'center'
    },
    loginForm: {
        height: 30,
        backgroundColor: '#0086FF',
        borderColor: '#1C1C1C',
        alignItems: 'center',
        borderRadius: 3,
        padding: 1,
        elevation: 3
    }   
});

export {styles};
// --> Estilos de textos
// textAlign: 'center',                         Alinhamento do texto no centro
// fontWeight: 'bold',                          Texto em negrito
// fontStyle: 'italic',                         Texto em italico
// textDecorationLine: 'underline',             Texto sublinhado

// --> Flex para alinhar conteúdo
// display: "flex",
// alignItems: "center",
// justifyContent: "center",