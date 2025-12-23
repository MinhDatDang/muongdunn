# Streak Challenge AI — Toán 9 (Submission-ready)
**Trường PTDTBT THCS Mường Đun** · Offline/PWA · Import CSV · Báo cáo 7 ngày

## Chạy ngay
- Mở `index.html` bằng Chrome/Edge.
- Bấm **Tạo dữ liệu demo**.
  - Giáo viên: `gv01 / 123456`
  - Học sinh: `hs001 / 123456`

## Demo 7 ngày để nộp minh chứng
- Đăng nhập Giáo viên → chọn học sinh → **Tạo dữ liệu test 7 ngày**
- **Xem báo cáo** → **In/Lưu PDF**

## Cài như app (PWA)
- Chrome → Add to Home screen (hoặc bấm “Cài app” nếu có)

## Bản v4
- ✅ Giáo viên có nút **➕ Thêm HS** để thêm học sinh thủ công.
- ✅ Giáo viên & học sinh có thể chọn **số câu/ngày** (3/5/7/10/15).


## Import học sinh bằng Excel (.xlsx)
- Bảng Excel cần có hàng tiêu đề. Các cột được chấp nhận (có thể đặt tên linh hoạt):
  - `id` (hoặc `ID`, `ma`, `Mã`, `Mã HS`)
  - `name` (hoặc `Họ và tên`, `Họ tên`, `Tên`)
  - `class` (hoặc `Lớp`, `lop`)
  - `pw` (hoặc `Mật khẩu`) *(tuỳ chọn – nếu để trống mặc định 123456)*

## Import câu hỏi bằng Word (.docx)
Bạn soạn Word theo **mẫu khuyến nghị** sau (mỗi câu 1 khối, bắt đầu bằng `Câu 1:`, `Câu 2:` ...):

Câu 1:
Skill: alg_system
Diff: 1
Câu hỏi: Giải hệ phương trình ...
A) ...
B) ...
C) ...
D) ...
Đáp án: B
Giải thích: ...
Hint1: ...
Hint2: ...
Hint3: ...

Ghi chú:
- `Skill` là mã chủ đề (vd: `alg_system`, `alg_quadratic`, `geo_circle_angles`...).
- `Diff` là độ khó 1/2/3.
- Nếu Word không dùng dòng `Câu hỏi:` cũng được, miễn là có đủ A/B/C/D.

> Lưu ý: để dùng Import Excel/Word khi offline, hãy mở trang **1 lần khi có mạng** để Service Worker cache thư viện XLSX/Mammoth.
