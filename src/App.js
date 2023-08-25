import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {useEffect, useId, useState} from "react";
import {Context} from "./context";
import CartPage from "./pages/CartPage";
import SuccessOrderPage from "./pages/SuccessOrderPage";
import {useFetching} from "./hooks/useFetching";
import axios from "./axios";
import Footer from "./components/Footer/Footer";
import AdminPage from "./pages/AdminPage";
import Page404 from "./pages/Page404";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";

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
                <Route path='/' element={<HomePage />}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/successOrder' element={<SuccessOrderPage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/*' element={<Page404/>}/>
            </Routes>
            <Footer/>
        </Context.Provider>
    );
}

export default App;
