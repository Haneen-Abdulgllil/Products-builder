import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import Button from "./components/ui/Button";
function App() {

  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
    <div className= "m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2 rounded-md">

    <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>Add</Button> 
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <Modal isOpen={isOpen} closeModal={closeModal} title={"Add New Product"}>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
            <Button className="bg-gray-300 hover:bg-gray-400">Cancel</Button>
          </div>
      </Modal>

    </div>
    </>
  )
}

export default App
