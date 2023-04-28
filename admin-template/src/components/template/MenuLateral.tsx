
import useAuthData from "@/data/hook/UseAuthData";
import { IconHome, IconAjuste, IconNotificacoes, IconSair } from "../Icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {

    const { logout } = useAuthData()

    return (
        <aside className="flex flex-col">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/home" texto="Início" icone={IconHome()} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconAjuste()} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconNotificacoes()} />
            </ul>
            <ul >
                <MenuItem
                    onClick={logout}
                    texto="Sair"
                    icone={IconSair()}
                    className={`text-red-600 hover:bg-red-400 hover:text-white`} />
            </ul>
        </aside>
    )
}