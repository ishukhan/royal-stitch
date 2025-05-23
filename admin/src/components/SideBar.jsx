import { Link } from 'react-router-dom'
import addProductIcon from '../assets/addProducts.png'
import allProduct from "../assets/productlist.png"

const SideBar = () => {
  return (
    <div className='py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
     <Link to="/addProduct">
      <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-40 xs:w-44 medium-16'>
        <img src={addProductIcon} alt="" height={50} width={50}/>
        <span>Add product</span>
      </button>
     </Link>
     <Link to="/allProduct">
      <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-40 xs:w-44 medium-16'>
        <img src={allProduct} alt="" height={50} width={50}/>
        <span>Product List</span>
      </button>
     </Link>
    </div>
  )
}

export default SideBar
