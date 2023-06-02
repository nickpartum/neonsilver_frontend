import React, {FC} from "react"
import {
    BrowserRouter, Route,
    Routes as RoutesSwitch
} from 'react-router-dom'
import {
    CatalogPage, HomePage, NotFoundPage, ProductPage, CheckoutPage
} from "../../pages"
import {ERoute} from "../../enum";


interface ICProps {
}

const AppRoutes: FC<ICProps> = () => {
    return (
        <BrowserRouter>
            <RoutesSwitch>
                <Route path={ERoute.HOME} element={<HomePage/>}/>
                <Route index element={<HomePage/>}/>
                <Route path={ERoute.CATALOG} element={<CatalogPage/>}>
                    <Route path=':categoryId' element={<CatalogPage/>}/>
                </Route>
                <Route path={ERoute.PRODUCT + '/:' + ERoute.PRODUCT_ID} element={<ProductPage/>}/>
                <Route path={ERoute.CHECKOUT} element={<CheckoutPage/>}/>

                <Route path='*' element={<NotFoundPage/>}/>
            </RoutesSwitch>
        </BrowserRouter>
    )
}

export default AppRoutes