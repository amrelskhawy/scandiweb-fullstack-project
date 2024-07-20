import { Component } from 'react'
import {
  Routes, Route
} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NotFound from './pages/404.'


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
            <Route
              path='/women'
              element={<CategoryPage category="Women" />}
            />
            <Route
              path='/Men'
              element={<CategoryPage category="men" />}
            />
            <Route
              path='/kids'
              element={<CategoryPage category="kids" />}
            />


            {/* If the user manullay add router */}
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
      </>
    )
  }
}

export default App
