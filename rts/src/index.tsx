import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";


const App = () => {
    return <div>
        <h1>Hello, World!</h1>
        <GuestList></GuestList>
        <UserSearch></UserSearch>
        <EventComponent></EventComponent>
    </div>
}
ReactDOM.render(<App />, document.querySelector('#root'));