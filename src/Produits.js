import React, { useEffect, useState } from "react";
import CardDate from "./CardDate";
import { Link, useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import Flag from 'react-world-flags';
import { IoIosClose } from "react-icons/io";
import Swal from "sweetalert2";
import { easeInOut, motion } from "framer-motion"
export default function Produits() {
    const [Message, setMessage] = useState('');
    const [Dates, setDates] = useState([]);
    const [datesfilrer, setDatesfilrer] = useState([]);
    const [Search, setSearch] = useState("");
    const [paniersl, setPaniersl] = useState(() => {
        // Load paniersl data from localStorage when component mounts
        const saved = localStorage.getItem("paniersl");
        return saved ? JSON.parse(saved) : [];
    });
    const [showCart, setShowCart] = useState(false);
    const userID = JSON.parse(sessionStorage.getItem('userID'));
    const navigate = useNavigate()


    function ko(s) {
        setSearch(s);
        setPaniersl(paniersl.filter(r => r.ID === s));
    }

    useEffect(() => {
        const filtrage = () => {
            setDatesfilrer(Dates.filter((date) => date.Name.toLowerCase().includes(Search.toLowerCase())));
        };
        filtrage();
    }, [Search]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost/my-app/public/PHP/select.php");
                const data = await res.json();
                if (data.status === "success") {
                    setDates(data.dates);
                    setDatesfilrer(data.dates);
                } else {
                    setMessage(data.message);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        
    }, [userID]);

    const [panier, setPanier] = useState([]);

    function AddPanier(id) {
        const find = Dates.find((date) => date.ID === id);
        if (find && !panier.some((e) => e.ID === id)) {
            setPanier([...panier, find]);
        }
    }

    function pn(id) {

        const find = Dates.find((date) => date.ID === id);

        if (find && !paniersl.some((e) => e.ID === id)) {
            if (!userID) {
                Swal.fire({
                    title: 'يجب تسجيل الدخول ',
                    icon: 'error',
                    customClass:{
                        title:'font-[Almarai] font-bold',
                        confirmButton:'bg-green-500'
                        
                    },
                    confirmButtonText:'حسنا',
                    
                    

                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login')
                    }
                })
            } else {
                Swal.fire({
                    title: `الاسم: ${find.Name}<br> الوزن بالكيلوغرام:`,
                    input: "number",
                    customClass: {
                        title: 'font-[Almarai] text-[#4b2d1f]',
                        confirmButton: 'bg-green-500',
                        oninvalid : "font-[Almarai]"
                    },
                    inputAttributes: {
                        autocapitalize: "off",
                        placeholder: "يرجى إدخال رقم",  // ← إضافة نص توضيحي بالعربية
                        oninvalid: "this.setCustomValidity('يرجى إدخال رقم صالح')",
                        oninput: "this.setCustomValidity('')" // ← إعادة ضبط الرسالة عند إدخال قيمة صحيحة
                    },
                    showCancelButton: true,
                    cancelButtonText: 'إلغــاء',
                    confirmButtonText: "أضــف",
                    showLoaderOnConfirm: true,
                    preConfirm: async (number) => {
                        try {
                            // تحويل الإدخال إلى رقم
                            const weight = parseFloat(number);
                
                            // التحقق من صحة الإدخال
                            if (!number || isNaN(weight) || weight <= 0) {
                                throw new Error("يرجى إدخال وزن صحيح.");
                            }
                
                            // إضافة المنتج إلى السلة
                            setPaniersl([...paniersl, { ...find, weight }]);
                            setShowCart(true);
                
                        } catch (error) {
                            Swal.showValidationMessage(error.message);
                        }
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: `تم الإضافة للسلة`,
                            icon: "success",
                            draggable: true
                        });
                    }
                });
                
                
            }

            // const userInput = prompt(`الاسم: ${find.Name}\nالوزن بلكيلوغرام:`);
            /*  if (userInput) {
                 const weight = parseFloat(userInput);
                 if (!isNaN(weight)) {
                     alert(`تم الاضافة للسلة`);
 
                     setPaniersl([...paniersl, { ...find, weight }]);
                     setShowCart(true);
                 } else {
                     alert("يرجى إدخال وزن صحيح.");
                 }
             } else {
                 alert("لم يتم إضافة العنصر.");
             } */
        } else {
            Swal.fire({
                title: "العنصر موجود مسبقا",
                icon: "error",
                draggable: true
            });
        }
    }

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
                    // تحويل الإدخال إلى رقم
                    const weight = parseFloat(number);
        
                    // التحقق من أن الوزن صالح (رقم موجب أكبر من صفر)
                    if (!number || isNaN(weight) || weight <= 0) {
                        throw new Error("يرجى إدخال وزن صحيح.");
                    }
        
                    // تحديث بيانات القائمة إذا كان الرقم صالحًا
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

    // Save paniersl to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("paniersl", JSON.stringify(paniersl));
    }, [paniersl]);

    return (
        <div className="pt-20 w-full h-full bg-[#F7EFE6] scroll-smooth transition-all duration-300">

            <div className="flex justify-center items-center my-8">
                <motion.input
                    initial={{ y: -500, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                    type="text"
                    placeholder="...بحث"
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-end bg-[#F7EFE6] pl-10 pr-4 py-2 w-auto sm:w-[400px] rounded-lg shadow-lg outline-none font-[Almarai] font-bold ring-2 ring-[#4B2D1F] border-[#4B2D1F] transition-all duration-300"
                />
            </div>


            <div
                className="z-10 fixed top-[45%] -right-16 bg-red-500 px-2 rounded-l-full cursor-pointer shadow-lg transition-all duration-300"
                onClick={() => setShowCart(!showCart)}
            >
                <i className="fa fa-shopping-cart text-white py-4 px-2 mr-3"></i>
                Panier
            </div>

            {datesfilrer.length > 0 ? (
                <  div className="px-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-[40px]">
                    {datesfilrer.map((date, index) => (
                        <motion.div key={date.ID}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.2, ease: easeInOut,
                                delay: 0.2 * index
                            }}

                        >
                            <CardDate AddPanier={AddPanier} pn={pn} date={date} />
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="w-full text-center bg-[#F7EFE6] sm:text-[30px] font-bold font-[Almarai]">
                    {Message ? Message : "...جاري التحميل"}
                </p>
            )}

            {showCart && (
                <div className="fixed flex max-sm:w-full flex-col w-1/3 min-h-screen z-[99] bg-[#F7EFE6] top-0 right-0 rounded-l-3xl shadow-lg transition-transform duration-300">
                    <div className="flex justify-between items-center p-5">
                        <div className="flex">
                            <p className="text-xl font-bold">{totalPrice.toFixed(2)}DH </p>
                            <p className="text-xl font-bold">: المجموع</p>
                        </div>
                        <div className="cursor-pointer text-[30px]" onClick={() => setShowCart(false)}><IoIosClose /></div>
                    </div>

                    <div className="overflow-y-auto h-[calc(100vh-130px)] px-4">
                        {paniersl.map((u) => (
                            <div
                                key={u.ID}
                                className="w-auto flex text-center justify-center mb-9 bg-white rounded-2xl py-[2em] shadow-md hover:translate-y-3 transition-transform duration-300"
                            >
                                <div>
                                    <p className="text-[30px] mb-2 font-bold font-[Almarai]">{u.Name}</p>
                                    <p className="text-xl text-gray-700">{u.Price} </p>

                                    <p className="text-lg text-gray-600"><span className="font-bold font-[Almarai]">الوزن:</span> {u.weight} كغ</p>

                                    <button onClick={() => updateWeight(u.ID)} className="text-yellow-500 mx-4 mt-4 font-bold font-[Almarai]">تحديث الوزن</button>

                                    <button onClick={() => removeFromCart(u.ID)} className="text-red-500 mt-4 font-bold font-[Almarai]">حذف من السلة</button>
                                </div>
                                <div className="w-1/2 flex justify-center">
                                    <img
                                        src={`/PHP/${u.ImagePath}`}
                                        alt={u.Name}
                                        className="w-[200px] h-[160px] rounded-lg shadow-md"
                                    />
                                </div>
                            </div>

                        ))}
                        {/* الدفع*/}
                        {totalPrice.toFixed(2) > 0 ? (
                            <Link to="/payment"><button className="bg-[#8B4513] text-white mb-5 w-full py-3 rounded-lg font-bold font-[Almarai] hover:bg-[#A0522D] ">
                                الدفع
                            </button>
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            )}

        </div>
    );
}
