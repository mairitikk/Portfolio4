const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    };

    const onDragStart = () => {
        console.log('event')
    };
    return (
        <div>
            <input onChange={onChange} type="text" />
            <div draggable onDragStart={onDragStart}>Drag Me!</div>
        </div>
    );
};

export default EventComponent;