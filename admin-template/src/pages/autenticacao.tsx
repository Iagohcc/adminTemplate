import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div >
            <h1>Autenticacao</h1>
            <AuthInput
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail} />
            <AuthInput
                label="Senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha} />
        </div>
    )
}