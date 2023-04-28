import useAuthData from "@/data/hook/UseAuthData";
import Link from "next/link";

export default function AvatarUsuario() {
    const { usuario } = useAuthData()
    return (
        <Link href="/perfil">
            <img src={usuario?.imagemUrl ?? '/user.svg'} alt="Avatar do Usuário"
                className="h-10 w-10 rounded-full cursor-pointer" />
        </Link>
    )
}