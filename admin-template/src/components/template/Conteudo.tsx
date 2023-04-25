interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div>
            {props.children}
        </div>
    )
}