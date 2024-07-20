import { Component } from 'react'
import {
  Routes, Route
} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NotFound from './pages/404.'
import ProductDetails from './pages/ProductDetails/ProductDetails'


class App extends Component {

  state = {
    categories: ['women', 'men', 'kids']
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          {this.state.categories.map(category => (
            <Route
              key={category}
              path={`/${category}`}
              element={<CategoryPage category={category} />}
            />
          ))}


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
