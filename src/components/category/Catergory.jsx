import { useNavigate } from "react-router";
import { FiHeart } from "react-icons/fi";
import { Shirt } from "lucide-react";
import jacket from "../../assets/jacket.png"; // Import image paths
import shoe from "../../assets/shoe.png";    // Import image paths

const category = [
  { icon: FiHeart, name: "Fashion" }, // Icon component
  { icon: Shirt, name: "Shirt" },     // Icon component
  { icon: jacket, name: "Jacket", isImage: true },  // Image
  { icon: shoe, name: "Shoe", isImage: true },      // Image
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-5 flex justify-center">
      <div className="flex overflow-x-auto lg:justify-center hide-scroll-bar space-x-6 lg:space-x-10 px-4 lg:px-0">
        {category.map((item, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer">
            <div
              onClick={() => navigate(`/category/${item.name}`)}
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-gray-100 transition-all hover:bg-gray-50 flex items-center justify-center transform hover:scale-110 duration-300 ease-in-out"
            >
              {/* Conditionally render icon or image */}
              {item.isImage ? (
                <img src={item.icon} alt={item.name} className="w-10 h-10 lg:w-16 lg:h-16 object-contain" />
              ) : (
                <item.icon size={40} className="text-black" />
              )}
            </div>
            <h1 className="text-sm lg:text-lg text-center font-medium mt-2 text-black">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
