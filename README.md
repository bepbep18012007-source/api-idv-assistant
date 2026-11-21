# Api · Identity V Tactical Assistant v0.2

Bản cloud prototype: browser screen capture → selected JPEG frames → Cloudflare Pages Function → Workers AI vision → visual + voice guidance.

## Những gì đã có
- Hai chế độ độc lập: Survivor / Hunter.
- Chia sẻ màn hình qua trình duyệt và xem trước.
- Gửi 1 ảnh mỗi 10/15/30 giây, không truyền video liên tục.
- Vision model trả lời theo cấu trúc nhìn thấy / hành động / lý do / độ tin cậy / cần xác nhận.
- Cảnh báo trực quan và đọc tiếng Việt qua SpeechSynthesis của trình duyệt.
- Lưu thông tin trận thủ công trên trình duyệt bằng localStorage.
- Không điều khiển nhân vật, không tự động nhấn phím.

## Giới hạn quan trọng
- Đây là bản thử nghiệm vision tổng quát, chưa phải mô hình chuyên biệt được huấn luyện cho Identity V.
- Không có OCR/game HUD parser chuyên dụng, không tự đọc chính xác mọi cipher %, vị trí, nhân vật hoặc trạng thái ghế.
- Chưa có Map Atlas / Character DB gắn vào model; Knowledge System v1.0 được giữ nguyên làm chuẩn kiến trúc, không được giả lập thành dữ liệu đã xác minh.
- Bộ nhớ trận hiện nằm trong trình duyệt của bạn, chưa đồng bộ cloud.
- Mỗi lần phân tích là một yêu cầu AI. Miễn phí không đồng nghĩa không giới hạn.
- Không dùng cảnh báo của Api làm nguồn duy nhất trong tình huống nguy hiểm.

## Triển khai cloud qua GitHub + Cloudflare Pages
1. Giải nén thư mục này.
2. Tạo repository GitHub mới, ví dụ `api-idv-assistant`.
3. Upload **toàn bộ nội dung bên trong** thư mục này lên repository, giữ nguyên:
   - `public/index.html`
   - `functions/api/analyze.js`
   - `wrangler.toml`
4. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
5. Chọn repository vừa tạo.
6. Build settings:
   - Framework preset: None
   - Build command: để trống
   - Build output directory: `public`
7. Trong cấu hình Pages, kiểm tra Wrangler config được dùng và có binding Workers AI tên `AI`. Nếu dashboard yêu cầu thêm binding thủ công: Settings → Bindings → Add → Workers AI → Variable name `AI`.
8. Deploy. Mở URL `*.pages.dev` bằng Chrome/Edge.
9. Nhấn **Chia sẻ màn hình**, chọn cửa sổ game hoặc toàn màn hình. Trình duyệt yêu cầu quyền mỗi lần bắt đầu.

## Kiểm tra
- Mở URL Pages.
- Chọn Survivor hoặc Hunter.
- Nhấn Chia sẻ màn hình và chọn game.
- Chờ 10 giây hoặc nhấn Phân tích ngay.
- Nếu AI binding chưa gắn đúng, giao diện sẽ báo lỗi rõ ràng.

## Chi phí
Cloudflare Workers AI công bố hạn mức miễn phí 10.000 Neurons/ngày; khi vượt ngưỡng trên gói Free, yêu cầu AI có thể thất bại thay vì tiếp tục miễn phí. Workers Free cũng có giới hạn request/ngày. Hãy kiểm tra dashboard Usage/Billing và không bật gói trả phí nếu muốn giữ đúng cấu hình free.
