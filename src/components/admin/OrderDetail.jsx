import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, deleteOrder } = context;

  return (
    <div>
      <div className="py-5">
        {/* text  */}
        <h1 className="text-xl text-black font-bold">All Orders</h1>
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-gray-200 text-gray-700">
          <tbody>
            <tr>
              <th className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-black bg-gray-100 font-bold">
                S.No.
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Order ID
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Image
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Title
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Category
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Price
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Quantity
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Total Price
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Status
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Name
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Address
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Pincode
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Phone Number
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Email
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Date
              </th>
              <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-gray-200 text-black bg-gray-100">
                Action
              </th>
            </tr>

            {getAllOrder.map((order) => {
              return (
                <>
                  {order.cartItems.map((item, index) => {
                    const {
                      id,
                      productImageUrl,
                      title,
                      category,
                      price,
                      quantity,
                    } = item;
                    return (
                      <tr key={id} className="text-gray-500">
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {index + 1}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {id}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          <img
                            src={productImageUrl}
                            alt="Product"
                            className="w-12 h-12 object-cover"
                          />
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {title}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {category}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          ₹{price}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {quantity}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          ₹{price * quantity}
                        </td>
                        <td
                          className={`h-12 px-6 border-t border-l first:border-l-0 border-gray-200 ${
                            order.status === "complete"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {order.status}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.addressInfo.name}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.addressInfo.address}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.addressInfo.pincode}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.addressInfo.mobileNumber}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.email}
                        </td>
                        <td className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200">
                          {order.date}
                        </td>
                        <td
                          onClick={() => deleteOrder(order.id)}
                          className="h-12 px-6 border-t border-l first:border-l-0 border-gray-200 text-red-500 cursor-pointer"
                        >
                          Delete
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
