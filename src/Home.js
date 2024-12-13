import axios from "axios";
import React, { useEffect, useState } from "react";
import CardDate from "./CardDate";

export default function Home() {
    const [Message, setMessage] = useState('');
    const [Dates, setDates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/my-app/public/PHP/Select.php')
            .then((res) => {
                if (res.data.status === "success") {
                    setDates(res.data.dates);
                    setMessage(res.data.message);
                } else {
                    setMessage(res.data.message);
                }
            })
            .catch((error) => {
                setMessage("There was an error fetching the data.");
                console.error("Error fetching data: ", error);
            });
    }, []);

    useEffect(() => {
        console.log(Dates);
    }, [Dates]);

    return (
        <div className="w-full h-[100%] bg-[#F7EFE6] pt-16 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-center gap-[40px] ">
            {Dates.length > 0 ? Dates.map((date, index) =>
                <div > 
                    <CardDate key={index} date={date} />
                </div>

            )
                : <p>{Message}</p>

            }

        </div>
    )
}