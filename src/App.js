import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {useState} from "react";
import {Context} from "./context";
import CartPage from "./pages/CartPage";

const App = () => {

    const [cartItems, setCartItems] = useState([])

    return (
        <Context.Provider value={{
            cartItems,
            setCartItems,
        }}>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
        </Context.Provider>
    );
}

export default App;
