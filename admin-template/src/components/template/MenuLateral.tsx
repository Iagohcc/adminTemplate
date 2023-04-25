
import { IconHome, IconAjuste, IconNotificacoes } from "../Icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Início" icone={IconHome} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconAjuste} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconNotificacoes} />
            </ul>
        </aside>
    )
}