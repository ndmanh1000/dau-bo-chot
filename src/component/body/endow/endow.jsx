import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

// Import assets (Giữ nguyên các file ảnh của bạn)
import endow1 from "./endow1.png";
import keyavado2 from "./keyavado2.png";
import bigsale from "./bigsale.png";
import bgendow from "./bgendow.png";
import bo3 from "./bo3.png";

import {
  MdPerson,
  MdPhone,
  MdLocationOn,
  MdShoppingCart,
} from "react-icons/md";
import { Button } from "flowbite-react";

export default function Endow() {
  const { enqueueSnackbar } = useSnackbar();

  // --- Logic đếm ngược ---
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // --- Logic Form ---
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    quantity: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation nhanh khi nhập
    if (name === "phone") {
      const isValidPhone = /^[0-9]{10}$/.test(value);
      setErrors((prev) => ({ ...prev, phone: !isValidPhone }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: value.trim() === "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      phone: !/^[0-9]{10}$/.test(formData.phone),
      address: formData.address.trim() === "",
      quantity: formData.quantity.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    setLoading(true);

    // Chuẩn hóa dữ liệu gửi đi
    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("phone", formData.phone);
    params.append("address", formData.address);
    params.append("quantity", formData.quantity);

    axios({
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbz0ic_s8YqbGFOksrkiKVEOoBvz2zqwykEQP-_1FBwX505Qopb4IzEE0UVpHEJ-1IY9/exec",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (response) {
        setLoading(false);
        setFormData({ name: "", phone: "", address: "", quantity: "" });
        
        enqueueSnackbar("Gửi yêu cầu thành công!", {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
      })
      .catch(function (error) {
        console.error("Submit error:", error);
        setLoading(false);
        enqueueSnackbar("Có lỗi xảy ra. Vui lòng thử lại sau.", {
          variant: "error",
          anchorOrigin: { vertical: "top", horizontal: "center" },
        });
      });
  };

  return (
    <div
      id="endow"
      className="bg-cover bg-center bg-no-repeat min-h-96 relative w-full py-8 md:py-12 lg:py-16"
      style={{ backgroundImage: `url(${bgendow})` }}
    >
      <div className="w-full absolute top-0 opacity-55 animate-rotate-slow">
        <img src={bo3} alt="bo3" />
      </div>

      <div className="container-custom w-full grid lg:grid-cols-2 gap-6 relative z-10">
        <div className="w-full animate-fade-in-left">
          <div className="w-full flex flex-col mt-16 gap-4 p-5 items-center justify-center">
            {/* Tiêu đề sản phẩm */}
            <div className="w-full flex items-center justify-center animate-scale-in">
              <div className="w-full">
                <img src={keyavado2} alt="keyavado2" className="hover-scale" />
              </div>
              <div className="w-full items-center flex flex-col justify-center gap-1">
                <p className="text-black font-normal">Dầu quả bơ ép lạnh</p>
                <p className="text-[#E02635] font-medium">100% không tinh luyện</p>
              </div>
            </div>

            {/* Banner Giá */}
            <div className="w-auto h-auto border-2 border-white bg-white shadow-md rounded-full hover-lift animate-fade-in-up">
              <div className="flex flex-row items-center justify-center gap-3 p-3 w-full">
                <div className="w-full h-auto bg-[#255703] rounded-full flex items-center justify-center p-2">
                  <p className="text-sm text-white">
                    <span className="line-through">315.000VNĐ</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold">Giảm giá chỉ còn 250.000VNĐ/chai</p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="w-auto animate-fade-in-up">
              <div className="w-full border border-[#08A950] bg-[#08A950] rounded-tl-md rounded-tr-md flex items-center justify-center p-4 shadow-lg">
                <p className="text-white font-medium">Chương trình ưu đãi sẽ kết thúc sau</p>
              </div>
              <div className="w-full bg-white p-4 rounded-b-md shadow-lg">
                <div className="flex flex-row items-center justify-around">
                  <TimeUnit value={timeLeft.days} label="Ngày" />
                  <TimeUnit value={timeLeft.hours} label="Giờ" />
                  <TimeUnit value={timeLeft.minutes} label="Phút" />
                  <TimeUnit value={timeLeft.seconds} label="Giây" />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center animate-float">
              <img src={endow1} alt="endow1" className="w-64 h-64 object-contain hover-scale" />
            </div>
          </div>
        </div>

        {/* Cột Form Đăng Ký */}
        <div className="w-full p-6 animate-fade-in-right">
          <div className="w-full flex items-center justify-center">
            <img src={bigsale} alt="bigsale" className="object-contain" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-auto mx-auto p-7 bg-[#01A848] rounded-md shadow-xl hover-lift transition-smooth"
          >
            <div className="w-full items-center justify-center text-center text-white">
              <p className="font-bold">CHƯƠNG TRÌNH ƯU ĐÃI CÓ HẠN</p>
              <p>Vui lòng để lại thông tin</p>
            </div>

            {/* Họ và tên */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdPerson size={24} className="text-gray-500" />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className={`w-full p-3 pl-10 border-2 ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#225400] outline-none transition-all`}
              />
              {errors.name && <p className="text-red-200 text-xs mt-1 font-bold">Vui lòng nhập họ tên</p>}
            </div>

            {/* Số điện thoại */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdPhone size={24} className="text-gray-500" />
              </span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại (10 số)"
                className={`w-full p-3 pl-10 border-2 ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#225400] outline-none transition-all`}
              />
              {errors.phone && <p className="text-red-200 text-xs mt-1 font-bold">SĐT không hợp lệ</p>}
            </div>

            {/* Địa chỉ */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdLocationOn size={24} className="text-gray-500" />
              </span>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Địa chỉ giao hàng"
                className={`w-full p-3 pl-10 border-2 ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#225400] outline-none transition-all`}
              />
              {errors.address && <p className="text-red-200 text-xs mt-1 font-bold">Vui lòng nhập địa chỉ</p>}
            </div>

            {/* Số lượng */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <MdShoppingCart size={24} className="text-gray-500" />
              </span>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Số lượng muốn mua"
                className={`w-full p-3 pl-10 border-2 ${errors.quantity ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-[#225400] outline-none transition-all`}
              />
              {errors.quantity && <p className="text-red-200 text-xs mt-1 font-bold">Vui lòng nhập số lượng</p>}
            </div>

            <div className="w-full flex items-center justify-center">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#225400] hover:bg-[#1a4000] text-white px-6 py-3 rounded-lg shadow-lg w-full font-bold"
              >
                {loading ? "Đang xử lý..." : "ĐĂNG KÝ NGAY"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#CC2330]">{value || 0}</p>
    <p className="text-sm">{label}</p>
  </div>
);