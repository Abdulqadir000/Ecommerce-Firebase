import { useNavigate, useParams } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { getAllProduct, loading } = context;
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Convert categoryname to lowercase for matching
  const normalizedCategory = categoryname?.toLowerCase();

  // Filter products by category
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.toLowerCase().includes(normalizedCategory)
  );

  // Debugging - check if the category and product match
  useEffect(() => {
    console.log("Category Name: ", categoryname);
    console.log("Filtered Products: ", filterProduct);
  }, [categoryname, filterProduct]);

  const addCart = (item) => {
    const serializableItem = {
      ...item,
      // Convert Firestore _Timestamp to ISO string if it's a Firestore Timestamp
      time: item.time?.seconds ? new Date(item.time.seconds * 1000).toISOString() : item.time,
    };
    dispatch(addToCart(serializableItem));
    toast.success("Added to cart");
  };

  const deleteCart = (item) => {
    const serializableItem = {
      ...item,
      // Convert Firestore _Timestamp to ISO string if it's a Firestore Timestamp
      time: item.time?.seconds ? new Date(item.time.seconds * 1000).toISOString() : item.time,
    };
    dispatch(deleteFromCart(serializableItem));
    toast.success("Removed from cart");
  };
  
  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  console.log("Current cart items:", cartItems);
  return (
    <Layout>
      <div className="mt-10">
        {/* Heading  */}
        <div>
          <h1 className="text-center mb-5 text-2xl font-semibold first-letter:uppercase">
            {categoryname}
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <section className="text-gray-600 body-font">
            {/* main container */}
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                {filterProduct.length > 0 ? (
                  filterProduct.map((item, index) => {
                    const { id, title, price, productImageUrl } = item;
                    return (
                      <div key={index} className="p-4 w-full md:w-1/4">
                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                          <img
                            onClick={() => navigate(`/productinfo/${id}`)}
                            className="lg:h-80 h-96 w-full"
                            src={productImageUrl}
                            alt={title}
                          />
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              E-Qadir
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              {title.substring(0, 25)}
                            </h1>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                              ₹{price}
                            </h1>
                            <div className="flex justify-center ">
                              {cartItems &&
                              cartItems.some((p) => p.id === item.id) ? (
                                <button
                                  onClick={() => deleteCart(item)}
                                  className=" bg-red-700 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Delete To Cart
                                </button>
                              ) : (
                                <button
                                  onClick={() => addCart(item)}
                                  className=" bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold"
                                >
                                  Add To Cart
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center">
                    <img
                      className="mb-2 mx-auto"
                      src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                      alt="No products"
                    />
                    <h1 className="text-black text-xl">
                      No {categoryname} product found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;