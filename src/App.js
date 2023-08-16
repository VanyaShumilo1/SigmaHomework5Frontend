import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useState} from "react";
import {Context} from "./context";
import CartPage from "./pages/CartPage";
import SuccessOrder from "./pages/SuccessOrder";
import {useFetching} from "./hooks/useFetching";
import axios from "./axios";

const App = () => {

    const [cartItems, setCartItems] = useState([])

    const [products, setProducts] = useState([])
    const [getProducts, isProductsLoading, productsError] = useFetching(async () => {
        const response = await axios.get('/products')
        setProducts(response.data)
        return response
    })

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <Context.Provider value={{
            cartItems,
            setCartItems,
            products,
            setProducts,
            isProductsLoading,
            productsError,
        }}>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/successOrder' element={<SuccessOrder/>}/>
            </Routes>
        </Context.Provider>
    );
}

export default App;
