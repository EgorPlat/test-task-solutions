import "./CustomButton.scss";

interface ICustomButtonProps {
    text: string,
    onClick: () => void
    disabled?: boolean,
    color?: string
}

export default function Component(props: ICustomButtonProps) {
    return (
        <button 
            disabled={props.disabled ? props.disabled : false} 
            className="customButton" 
            onClick={props.onClick}
            style={props.disabled 
                ? { backgroundColor: "gray" } 
                : { backgroundColor: props.color ? props.color : "#4B51EF" } 
            }
        >
            {props.text}
        </button>
    )
}