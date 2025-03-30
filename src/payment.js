import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const [showCart, setShowCart] = useState(false);

  const [paniersl, setPaniersl] = useState(() => {
    const saved = localStorage.getItem("paniersl");
    return saved ? JSON.parse(saved) : [];
  });

  const totalPrice = paniersl.reduce((total, item) => total + (item.Price * item.weight), 0);

  const removeFromCart = (id) => {
    setPaniersl(paniersl.filter(item => item.ID !== id));
  };

  const updateWeight = (id) => {
    Swal.fire({
      title: ":أدخل الوزن الجديد بالكيلوغرام",
      input: "number",
      customClass: {
        title: 'font-[Almarai] text-[#4b2d1f]',
        confirmButton: 'bg-green-500'
      },
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      cancelButtonText: 'إلغــاء',
      confirmButtonText: "تحديث",
      showLoaderOnConfirm: true,
      preConfirm: async (number) => {
        try {
          const weight = parseFloat(number);
          if (!number || isNaN(weight) || weight <= 0) {
            throw new Error("يرجى إدخال وزن صحيح.");
          }
          setPaniersl(paniersl.map((item) =>
            item.ID === id ? { ...item, weight } : item
          ));
        } catch (error) {
          Swal.showValidationMessage(error.message);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `تم تحديث الوزن`,
          icon: "success",
          draggable: true
        });
      }
    });
  };

  // تجهيز بيانات الاسم والسعر فقط بشكل نصي
  const filteredCartData = paniersl
    .map(({ Name, Price, weight }) => `${Name}: DH${Price} _ الوزن : kg${weight} `)
    .join("\n"); // Join items into a single string separated by commas

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#f4f4f9] to-[#ffffff] font-[Almarai]">
      <div className="flex justify-center items-center h-full">
        <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] bg-white sm:p-12 p-5 rounded-xl shadow-lg">
          <div className="relative w-full flex justify-center items-center">
            <h2 className="text-[#4b2d1f] sm:text-4xl text-3xl font-semibold text-center mb-8">
              تأكيد الطلب
            </h2>
            <div onClick={() => setShowCart(!showCart)} className="absolute -top-2 sm:top-0 right-0 ">
              <i className="fa bg-green-600/30 fa-shopping-cart text-[#4b2d1f] relative py-4 px-4 rounded mr-3"></i>
              <p className="absolute -top-2 right-1 bg-red-500 rounded-[50%] px-2 ">{paniersl.length}</p>
            </div>
          </div>

          {/* نموذج الإرسال إلى Web3Forms */}
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
            <input type="hidden" name="access_key" value="73d9e5bc-dd4a-4ca6-a4eb-2b9115888b34" />

            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="العنوان"
              className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
              required
            />

            {/* إرسال البيانات بشكل نصي في حقل مخفي */}
            <input type="hidden" name="cart_data" value={filteredCartData} />

            <button
              type="submit"
              className="w-full bg-[#4b2d1f] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5c3928] transition-all ease-in-out duration-300"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </div>

      <div className={`fixed ${showCart ? 'translate-x-0' : 'translate-x-[700px]'} transition-all easeInOut w-[500px] flex max-sm:w-full flex-col w-1/3 min-h-screen z-40 bg-[#F7EFE6] top-16 sm:top-20 right-0 shadow-lg duration-300`}>
        <div className="flex justify-between items-center p-5">
          <div className="flex">
            <p className="text-xl font-bold">{totalPrice.toFixed(2)}DH </p>
            <p className="text-xl font-bold">: المجموع</p>
          </div>
          <div className="cursor-pointer text-[30px]" onClick={() => setShowCart(false)}><IoIosClose /></div>
        </div>

        <div className="overflow-y-auto flex py-20 flex-col items-center h-[calc(100vh-130px)] px-4">
          {paniersl.map((u) => (
            <div key={u.ID} className="w-full flex text-center justify-center mb-9 bg-white rounded-2xl py-[2em] shadow-md hover:translate-y-3 transition-transform duration-300">
              <div>
                <p className="text-[30px] mb-2 font-bold font-[Almarai]">{u.Name}</p>
                <p className="text-xl text-gray-700">{u.Price} </p>
                <p className="text-lg text-gray-600"><span className="font-bold font-[Almarai]">الوزن:</span> {u.weight} كغ</p>
                <button onClick={() => updateWeight(u.ID)} className="text-yellow-500 mx-4 mt-4 font-bold font-[Almarai]">تحديث الوزن</button>
                <button onClick={() => removeFromCart(u.ID)} className="text-red-500 mt-4 font-bold font-[Almarai]">حذف من السلة</button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src={`/PHP/${u.ImagePath}`} alt={u.Name} className="w-[160px] h-[160px] rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
