import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {Item} from "./models/Item";
import {Recipes} from "./components/Recipes/Recipes";
import {Items} from "./components/Items/Items";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>
                        Welcome on LazyCraft
                    </p>
                </header>
                <ul className="App-nav">
                    <li className="App-nav-li">
                        <Link className="App-nav-item" to="/items">Items</Link>
                    </li>
                    <li className="App-nav-li">
                        <Link className="App-nav-item" to="/recipes">Recettes</Link>
                    </li>
                </ul>
                <div className="App-main">
                    <Routes>
                        <Route path='/' element={< Items/>}></Route>
                        <Route path='/items' element={< Items/>}></Route>
                        <Route path='/recipes' element={< Recipes/>}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
