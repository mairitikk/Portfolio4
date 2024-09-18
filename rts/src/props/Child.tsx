interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>Tere tere vana {color}
        <button onClick={onClick}>Vajuta siia</button>
    </div>
    );
};
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
    return (<div>Tere tere vana {color}
        <button onClick={onClick}>Vajuta siia</button></div>
    );
};
