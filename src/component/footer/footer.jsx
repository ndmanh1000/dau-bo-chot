import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail, MdWeb } from "react-icons/md";
import {
  RiCustomerService2Fill,
  RiSecurePaymentFill,
  RiTruckFill,
} from "react-icons/ri";

export default function Footer({ onNavigate, activePage }) {
  return (
    <footer className="bg-[#296003] text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-[#01A848]/20 rounded-full blur-3xl animate-float" />

      <div className="container-custom py-10 md:py-12 lg:py-14 relative z-10">
        {/* Top border line with subtle animation */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 animate-fade-in" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {/* Brand & intro */}
          <div className="space-y-4 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-[#FCA400] animate-pulse-slow" />
              <p className="text-xs md:text-sm tracking-wide uppercase">
                Dầu quả bơ ép lạnh Keyavo
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold leading-snug">
              ndmanh1000
            </h3>
            <p className="text-sm md:text-[15px] text-white/80">
              Chúng tôi cam kết cung cấp sản phẩm nông nghiệp sạch, nguyên chất
              từ tự nhiên, vì sức khỏe và trải nghiệm tốt nhất của gia đình bạn.
            </p>
            <div className="space-y-1.5 text-sm md:text-[15px] text-white/90">
              <p className="flex items-center gap-2">
                <MdLocationOn className="text-[#FCA400]" />
                <span>Địa chỉ: Hà Nội</span>
              </p>
              <p className="flex items-center gap-2">
                <MdPhone className="text-[#FCA400]" />
                <span>Hotline: 0334 149 388</span>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-[#FCA400]" />
                <span>Email: cskh.keyavo@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MdWeb className="text-[#FCA400]" />
                <span>Website: keyavo.vn</span>
              </p>
            </div>
          </div>

          {/* Customer care */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-lg md:text-xl font-semibold">
              Chăm sóc khách hàng
            </h3>
            <ul className="space-y-2 text-sm md:text-[15px] text-white/90">
              <li className="flex items-start gap-2 hover-lift transition-smooth">
                <span className="mt-0.5">
                  <RiTruckFill className="text-[#FCA400]" />
                </span>
                <span>Chính sách vận chuyển toàn quốc, nhanh chóng và an toàn.</span>
              </li>
              <li className="flex items-start gap-2 hover-lift transition-smooth">
                <span className="mt-0.5">
                  <RiSecurePaymentFill className="text-[#FCA400]" />
                </span>
                <span>Thanh toán linh hoạt, bảo mật với nhiều hình thức tiện lợi.</span>
              </li>
              <li className="flex items-start gap-2 hover-lift transition-smooth">
                <span className="mt-0.5">
                  <RiCustomerService2Fill className="text-[#FCA400]" />
                </span>
                <span>Đội ngũ tư vấn tận tâm, đồng hành cùng bạn 24/7.</span>
              </li>
            </ul>
          </div>

          {/* Social & newsletter */}
          <div className="space-y-5 animate-fade-in-right">
            <h3 className="text-lg md:text-xl font-semibold">Kết nối với Keyavo</h3>
            <p className="text-sm md:text-[15px] text-white/80">
              Theo dõi chúng tôi để nhận ưu đãi và kiến thức chăm sóc sức khỏe từ
              thiên nhiên mỗi ngày.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-smooth"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-smooth"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-smooth"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>

            <div className="mt-2 space-y-2">
              <p className="text-sm md:text-[15px] text-white/80">
                Đăng ký để nhận tin ưu đãi:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full rounded-full px-4 py-2 text-sm text-[#296003] outline-none border border-white/40 bg-white/90 focus:border-[#FCA400] transition-smooth"
                />
                <button className="px-4 py-2 md:w-32 w-full rounded-full bg-[#FCA400] text-[#296003] text-sm font-semibold hover:bg-white hover:text-[#296003] transition-smooth">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-white/70 animate-fade-in-up">
          <p>© 2023 Keyavo. All rights reserved.</p>
          <p className="flex gap-3">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("terms")}
              className={`relative cursor-pointer after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-white/40 hover:text-white bg-transparent border-none p-0 ${
                activePage === "terms" ? "text-white" : ""
              }`}
            >
              Điều khoản sử dụng
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("privacy")}
              className={`relative cursor-pointer after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-white/40 hover:text-white bg-transparent border-none p-0 ${
                activePage === "privacy" ? "text-white" : ""
              }`}
            >
              Chính sách bảo mật
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
