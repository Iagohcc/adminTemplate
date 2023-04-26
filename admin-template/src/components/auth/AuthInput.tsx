interface AuthInputProps {
    label: string,
    valor: any,
}

export default function AuthInput(props: AuthInputProps) {

    return (
        <div >
            <label>{props.label}</label>
            <input
                type="text"
                value={props.valor} />
        </div>
    )
}