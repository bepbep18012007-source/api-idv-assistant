const MODEL = "@cf/moondream/moondream3.1-9B-A2B";
const MAX_IMAGE_CHARS = 2_500_000;

export async function onRequestPost({ request, env }) {
  if (!env.AI) return Response.json({ error: "Chưa gắn Workers AI binding tên AI." }, { status: 503 });
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 }); }
  if (typeof body.image !== "string" || !body.image.startsWith("data:image/")) {
    return Response.json({ error: "Thiếu ảnh màn hình hợp lệ." }, { status: 400 });
  }
  if (body.image.length > MAX_IMAGE_CHARS) return Response.json({ error: "Ảnh quá lớn. Hãy giảm độ phân giải hoặc chất lượng ảnh." }, { status: 413 });

  const mode = body.mode === "hunter" ? "Hunter" : "Survivor";
  const context = String(body.matchContext || "").slice(0, 1200);
  const notes = String(body.manualNotes || "").slice(0, 1200);
  const map = String(body.map || "chưa xác định").slice(0, 100);
  const player = String(body.player || "chưa xác định").slice(0, 100);
  const opponent = String(body.opponent || "chưa xác định").slice(0, 100);
  const previous = String(body.previousAdvice || "").slice(0, 700);

  const prompt = `Bạn là Api, trợ lý quan sát trận Identity V. Chế độ: ${mode}.
Map: ${map}. Nhân vật người chơi: ${player}. Đối phương: ${opponent}.
Thông tin người chơi xác nhận: ${context || "không có"}.
Ghi chú thủ công: ${notes || "không có"}.
Chỉ dẫn trước đó: ${previous || "chưa có"}.

Hãy xem ảnh game và trả lời bằng tiếng Việt, ngắn gọn, theo cấu trúc:
1) NHÌN THẤY: chỉ mô tả các yếu tố thực sự nhìn rõ trên ảnh; nếu không rõ ghi "không xác định".
2) HÀNH ĐỘNG NGAY: tối đa 2 hành động an toàn, có điều kiện; nếu ảnh không đủ thông tin thì yêu cầu người chơi xác nhận.
3) LÝ DO: căn cứ cụ thể từ ảnh hoặc ghi chú.
4) ĐỘ TIN CẬY: thấp/vừa/cao và vì sao.
5) CẦN XÁC NHẬN: thông tin quan trọng chưa đọc rõ.

Quy tắc bắt buộc:
- Không bịa tên nhân vật, vị trí map, tiến độ cipher, cooldown, hướng di chuyển, trạng thái ghế, vị trí đồng đội/hunter nếu ảnh không hiển thị rõ.
- Không tuyên bố biết vị trí ẩn hoặc thông tin ngoài màn hình.
- Không khẳng định một kỹ năng sắp hồi nếu không có đồng hồ/trạng thái nhìn thấy và dữ liệu được xác minh.
- Phân biệt quan sát trực tiếp, suy luận và giả thuyết.
- Với Survivor: ưu tiên an toàn, kite, giải mã, cứu ghế, cổng thoát theo dữ kiện nhìn thấy.
- Với Hunter: ưu tiên mục tiêu, áp lực cipher, truy đuổi và kiểm soát khu vực theo dữ kiện nhìn thấy.
- Không tự ý áp dụng chiến thuật đặc thù map/nhân vật khi chưa xác định được phiên bản và dữ liệu Knowledge System.
- Đây là trợ lý quyết định, không điều khiển game.`;

  try {
    const result = await env.AI.run(MODEL, {
      task: "query",
      image: body.image,
      question: prompt,
      reasoning: true,
      max_tokens: 420
    });
    const analysis = typeof result === "string" ? result :
      (result?.answer || result?.response || result?.text || JSON.stringify(result));
    return Response.json({ analysis, model: MODEL, timestamp: new Date().toISOString(), mode });
  } catch (err) {
    const message = String(err?.message || err);
    const quota = /limit|quota|neurons|billing|429|capacity|403/i.test(message);
    return Response.json({
      error: quota ? "AI cloud có thể đã chạm giới hạn miễn phí hoặc đang quá tải. Api không tự nâng cấp hay phát sinh phí. Hãy chờ hạn mức được làm mới rồi thử lại." : "AI cloud gặp lỗi: " + message.slice(0, 240)
    }, { status: quota ? 429 : 502 });
  }
}
