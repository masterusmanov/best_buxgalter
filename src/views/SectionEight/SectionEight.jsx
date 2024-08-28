// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import operator from "../../assets/operators/operator.png";

export default function SectionEight() {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Telegram bot API ma'lumotlari
      const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";
      const chatId = "YOUR_CHAT_ID"; // Bot bilan suhbat ID ni oling
      const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

      // Yuboriladigan xabar matni
      const message = `Yangi ariza:\n\nIsm: ${formData.name}\nTelefon: ${formData.phone}`;

      // Telegramga ma'lumotni yuborish
      axios
        .post(telegramApiUrl, {
          chat_id: chatId,
          text: message,
        })
        .then((response) => {
          console.log("Ma'lumot jo'natildi:", response.data);
        })
        .catch((error) => {
          console.error("Xatolik yuz berdi:", error);
        });
    };
  return (
    <div className="bg-[#073843] p-5 lg:p-10">
      <div className="container mx-auto">
        <div className="bg-[#B6B4B2] lg:flex gap-6 lg:p-5 rounded-2xl">
          <div className="lg:w-1/2 border-8 rounded-2xl p-5">
            <h1 className=" text-[#073843] text-[24px] lg:text-[32px] py-6 font-[700]">Savollar bormi?</h1>
            <p className="font-[600] text-[14px] md:text-[16px]"> Agar sizda buxgalteriyaga oid muammolar bo`lsa, biz bilan bog`laning!</p>
            <div className="py-2 lg:py-5">
              <form onSubmit={handleSubmit} className=" mx-auto p-5 bg-[#B6B4B2]">
                <h1 className="font-[700] lg:text-[22px]">Ma`lumotlaringizni kiriting!</h1>
                <div className="my-[15px] lg:my-[50px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg"
                    placeholder="Ismingiz! *"
                  />
                </div>
                <div className="my-[15px] lg:my-[50px]">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg"
                    placeholder="Telefon raqamingiz! *"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-[150px] float-right font-[600] bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 hidden lg:flex">
            <img src={operator} alt="" className="w-[450px] mx-auto object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}
