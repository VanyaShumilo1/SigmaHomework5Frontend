import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useId, useState} from "react";
import {Context} from "./context";
import CartPage from "./pages/CartPage";
import SuccessOrder from "./pages/SuccessOrder";
import {useFetching} from "./hooks/useFetching";
import axios from "./axios";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin";
import Page404 from "./pages/Page404";

const App = () => {

    const [cartItems, setCartItems] = useState([])
    const productBlockId = useId()

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
            productBlockId
        }}>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/successOrder' element={<SuccessOrder/>}/>
                <Route path='/*' element={<Page404/>}/>
            </Routes>
            <Footer/>
        </Context.Provider>
    );
}

export default App;
