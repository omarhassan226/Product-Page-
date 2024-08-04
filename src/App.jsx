import { ReviewsProvider } from './context/ReviewsContext'
import ProductPage from './pages/ProductPage '

function App() {
  return (
    <>
      <ReviewsProvider>
        <ProductPage />
      </ReviewsProvider>
    </>
  )
}

export default App
