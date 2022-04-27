import React, { Suspense, lazy } from 'react'
import Notifications from 'react-notify-toast';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/reducer'

//components

//pages
import SwitchPages from './pages/SwitchPages'

const Routes = () => {

    return (
        <Provider store={store}>
            <Notifications />

            <Suspense fallback={<h1>Carregando...</h1>}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin/admin.php" component={SwitchPages} exact />
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </Provider>
    )
}

export default Routes
