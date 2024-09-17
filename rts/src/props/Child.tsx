interface ChildProps {
    color: string;
}

export const Child = ({color}: ChildProps) => {
    return <div>Tere tere vana {color}</div>
}