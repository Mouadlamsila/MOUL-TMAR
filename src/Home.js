import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleSupportClick = () => {
        navigate("/support");
    };

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center flex flex-col justify-between font-[Almarai]"
            style={{ backgroundImage: "url('/backgrounds/b2.jpeg')" }}
        >
            {/* Content Card */}
            <div className="flex-grow flex items-center justify-center mt-20 sm:mt-0">
                <div className="relative z-10 w-[90%] md:w-[75%] lg:w-[60%] max-w-4xl bg-white/70 border border-t-4 border-[#4b2d1f] rounded-3xl shadow-xl p-6 md:p-10 text-center">
                    <h1 className="text-[#4b2d1f] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        مـُـول الـتّــمـر
                    </h1>
                    <p className="rtl text-gray-600 text-base md:text-lg leading-relaxed font-[Almarai] font-bold">
                        مرحباً بكم في <span className="text-[#4b2d1f] font-bold">مـُـول الـتّــمـر، </span>
                        وجهتكم المثالية لشراء أفضل أنواع التمر الفاخر. نحن نقدم لكم مجموعة متنوعة من
                        التمور الطازجة والمميزة التي تم اختيارها بعناية لتلبية كافة احتياجاتكم.
                        <br /><br />
                        سواء كنتم تبحثون عن التمور الصحية للوجبات الخفيفة أو تلك التي تضيف لمسة من الفخامة
                        لمناسباتكم الخاصة، فإننا في مول التمر نقدم لكم الجودة والذوق الرفيع.
                    </p>
                    <button className="mt-6 md:mt-8 bg-[#4b2d1f] text-white text-base md:text-lg py-2 md:py-3 px-6 md:px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#5c3928] transition-all">
                        <Link to="/Produits">
                            استكشف الآن
                        </Link>
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#4b2d1f] mt-4 sm:mt-0 text-white text-center py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
                {/* Support Section */}
                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <div
                        onClick={handleSupportClick}
                        className="flex items-center justify-center bg-white text-[#4b2d1f] w-12 h-12 rounded-full shadow-md cursor-pointer hover:bg-[#5c3928] hover:text-white transition-all"
                    >
                        🛠️
                    </div>
                    <p className="text-sm mt-2">الدعم الفني</p>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col items-center text-sm md:text-base mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">📧</span>

                        <a
                            href="mailto:dev.mohamedbelkahla@gmail.com"
                            className="underline hover:text-gray-300"
                        >
                            dev.mohamedbelkahla@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-lg">📞</span>
                        <a
                            href="tel:+212695993292"
                            className="underline hover:text-gray-300"
                        >
                            +212 695-993292
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div>
                    <p className="rtl text-[13px] md:text-[15px] font-[Almarai]">
                        © 2024 مـُـول الـتّــمـر <br />جميع الحقوق محفوظة
                    </p>
                </div>
            </footer>
        </div>
    );
}
