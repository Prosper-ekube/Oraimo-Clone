import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Product from "../pages/product/Product"
import About from "../pages/about/About"
import Shopping from "../pages/shopping/Shopping"
import Authentication from "../pages/authentication/Authentication"
import Explore from "../pages/explore/Explore"

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/" element={<Product />} />
        <Route path="about/" element={<About />} />
        <Route path="shopping/" element={<Shopping />} />
        <Route path="authentication/" element={<Authentication />} />
        <Route path="explore/" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes