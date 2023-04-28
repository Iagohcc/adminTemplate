import Usuario from '@/model/Usuario';
import firebase from '../../firebase/config'
import { createContext, useEffect, useState } from "react";
import route from 'next/router';
import Cookies from 'js-cookie';

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-ihcc', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-ihcc')
    }
}

export function AuthProvider(props: any) {
    const [carregando, setCarregando] = useState(false)
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function configurarSessao(usuarioFirebase: any) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function login(emial: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(emial, senha)

            await configurarSessao(resp.user)
            route.push('/home');
        } finally {
            setCarregando(false)
        }
    }

    async function cadastrar(emial: string, senha: string) {
        try {
            setCarregando(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(emial, senha)
            await configurarSessao(resp.user)
            route.push('/home');
        } finally {
            setCarregando(false)
        }
    }

    async function loginGoogle() {

        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(resp.user)
            route.push('/home');
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
            route.push('/autenticacao');
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-ihcc')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            cadastrar,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext 