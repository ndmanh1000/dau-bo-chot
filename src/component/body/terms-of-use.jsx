import React from "react";

export default function TermsOfUse() {
  return (
    <section
      id="terms-of-use"
      className="bg-white w-full py-10 md:py-14 lg:py-16 mt-14"
    >
      <div className="container-custom max-w-4xl mx-auto animate-fade-in-up">
        <div className="text-center mb-8">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#709456] uppercase mb-2">
            Điều khoản sử dụng
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#296003]">
            Điều khoản sử dụng dịch vụ Keyavo
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Khi truy cập và đặt mua sản phẩm dầu quả bơ ép lạnh Keyavo, bạn đồng
            ý tuân thủ các điều khoản dưới đây. Vui lòng đọc kỹ để đảm bảo quyền
            lợi của bạn.
          </p>
        </div>

        <div className="space-y-6 text-sm md:text-base text-gray-700">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              1. Phạm vi áp dụng
            </h3>
            <p>
              Điều khoản này áp dụng cho tất cả khách hàng truy cập website, tìm
              hiểu thông tin sản phẩm và thực hiện đặt hàng dầu quả bơ ép lạnh
              Keyavo thông qua các kênh chính thức của chúng tôi.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              2. Thông tin sản phẩm và giá
            </h3>
            <p className="mb-2">
              Chúng tôi luôn cố gắng cung cấp thông tin sản phẩm chính xác, rõ
              ràng về thành phần, công dụng, hướng dẫn sử dụng và giá bán.
            </p>
            <p>
              Giá bán có thể được điều chỉnh theo từng chương trình khuyến mại
              và sẽ được hiển thị công khai trên trang bán hàng tại thời điểm
              bạn đặt mua.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              3. Đặt hàng và xác nhận
            </h3>
            <p className="mb-2">
              Đơn hàng của bạn chỉ được xác nhận khi đội ngũ tư vấn của Keyavo
              liên hệ lại để xác nhận thông tin (họ tên, số điện thoại, địa
              chỉ, số lượng đặt mua).
            </p>
            <p>
              Keyavo có quyền từ chối hoặc hủy đơn trong các trường hợp thông
              tin không chính xác, nghi ngờ gian lận hoặc không thể giao hàng
              theo điều kiện thực tế.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              4. Vận chuyển và giao nhận
            </h3>
            <p className="mb-2">
              Thời gian giao hàng dự kiến sẽ được thông báo tùy theo khu vực
              nhận hàng. Trong một số trường hợp bất khả kháng (thiên tai, dịch
              bệnh, giao thông…), thời gian giao có thể chậm hơn nhưng chúng
              tôi sẽ luôn thông báo trước cho bạn.
            </p>
            <p>
              Khi nhận hàng, bạn vui lòng kiểm tra tình trạng sản phẩm. Nếu phát
              hiện lỗi hư hỏng, đổ vỡ hoặc nhầm lẫn, hãy liên hệ ngay với bộ
              phận chăm sóc khách hàng để được hỗ trợ.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              5. Đổi trả và hoàn tiền
            </h3>
            <p className="mb-2">
              Keyavo hỗ trợ đổi trả trong các trường hợp sản phẩm lỗi do nhà
              sản xuất, hư hỏng trong quá trình vận chuyển hoặc giao nhầm.
            </p>
            <p>
              Chính sách chi tiết về điều kiện, thời gian và quy trình đổi trả
              sẽ được tư vấn rõ ràng khi bạn liên hệ với chúng tôi thông qua
              hotline hoặc fanpage chính thức.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover-lift transition-smooth">
            <h3 className="text-base md:text-lg font-semibold text-[#296003] mb-2">
              6. Quyền thay đổi điều khoản
            </h3>
            <p>
              Chúng tôi có thể cập nhật, điều chỉnh điều khoản sử dụng theo từng
              thời điểm để phù hợp với quy định pháp luật và chính sách kinh
              doanh. Các thay đổi sẽ được công bố trên trang web, bạn vui lòng
              theo dõi thường xuyên.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

