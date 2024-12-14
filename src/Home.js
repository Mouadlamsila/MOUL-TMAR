import React, { useEffect, useState } from "react";
import CardDate from "./CardDate";
import { useNavigate } from "react-router-dom";



export default function Home() {
    const [Message, setMessage] = useState('');
    const [Dates, setDates] = useState([]);
    const [fil, setFil] = useState([]);
    const [Search, setSearch] = useState("");
    const navigate = useNavigate();

    

    useEffect(() => {
        const filtrage = () => {
            setFil(Dates.filter((date) => date.Name.toLowerCase().includes(Search.toLowerCase())))
        }
        filtrage();
    }, [Search])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost/project/api/public/PHP/Select.php");
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

    // ajouter panier

    const [panier, setPanier] = useState([]);

    function AddPanier(id) {
        const find = Dates.find((date) => date.ID === id);
        if (find && !panier.some((e) => e.ID === id)) {
            setPanier([...panier, find]);
            navigate('/Panier')
        }
    }

    return (
        <div className="pt-16 w-full h-[100%] bg-[#F7EFE6] scroll-smooth">

            {/* {panier.map((p) => <img src={`/PHP/${p.ImagePath}`} />)} */}
            <div className="flex justify-center items-center my-8">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="...بحث"
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-end bg-[#F7EFE6] pl-10 pr-4 py-2 w-auto sm:w-[400px]  rounded-lg shadow-md outline-none font-[Almarai] font-bold focus:ring-2 focus:ring-[#4B2D1F] focus:border-[#4B2D1F]"
                />
            </div>





            {fil.length > 0 ?
                <div className="  px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   justify-center gap-[40px] ">
                 {fil.map((date, index) =>
                    <div >
                        <CardDate key={index} AddPanier={AddPanier} date={date} />
                    </div>


                    )}</div>
                : <p className="w-full text-center bg-[#F7EFE6] sm:text-[30px] font-bold font-[Almarai]">{Message ? Message : "هذا التمر غير متوفر"}</p>

            }



        </div>

    )
}