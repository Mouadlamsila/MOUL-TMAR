import React, { useEffect, useState } from "react";
import CardDate from "./CardDate";
import { useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import Flag from 'react-world-flags';
import { IoIosClose } from "react-icons/io";

export default function Home() {
    const [Message, setMessage] = useState('');
    const [Dates, setDates] = useState([]);
    const [fil, setFil] = useState([]);
    const [Search, setSearch] = useState("");
    const [paniersl, setPaniersl] = useState(() => {
        // Load paniersl data from localStorage when component mounts
        const saved = localStorage.getItem("paniersl");
        return saved ? JSON.parse(saved) : [];
    });
    const [showCart, setShowCart] = useState(false);

    function ko(s) {
        setSearch(s);
        setPaniersl(paniersl.filter(r => r.ID === s));
    }

    useEffect(() => {
        const filtrage = () => {
            setFil(Dates.filter((date) => date.Name.toLowerCase().includes(Search.toLowerCase())));
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
                    setFil(data.dates);
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
        console.log(Dates);
    }, [Dates]);

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
            const userInput = prompt(`الاسم: ${find.Name}\nالوزن بلكيلوغرام:`);
            if (userInput) {
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
            }
        }
    }

    const totalPrice = paniersl.reduce((total, item) => total + (item.Price * item.weight), 0);

    const removeFromCart = (id) => {
        setPaniersl(paniersl.filter(item => item.ID !== id));
    };

    const updateWeight = (id) => {
        const updatedWeight = prompt("أدخل الوزن الجديد بالكيلوغرام:");
        const weight = parseFloat(updatedWeight);
        if (!isNaN(weight)) {
            setPaniersl(paniersl.map((item) =>
                item.ID === id ? { ...item, weight } : item
            ));
        } else {
            alert("يرجى إدخال وزن صحيح.");
        }
    };

    // Save paniersl to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("paniersl", JSON.stringify(paniersl));
    }, [paniersl]);

    return (
        <div className="pt-16 w-full h-full bg-[#F7EFE6] scroll-smooth transition-all duration-300">

            <div className="flex justify-center items-center my-8">
                <input
                    type="text"
                    placeholder="...بحث"
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-end bg-[#F7EFE6] pl-10 pr-4 py-2 w-auto sm:w-[400px] rounded-lg shadow-lg outline-none font-[Almarai] font-bold focus:ring-2 focus:ring-[#4B2D1F] focus:border-[#4B2D1F] transition-all duration-300"
                />
            </div>


            <div
                className="z-10 fixed top-[45%] -right-16 bg-red-500 px-2 rounded-l-full cursor-pointer shadow-lg transition-all duration-300"
                onClick={() => setShowCart(!showCart)}
            >
                <i className="fa fa-shopping-cart text-white py-4 px-2 mr-3"></i>
                Panier
            </div>


            {fil.length > 0 ? (
                <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-[40px]">
                    {fil.map((date, index) => (
                        <div key={date.ID}>
                            <CardDate AddPanier={AddPanier} pn={pn} date={date} />
                        </div>
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
                    </div>
                </div>
            )}

        </div>
    );
}
