/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Layout = () => {

  return (
    <div className="">
      <marquee direction="" className="text-red-600 font-[700] text-[16px]">
        Muhim yangilik! Xizmatimizdan mamnun bo’lsangiz do’stlaringizga tavsiya
        eting. Har qanday tarifdagi mijozimiz tavsiyasi orqali kelgan yangi
        mijoz uchun tavsiya etgan shaxsga o’z tarifidagi 1 oylik to’lovning 20%i
        miqdorida bir martalik chegirma beriladi.
      </marquee>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
