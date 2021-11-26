import React, { useState, createContext } from 'react';
//import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
  /*  async function Cadastro(email, password, nome){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                nome: nome
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                };
                setUser(data);
            })
        })
    }
    */
    return(
        // <AuthContext.Provider value={{ signed: !!user , user, Cadastro }}>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;