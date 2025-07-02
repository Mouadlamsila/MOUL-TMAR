import axios from "axios";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function TableDates() {
  const [Data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [refresh, setRefresh] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost/my-app/public/PHP/select.php")
      .then((res) => {
        if (res.data.status === "success") {
          setData(res.data.dates);
          setMsg("");
        } else {
          setMsg("Erreur de connection");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMsg("Erreur de connection");
      });
  }, [refresh]);


  function Delete(ID) {
    axios
      .post("http://localhost/my-app/public/PHP/delet.php", { id: ID })
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.message);
          setRefresh((e) => !e);
        } else {
          setMsg(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        alert("Something went wrong. Please try again.");
      });
  }
  function Update(ID) {
    axios.post("http://localhost/my-app/public/PHP/delet.php", { idUp: ID })
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.message);
          setRefresh((e) => !e);
        } else {
          setMsg(res.data.message);
        }
      })
  }

  

  return (
    <div className="flex flex-col mt-[4em] sm:mt-[5em] items-center justify-center min-h-screen bg-[#4b2d1f]">
 

  {/* Space Between Header and Table */}
  <div className="mt-8 w-full flex items-center justify-center">
    <div className="overflow-x-auto sm:w-3/4 w-[90%] rounded-lg shadow-lg bg-[#a67c52]">
      <table className="w-full text-center text-white rounded-lg">
        <thead className="bg-[#5c3b28] text-sm sm:text-lg">
          <tr>
            <th className="p-3 sm:p-5">تحكم</th>
            <th className="p-3 sm:p-5">الثمن</th>
            <th className="p-3 sm:p-5">الدولة</th>
            <th className="p-3 sm:p-5">الإسم</th>
            <th className="p-3 sm:p-5">#</th>
          </tr>
        </thead>

        <tbody>
          {Data.length > 0 ? (
            Data.map((e) => (
              <tr key={e.ID} className="hover:bg-[#8e5f3d] transition-all duration-200">
                <td className="p-3 sm:p-5 border-b border-[#7e5438]">
                  <Link to={`/UpdateDate/${e.ID}`}>
                    <button
                      className="bg-[#4b2d1f] hover:bg-[#613a27] text-white py-1 px-3 rounded"
                      onClick={() => Update(e.ID)}
                    >
                      تعديل
                    </button>
                  </Link>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded ml-2"
                    onClick={() => Delete(e.ID)}
                  >
                    حذف
                  </button>
                </td>
                <td className="p-3 sm:p-5 border-b border-[#7e5438]">{e.Price} DH</td>
                <td className="p-3 sm:p-5 border-b border-[#7e5438]">{e.Origin}</td>
                <td className="p-3 sm:p-5 border-b border-[#7e5438]">{e.Name}</td>
                <td className="p-3 sm:p-5 border-b border-[#7e5438]">{e.ID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-5 text-lg">
                لا توجد بيانات
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>



  );
}
