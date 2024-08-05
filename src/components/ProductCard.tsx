import Image from "./Image";
import Button from "./ui/Button";
interface IProps {

}

const ProductCard = ({} : IProps) => {

    return(
        <div> 

            <Image 
                imageURL="https://th.bing.com/th/id/R.17732c809cc0854ade0ce1f2af8b8eeb?rik=0nbSYarrpc%2bSxg&pid=ImgRaw&r=0" 
                alt={"product-img"}
                className = {"rounded-md"}
            />
            <h3>2024 Car Model</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iusto!
            </p>
            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
                <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"/>
            </div>

            <div className="flex items-center justify-between">
                <span>$500,000</span>
                <Image 
                    imageURL="https://th.bing.com/th/id/R.17732c809cc0854ade0ce1f2af8b8eeb?rik=0nbSYarrpc%2bSxg&pid=ImgRaw&r=0" 
                    alt={"product-img"}
                    className = {"w-10 h-10 rounded-full"}
                />
            </div>

            <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className="bg-indigo-700 ">Edit</Button>
                <Button className="bg-red-700 ">Remove</Button>
            </div>
        </div>

       
    )

}

export default ProductCard