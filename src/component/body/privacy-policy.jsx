import React from "react";

export default function PrivacyPolicy() {
  return (
    <section
      id="privacy-policy"
      className="bg-[#F7FBF6] w-full py-10 md:py-14 lg:py-16 mt-14"
    >
      <div className="container-custom max-w-4xl mx-auto animate-fade-in-up">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#709456] uppercase mb-2">
            Chính sách bảo mật
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#296003]">
            Chính sách bảo mật thông tin khách hàng
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Keyavo luôn tôn trọng và cam kết bảo vệ thông tin cá nhân của khách
            hàng, chỉ sử dụng cho mục đích tư vấn và giao hàng.
          </p>
        </div>

        <div className="space-y-6 text-sm md:text-base text-gray-700">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              1. Thông tin chúng tôi thu thập
            </h3>
            <p className="mb-2">
              Khi bạn đặt mua dầu quả bơ ép lạnh Keyavo, chúng tôi có thể thu
              thập các thông tin sau:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Họ và tên</li>
              <li>Số điện thoại liên hệ</li>
              <li>Địa chỉ nhận hàng</li>
              <li>Các kênh liên hệ khác (Zalo, Facebook, Instagram… nếu có)</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              2. Mục đích sử dụng thông tin
            </h3>
            <p className="mb-2">Thông tin của bạn được sử dụng để:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Liên hệ tư vấn sản phẩm, xác nhận đơn hàng.</li>
              <li>Giao hàng đến đúng địa chỉ bạn cung cấp.</li>
              <li>
                Gửi thông tin khuyến mãi, chương trình ưu đãi (chỉ khi bạn đồng
                ý).
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              3. Cam kết bảo mật
            </h3>
            <p className="mb-2">
              Keyavo cam kết không bán, trao đổi hoặc chia sẻ thông tin cá nhân
              của bạn cho bên thứ ba vì mục đích thương mại.
            </p>
            <p>
              Thông tin chỉ có thể được cung cấp cho đơn vị vận chuyển hoặc đối
              tác liên quan khi cần thiết để hoàn tất việc giao hàng, và luôn
              tuân thủ các quy định bảo mật.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              4. Thời gian lưu trữ thông tin
            </h3>
            <p>
              Thông tin của bạn được lưu trữ trong hệ thống của chúng tôi cho
              đến khi bạn yêu cầu xóa hoặc khi không còn cần thiết cho mục đích
              chăm sóc khách hàng và hậu mãi.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              5. Quyền của khách hàng
            </h3>
            <p className="mb-2">
              Bạn có quyền yêu cầu xem, cập nhật, chỉnh sửa hoặc yêu cầu xóa
              thông tin cá nhân mà chúng tôi đang lưu trữ.
            </p>
            <p>
              Để thực hiện, bạn vui lòng liên hệ với chúng tôi qua hotline hoặc
              email hỗ trợ được ghi trong phần thông tin liên hệ.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              6. Cập nhật chính sách
            </h3>
            <p>
              Chính sách bảo mật có thể được cập nhật theo từng thời điểm để phù
              hợp với quy định pháp luật và mô hình hoạt động. Mọi thay đổi sẽ
              được công bố trên trang web chính thức của Keyavo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

