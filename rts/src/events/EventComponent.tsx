const EventComponent: React.FC = () => {
    return (
        <div>
            <input onChange={(e) => console.log(e)} type="text" />
        </div>
    );
};

export default EventComponent;