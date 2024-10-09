import "./CustomInput.scss";

interface ICustomInputProps {
    defaultValue: string | number,
    placeholder: string,
    isValid: boolean,
    readOnly: boolean,
    onChange: (e: any) => void,
}

export default function CustomInput(props: ICustomInputProps) {
    return (
        <input
            className="customInput" 
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            style={{ border: props.isValid ? "1px solid #D8D8D8": "1px solid red" }}
            readOnly={props.readOnly}
        />
    )
}