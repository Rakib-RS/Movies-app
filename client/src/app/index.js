import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList,MovieInsert,MoviesUpdate,Home,About} from '../pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path= "/movies/create" exact component={MovieInsert}/>
                <Route
                    path = "/movies/update/:id" exact component = {MoviesUpdate}
                />
                <Route path="/about" exact component = {About} />
                
            </Switch>
        </Router>
    )
}

export default App