import React, { useState } from "react";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost/my-app/public/PHP/process_payment.php",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setMessage(`Paiement réussi ! Transaction ID : ${result.transaction_id}`);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
      صفحة الدفع
    </h1>

    {message && (
      <div
        className={`text-center text-sm p-2 mb-4 rounded ${
          message.startsWith("Paiement réussi")
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {message}
      </div>
    )}

    <form onSubmit={handleSubmit} className="text-end">
      <div className="mb-4">
        <label htmlFor="name" className="block  text-gray-700 font-medium">
          الاسم الكامل
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full font-[Almarai] p-2 border text-end border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="أدخل اسمك الكامل"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full font-[Almarai] p-2 border text-end border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="أدخل بريدك الإلكتروني"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-gray-700 font-medium"
        >
          رقم البطاقة
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full font-[Almarai] p-2 text-end border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>

      <div className="mb-4 flex gap-4">
        <div className="w-1/2">
          <label
            htmlFor="expiryDate"
            className="block text-gray-700 font-medium"
          >
            انتهاء الصلاحية (شهر/سنة)
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full font-[Almarai] text-end p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="شهر/سنة"
            required
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="cvv" className="block text-gray-700 font-medium">
            الرمز السري (CVV)
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full font-[Almarai] text-end p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="123"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#3a8e3a] rounded border-[2px] border-[#f7efe6]  hover:border-[#3a8e3a]  transition duration-[0.6s] ease-in-out text-white mb-5 w-full py-3 rounded-lg font-bold font-[Almarai]  "
        disabled={loading}
      >
        {loading ? "جارٍ المعالجة..." : "الدفع"}
      </button>
      <button
        onClick={() => window.history.back()}
        className="bg-[#8B4513] text-white mb-5 w-full py-3 rounded-lg font-bold font-[Almarai] hover:bg-[#A0522D]  "
        disabled={loading}
      >
        عودة
      </button>
    </form>
  </div>
</div>
  );
};

export default PaymentPage;
