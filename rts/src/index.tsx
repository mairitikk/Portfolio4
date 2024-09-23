import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";


const App = () => {
    return <div>
        <h1>Hello, World!</h1>
        <GuestList></GuestList>
        <UserSearch></UserSearch>
    </div>
}
ReactDOM.render(<App />, document.querySelector('#root'));