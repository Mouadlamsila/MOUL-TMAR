import React from "react";

export default function Support() {


    return (
        <div className="w-full h-screen bg-gradient-to-b from-[#f4f4f9] to-[#ffffff] font-[Almarai]">
            <div className="flex justify-center items-center h-full">
                <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] bg-white p-12 rounded-xl shadow-lg">
                    <h2 className="text-[#4b2d1f] text-4xl font-semibold text-center mb-8">
                        الدعم الفني
                    </h2>
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">

                        {/* Replace with your Access Key  */}
                        <input type="hidden" name="access_key" value="69656b03-87ae-45ed-80a7-603e23e4a49d" />
                        {/* Name Field */}
                        <input
                            type="text"
                            name="name"
                            placeholder="الاسم الكامل"
                            className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
                            required
                        />

                        {/* Email Field */}
                        <input
                            type="email"
                            name="email"
                            placeholder="البريد الإلكتروني"
                            className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
                            required
                        />

                        {/* Problem Description Field */}
                        <textarea
                            name="problem"
                            placeholder="...أدخل وصف المشكلة هنا"
                            className="p-4 font-[Almarai] text-end border-2 border-[#ddd] rounded-lg shadow-sm w-full text-lg h-36 focus:outline-none focus:ring-2 focus:ring-[#4b2d1f] focus:border-[#4b2d1f] transition-all"
                            required
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#4b2d1f] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#5c3928] transition-all ease-in-out duration-300"
                        >
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
