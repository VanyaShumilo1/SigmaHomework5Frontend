import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
