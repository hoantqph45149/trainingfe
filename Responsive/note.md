# Responsive Design

Responsive Design là một phương pháp thiết kế và phát triển website nhằm đảm bảo giao diện và trải nghiệm người dùng tốt trên nhiều kích thước màn hình và thiết bị khác nhau.

## Mục tiêu

- Đảm bảo website hiển thị tốt trên các thiết bị: điện thoại, máy tính bảng, laptop, desktop.
- Tăng tính linh hoạt và tối ưu trải nghiệm người dùng.
- Giảm thiểu chi phí phát triển so với việc xây dựng các phiên bản riêng lẻ cho từng thiết bị.

## Các nguyên tắc chính

1. **Flexible Layout (Bố cục linh hoạt)**  
   Sử dụng các đơn vị linh hoạt như phần trăm (`%`), em/rem thay vì các đơn vị cố định như pixel (`px`) để các thành phần tự điều chỉnh kích thước theo màn hình.

2. **Responsive Media**  
   Hình ảnh, video hoặc các nội dung media khác cần thay đổi kích thước tương ứng với khung chứa (container).

## Breakpoint

- Một số breakpoint phổ biến

* 576px
* 768px
* 992px
* 1200px
* 1400px

## Desktop First

CSS Giao diện 1400px trở lên

@media screen and (max-width: 1400px) {
Giao diện màn hình <= 1400px
}

@media screen and (max-width: 1200px) {
Giao diện màn hình <= 1200px
}

@media screen and (max-width: 992px) {
Giao diện màn hình <= 992px
}

@media screen and (max-width: 768px) {
Giao diện màn hình <= 768px
}

@media screen and (max-width: 576px) {
Giao diện màn hình <= 576px
}

## Mobile First

@media screen and (min-width: 576px) {

}

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 992px) {

}

@media screen and (min-width: 1200px) {

}

@media screen and (min-width: 1400px) {

}

- all => Tất cả giao diện web và giao diện trang in
- screen => Chỉ hoạt động ở giao diện web
- print => Chỉ hoạt động ở giao diện trang in
