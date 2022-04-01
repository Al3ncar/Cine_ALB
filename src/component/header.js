import React from "react"

import App from "../App"
import Filme from "../pages/filmes"
import Series from "../pages/series"
import Pesquisa from "../pages/pesquisa"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
}from 'react-router-dom'

export default class nav extends React.Component{
    render(){
        return(
            <section>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="./">Home</Link>
                            </li>
                            <li>
                                <Link to="Filme">Filmes</Link>
                            </li>
                            <li>
                                <Link to="Series">Series</Link>
                            </li>
                            <li>
                                <Link to="Pesquisa">Pesquisa</Link>
                            </li>
                        </ul> 
                    </nav>
                    <Routes>
                        <Route path="./" element={<App/>} />
                        <Route path="filme" element={<Filme/>} />
                        <Route path="series" element={<Series/>} />
                        <Route path="pesquisa" element={<Pesquisa/>} />
                    </Routes>
                </Router>
            </section>
        )
    }
}