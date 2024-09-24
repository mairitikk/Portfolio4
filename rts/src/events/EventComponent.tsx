const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <div>
            <input onChange={onChange} type="text" />
        </div>
    );
};

export default EventComponent;