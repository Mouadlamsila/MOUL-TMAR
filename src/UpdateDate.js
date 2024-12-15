import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UpdateDate() {
    const { ID } = useParams();

    const [DateSelection, setDateSelection] = useState({
        Name: "",
        Origin: "",
        Type: "",
        Description: "",
        NutritionalInfo: "",
        Price: "",
        ImagePath: "",
    });
    const [mess, setMess] = useState("");
    const [img , setimg] = useState(false)
   
    const [refraiche , setrefraiche] = useState(false)


    useEffect(() => {
        axios
            .post("http://localhost/my-app/public/PHP/update.php", { idUp: parseInt(ID) })
            .then((res) => {
                if (res.data.status === "success") {
                    setDateSelection(res.data.dates);
                    
                } else {
                    setMess(res.data.message);
                }
            })
            

    }, [ID , refraiche]);

    function Update() {
        const formData = new FormData();
    
        // Ajouter les données textuelles au formulaire
        formData.append("Name", DateSelection.Name);
        formData.append("Origin", DateSelection.Origin);
        formData.append("Type", DateSelection.Type);
        formData.append("Description", DateSelection.Description);
        formData.append("NutritionalInfo", DateSelection.NutritionalInfo);
        formData.append("Price", DateSelection.Price);
        formData.append("idUp", parseInt(ID)); // L'ID de l'élément à mettre à jour
    
        // Vérifier si une nouvelle image est sélectionnée
        const fileInput = document.getElementById("file-upload");
        if (fileInput && fileInput.files.length > 0) {
            formData.append("Image", fileInput.files[0]); // Ajouter l'image sélectionnée
        } else {
            console.warn("لم يتم إختيار أي صورة!");
        }
    
        // Effectuer la requête POST
        axios
            .post("http://localhost/project/api/public/PHP/update_Dates.php", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Nécessaire pour envoyer des fichiers
                },
            })
            .then((res) => {
                setMess(res.data.message); // Message de succès ou d'erreur du serveur
            })
            .catch((error) => {
                console.error("حدت خطأ اثناء التحديت" , error);
                setMess("حدت خطأ اثناء التحديت"); // Gestion des erreurs côté client
            });

        setrefraiche(!refraiche)
            
    }
    

    return (
        <div className={`flex w-full h-screen items-center  justify-center bg-gray-200 text-black  ${img ?  "mt-20 sm:mt-20" :  " mt-20  sm:mt-20" }  b-0`}>
            <div className="flex h-screen sm:h-auto flex-col sm:w-1/2  w-full  bg-white   p-4 rounded-md shadow-md">
                <div>{mess && <p className="text-center mb-2 text-red-500 sm:mb-4">{mess}</p>}</div>
                <input
                    type="text"
                    value={DateSelection.Name}
                    onChange={(e) =>
                        setDateSelection({ ...DateSelection, Name: e.target.value })
                    }
                    className="mb-3 p-2 border rounded text-end "
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={DateSelection.Origin}
                    onChange={(e) =>
                        setDateSelection({ ...DateSelection, Origin: e.target.value })
                    }
                    className="mb-3 text-end p-2 border rounded"
                    placeholder="Origin"
                />
                <input
                    type="text"
                    value={DateSelection.Type}
                    onChange={(e) =>
                        setDateSelection({ ...DateSelection, Type: e.target.value })
                    }
                    className="mb-3 p-2 border rounded text-end"
                    placeholder="Type"
                />
                <input
                    type="text"
                    value={DateSelection.Description}
                    onChange={(e) =>
                        setDateSelection({ ...DateSelection, Description: e.target.value })
                    }
                    className="mb-3 p-2 border text-end rounded"
                    placeholder="Description"
                />
                <input
                    type="text"
                    value={DateSelection.NutritionalInfo}
                    onChange={(e) =>
                        setDateSelection({
                            ...DateSelection,
                            NutritionalInfo: e.target.value,
                        })
                    }
                    className="mb-3 text-end p-2 border rounded"
                    placeholder="Nutritional Info"
                />
                <input
                    type="number"
                    value={DateSelection.Price}
                    onChange={(e) =>
                        setDateSelection({ ...DateSelection, Price: e.target.value })
                    }
                    className="mb-3 text-end p-2 border rounded"
                    placeholder="Price"
                />

                    <div className={`w-full  mb-2 flex items-center justify-center`}>
                        <img
                            src={`/PHP/${DateSelection.ImagePath}`}
                            className="w-[50%] h-40 object-contain"
                            alt="Preview"
                            onClick={()=>setimg(!img)}
                        />
                        
                    </div>

                    {img ? <div className="flex items-center  justify-center">
                        
    <label
        htmlFor="file-upload"
        className="w-[50%] bg-[#A0522D] mb-2 text-white py-3  text-center font-bold font-[Almarai] rounded-lg hover:bg-[#8B4513] transition duration-300"
    >
        إختر صورة
    </label>
    <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => console.log(e.target.value)} 
    />
</div>
:""}
                
                <button
                    onClick={Update}
                    className="w-full mb-2 bg-[#3a8e3a]  text-white py-3 font-bold font-[Almarai] rounded-lg hover:bg-[#6BBF59] transition duration-300"
                >
                    تعديل
                </button>
                <Link to="/Table"><button
                    className="w-full bg-[#3a8e3a]  text-white py-3 font-bold font-[Almarai] rounded-lg hover:bg-[#6BBF59] transition duration-300"
                >
                    عودة
                </button></Link>
            </div>
        </div>
    );
}
