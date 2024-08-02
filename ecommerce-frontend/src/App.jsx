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
    categories: ['all', 'men', 'kids']
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          {this.state.categories.map(category => (
            <Route
              key={category}
              path={`${category === 'all' ? '/' : '/' + category}`}
              element={<CategoryPage category={category} />}
            />
          ))}

          <Route
            path={`/:category/:id`}
            element={<ProductDetails  />}
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
