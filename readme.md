# Phân cấp hành chính Việt Nam

Phân cấp hành chính Việt Nam export từ nguồn Tổng Cục Thống Kê.

## Cài đặt:

### NPM:
```shell
npm install hanhchinhvn
```

### Cấu trúc thư mục:

- **excel_files/**: thư mục chứa các file excel lấy từ Tổng Cục Thống Kê
- **dist/**: thư mục chứa các file đã được trích xuất dạng json
- `export.php`: export file json từ file excel
- `include.php`: thư viện chung

### Thư mục `dist/`

- `tinh_tp.json`: thông tin về các tỉnh, thành phố
- `quan_huyen.json`: thông tin về các quận, huyện, thị xã, thành phố trực thuộc tỉnh
- `xa_phuong.json`: thông tin về các xã, phường, thị trấn
- `tree.json`: cấu trúc hành chính dạng cây thư mục
- **quan_huyen/**: thư mục chứa các file json là thông tin các quận, huyện, thị xã, thành phố trực thuộc của một tỉnh. Tên file là mã của tỉnh. Dùng để truy vấn ở client. Ví dụ: `quan_huyen/92.json` là thông tin các quận, huyện,... của tỉnh có mã **92**.
- **xa_phuong/**: thư mục chứa các file json là thông tin các xã, phường, thị trấn của một quận, huyện,.... Tên file là mã của quận, huyện, thị xã hoặc thành phố trực thuộc tỉnh. Dùng để truy vấn ở client. Ví dụ: `xa_phuong/92.json` là thông tin các xã, phường,... của quận/huyện có mã **92**.

### Nguồn dữ liệu

**Tổng Cục Thống Kê**: [https://danhmuchanhchinh.gso.gov.vn/](https://danhmuchanhchinh.gso.gov.vn/)

### Changelog

Tham khảo file [changelog.md](./changelog.md) để biết lịch sử thay đổi.
