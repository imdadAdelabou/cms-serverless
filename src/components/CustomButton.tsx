import "../styles/CustomButton.css";

interface PropsBtn {
    width: string;
    content: string;
    isActive: boolean;
    action: () => void;
}

function CustomButton(props: PropsBtn) {

    return <button onClick={() => props.action()} className={`block rounded-[14px] h-[62px] ${props.width} ${props.isActive ? 'bg-[#217BF4] text-white' : 'text-[#217BF4] border border-[#217BF4]'}`}>{props.content}</button>
}

export default CustomButton;