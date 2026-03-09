import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Button, Modal } from "flowbite-react";
import { CiShoppingCart } from "react-icons/ci";
import of2 from "./of2.png";
import bigsale1 from "./bigsale1.png";
import bglun from "./bglun.png";
import { VscSend } from "react-icons/vsc";
import axios from "axios";

export default function OrderModal() {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    quantity: "",
    address: "",
  });
  const [formError, setFormError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Kiểm tra để trống
    if (
      !formData.fullName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.quantity.toString().trim() ||
      !formData.address.trim()
    ) {
      setFormError(true);
      return;
    }

    // 2. Kiểm tra định dạng SĐT
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setFormError(true);
      enqueueSnackbar("Số điện thoại không hợp lệ (phải có 10 chữ số)!", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      return;
    }

    setFormError(false);
    setLoading(true);

    // 3. Đóng gói dữ liệu chuẩn x-www-form-urlencoded (Fix lỗi undefined)
    const params = new URLSearchParams();
    params.append("name", formData.fullName);
    params.append("phone", formData.phoneNumber);
    params.append("address", formData.address);
    params.append("quantity", formData.quantity);

    try {
      await axios({
        method: "post",
        // ĐẢM BẢO ĐÂY LÀ LINK WEB APP MỚI NHẤT SAU KHI BẠN ĐÃ UPDATE CHAT_ID
        url: "https://script.google.com/macros/s/AKfycbz0ic_s8YqbGFOksrkiKVEOoBvz2zqwykEQP-_1FBwX505Qopb4IzEE0UVpHEJ-1IY9/exec",
        data: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // 4. Xử lý sau khi gửi thành công
      enqueueSnackbar("Đặt hàng thành công! Thông báo đã được gửi đi.", {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });

      setFormData({
        fullName: "",
        phoneNumber: "",
        quantity: "",
        address: "",
      });
      setOpenModal(false);
    } catch (error) {
      console.error("Lỗi gửi đơn hàng:", error);
      enqueueSnackbar("Có lỗi xảy ra, vui lòng thử lại sau!", {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="w-full sm:w-auto border border-[#E02635] bg-[#E02635] text-white hover:bg-[#c01e2d] shadow-lg animate-fade-in-up overflow-hidden"
      >
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <CiShoppingCart
            size={18}
            className="sm:w-5 sm:h-5 animate-bounce-slow flex-shrink-0"
          />
          <p className="text-xs sm:text-sm md:text-base whitespace-nowrap font-bold">
            Đặt hàng ngay
          </p>
        </div>
      </Button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="7xl"
        className="min-h-[80vh]"
      >
        <Modal.Header className="border-0"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="grid lg:grid-cols-2 w-full min-h-[70vh]">
            <div
              className="bg-cover bg-center bg-no-repeat min-h-96 relative lg:min-h-[70vh] animate-fade-in-left"
              style={{ backgroundImage: `url(${bglun})` }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
                <div className="w-full flex flex-col items-center justify-center gap-3 animate-scale-in">
                  <img
                    src={bigsale1}
                    alt="bigsale1"
                    className="object-contain max-w-xs animate-bounce-slow"
                  />
                  <div className="w-full max-w-md flex flex-row items-center justify-around gap-2">
                    <div className="border-4 border-[#E1AE25] bg-[#08A950] w-full h-12 flex flex-row items-center justify-center rounded-bl-3xl rounded-tr-3xl shadow-lg">
                      <p className="text-white text-sm font-bold">
                        Dầu quả bơ ép lạnh
                      </p>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-1">
                      <p className="text-[#01A848] font-normal text-sm">
                        Giảm chỉ còn
                      </p>
                      <p className="text-[#CC2330] font-bold text-2xl animate-pulse-slow">
                        250.000đ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Input */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-full max-w-md animate-fade-in-up">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Họ và tên"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] outline-none text-black"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] outline-none text-black"
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Số lượng"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] outline-none text-black"
                  />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ nhận hàng"
                    className="border-2 border-gray-300 p-3 rounded-lg focus:border-[#01A848] focus:ring-2 focus:ring-[#01A848] outline-none text-black"
                  />

                  {formError && (
                    <p className="text-red-500 text-sm font-bold text-center animate-shake">
                      Vui lòng điền đầy đủ và đúng thông tin!
                    </p>
                  )}

                  <div className="flex gap-4 items-center justify-center">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-[#225400] hover:bg-[#1a4000] text-white px-6 py-3 rounded-lg shadow-lg w-full transition-all"
                    >
                      <div className="w-full flex items-center justify-center gap-3">
                        <VscSend className={loading ? "animate-spin" : ""} />
                        <p className="font-bold">
                          {loading ? "ĐANG GỬI..." : "GỬI THÔNG TIN ĐẶT HÀNG"}
                        </p>
                      </div>
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full bg-[#01A848] flex items-center justify-center p-6 animate-fade-in-right">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={of2}
                  alt="of2"
                  className="rounded-xl w-full h-auto object-contain max-w-md animate-float"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </>
  );
}