import React from  'react'
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import Main from './pages/main/Index'
import Product from './pages/product/index'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/users/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;