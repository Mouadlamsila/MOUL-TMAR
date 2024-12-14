import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableDates() {
  const [Data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [refresh, setRefresh] = useState(false); 

  useEffect(() => {
    axios
      .get("http://localhost/project/api/public/PHP/Select.php")
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
      .post("http://localhost/project/api/public/PHP/delet.php", { id: ID })
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
  function Update(ID){
    axios.post("http://localhost/project/api/public/PHP/delet.php" , {idUp : ID})
    .then((res)=>{
        if (res.data.status === "success") {
            alert(res.data.message);
            setRefresh((e) => !e);
          } else {
            setMsg(res.data.message);
          }
    })
  }

  return (
    <div className="flex w-full mt-20 h-screen items-center justify-center bg-[#4b2d1f]">
      {msg && <p className="text-red-500 mb-4">{msg}</p>}


      <div className="overflow-x-auto sm:w-3/4 w-[90%] rounded-lg shadow-lg">
        <table className="bg-[#a67c52] w-full text-center text-white rounded-lg overflow-hidden">
      
          <thead>
            <tr className="bg-[#5c3b28] text-sm sm:text-lg">
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
                <tr
                  key={e.ID}
                  className="hover:bg-[#8e5f3d] transition-all duration-200 font-[Almarai]"
                >
                  <td className="p-3 sm:p-5 border-b border-[#7e5438] space-x-2 sm:space-x-4 font-[Almarai] font-bold">
                    <Link to={`/UpdateDate/${e.ID}`}><button
                      className="bg-[#4b2d1f] hover:bg-[#613a27] text-white py-1 sm:py-2 px-3 sm:px-4 rounded"
                      onClick={()=> Update(e.ID) }
                    >
                      تعديل
                    </button></Link>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white py-1 sm:py-2 px-3 sm:px-4 rounded"
                      onClick={() => Delete(e.ID)}
                    >
                      حذف
                    </button>
                  </td>
                  <td className="p-3 sm:p-5 border-b border-[#7e5438]">{e.Price} DH</td>
                  <td className="p-3 sm:p-5 border-b border-[#7e5438] font-[Almarai] font-bold">
                    {e.Origin}
                  </td>
                  <td className="p-3 sm:p-5 border-b border-[#7e5438] font-[Almarai] font-bold">
                    {e.Name}
                  </td>
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
  );
}
