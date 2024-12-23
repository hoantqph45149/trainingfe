# JavaScript là gì?

- JavaScript là ngôn ngữ lập trình được nhà phát triển sử dụng để tạo trang web tương tác. Từ làm mới bảng tin trên trang mạng xã hội đến hiển thị hình ảnh động và bản đồ tương tác, các chức năng của JavaScript có thể cải thiện trải nghiệm người dùng của trang web.

## Cách sử dụng js trong file html

- Sử dụng thẻ <script src="file js" ></script>
- Có thể viết js thẳng vào thẻ <script > code js ... </script>

## Comments trong js

1. Mục đích:

- Ghi chú và vô hiệu hóa đoạn mã

2. Loại comments:

- comments 1 dòng và comments nhiều dòng

3. Sử dụng phím tắt:

- windows: ctrl + /

## Toán tử js

1. Toán tử số học - Arithmetic

   - là nhân, chia, cộng, trừ ...

2. Toán tử gán - Assigment

   - Là khai báo 1 biến sau đó gán cho nó 1 giá trị

3. Toán tử so sánh - Comparison

   - Là để tìm ra 1 điều kiện để thực thi 1 đoạn mã
   - Các toán tử so sánh ( ===; ==; >; <; >=; <= )

4. Toán tử logic - Logical

   - là toán tử kết nối hai hay nhiều biểu thức, dùng để kiểm tra mối quan hệ logic giữa các biểu thức.

## Tiền tố và hậu tố

- Tiền tố : ví dụ ++a hoặc --a => trả về giá trị biến a đã được thực thi
- Hậu tố : ví dụ a++ hoặc a-- => trả về giá trị a đc copy

## Câu lệnh điều kiện if else

- if else nõ sẽ chỉ nhận kiểu giữ liệu boolean để thực thi code
- Nếu thỏa mãn điệu kiện của if thì nó sẽ thực thi khối code của if
- else sẽ nhận điều kiện ngược lại tất cả các điều kiện if

## Các kiểu dữ liệu trong js

1. Kiểu dữ liệu nguyên thủy

- Number
- String
- Boolean
- Null
- Undefined

2. Kiểu dữ liệu phức tạp

- Object
- Array
- Function
- Date

## Truthy và Falsy

1. Falsy

- 0; ''; false; null; undefined; NaN

2. Truthy

- Các giá trị khác Falsy

## Làm việc với chuỗi trong js

1 .leng là độ dài của chuỗi

2 .indexOf ( "name", number ) tìm vị trí của kí tự trả về -1 nếu ko có

3 .lastIndexOf ( "name" ) tìm kí tự phía sau của chuỗi

4 .slice ( number, number ) cắt kí tự từ number1 đến number2, cắt ngược thì số âm

5 .replace( "name cần đổi", "name thay thế" ) đổi kí tự HOẶC /name/g đổi hết

6 .toUpperCase() viết HOA kí tự

7 .toLowerCase() viết THƯỜNG kí tự

8 .trim() bỏ khoảng trắng

9 .split( , hoặc ) tìm điểm chung để tạo chuỗi array

10 .charAt( number ) tìm kí tự ko có thì trả rỗng

11 biến[ number ] lấy kí tự như mảng trả về undefined

## Làm việc với số trong js

1. toFixed( number ) làm tròn số đến số chữ số thập phân được chỉ định.

2. toString() Chuyển đổi số thành chuỗi, có thể chỉ định cơ số (radix => 2, 8, 10, 16).

## Làm việc với mảng trong js

1. Tạo mảng

- const arr = [1, 2, 3, 4, 5]
- const arr = new Array(1, 2, 3, 4, 5)
- const arr = Array.of(1, 2, 3, 4, 5)

2. Làm việc với mảng

- arr.push(6) thêm phần tử vào cuối mảng và làm thay đổi mảng gốc

- arr.pop() xóa phần tử cuối mảng và làm thay đổi mảng gốc

- arr.shift() xóa phần tử đầu mảng và làm thay đổi mảng gốc

- arr.unshift(6) thêm phần tử vào đầu mảng và làm thay đổi mảng gốc

- arr.splice(1, 2) xóa phần tử tại số 1, 2 phần tử và làm thay đổi mảng gốc

- arr.slice(1, 2) cắt phần tử tại số 1, 2 phần tử và trả về mảng mới

- arr.sort() sắp xếp mảng và làm thay đổi mảng gốc

- arr.reverse() đảo ngược mảng và làm thay đổi mảng gốc

- arr.concat(1, 2, 3) gộp mảng và trả về mảng mới

- arr.join(,) chuyển mảng thanh chuỗi

- arr.indexOf(value, startIndex) Tìm vị trí (chỉ mục) đầu tiên của phần tử có giá trị là value trong mảng, bắt đầu từ chỉ mục startIndex (nếu có).

- arr.lastIndexOf(value, startIndex) Tìm vị trí (chỉ mục) cuối cùng của phần tử có giá trị là value trong mảng, tính ngược từ chỉ mục startIndex (nếu có)

- arr.fill(value, startIndex, endIndex) Điền giá trị value vào mảng, từ chỉ mục startIndex đến endIndex (không bao gồm endIndex) và làm thay đổi mảng gốc.

- arr.includes(value, startIndex) Kiểm tra xem mảng có chứa giá trị value không, bắt đầu từ chỉ mục startIndex (nếu có).

## Hàm trong js

1. khởi tạo 1 hàm

- function functionName() {}

2. goi hàm

- functionName()

3. tham số

- function functionName(param1, param2, ...) {}

4. return

- function functionName(param1, param2) {
  return param1 + param2
  }

5. Tính chất

- Không thực thi khi định nghĩa

- Thực thi khi goi hàm

- Có thể nhận tham số

- Có thể trả về giá trị

6. Các loại hàm

- function declaration

  function functionName() {}

- function expression

  const functionName = function() {}

- arrow function

  const functionName = () => {}

## object trong js

1. khởi tạo 1 object

- const obj = {
  key1: value1,
  key2: value2,
  ...
  }

2. làm việc với object

- obj.key truy xuất value theo key

- obj['key'] truy xuất value theo key

- obj.key = value thay đổi value theo key

- delete obj.key xóa key trong object

- Object.keys(obj) trả về mảng key trong object

- Object.values(obj) trả về mảng value trong object

- Object.entries(obj) trả về mảng [key, value] trong object

- Object.assign(obj1, obj2) gộp object

3. object contructor

- function Person(name, age) {
  this.name = name
  this.age = age

}

- const person1 = new Person('Nguyen Van A', 20)

- const person2 = new Person('Nguyen Van B', 21)

4. object prototype

- Trong JavaScript, Prototype là một cơ chế cho phép các đối tượng kế thừa các thuộc tính và phương thức từ một đối tượng khác. Mỗi đối tượng trong JavaScript đều có một thuộc tính ẩn gọi là [[Prototype]], trỏ đến một object khác (gọi là prototype object)

## Date trong js

1. khởi tạo 1 date

- const date = new Date()

2. làm việc với date

- date.getFullYear() trả về năm

- date.getMonth() trả về tháng

- date.getDate() trả về ngày

- date.getDay() trả về ngày trong tháng

- date.getHours() trả về giờ

- date.getMinutes() trả về phút

- date.getSeconds() Trả về số giây

- date.getMilliseconds() Trả về số milliseconds (phần nghìn giây) của một đối tượng Date.

## Vòng lặp trong js

1. Vòng lặp for - lặp với điều kiện đúng

2. for in - lặp qua key của đối tượng

3. for of - lặp qua value của đối tượng

4. vòng lặp while - lặp với điều kiện đúng

5. vòng lặp do while - lặp ít nhất 1 lần sau đó lặp với điều kiện đúng

## Array method trong js

1. khởi tạo 1 mảng

- const arr = [1, 2, 3, 4, 5]

2. làm việc với mảng

- foreach - lặp với mảng arr.forEach((item, index) => {})
  => dùng để duyệt qua từng phần tử của mảng

- every - lặp với mảng arr.every((item, index) => {})
  Kiểm tra tất cả các phần tử trong mảng có thỏa mãn một điều kiện hay không.
  Trả về:
  true: Nếu tất cả các phần tử trong mảng thỏa mãn điều kiện.
  false: Nếu có ít nhất một phần tử không thỏa mãn điều kiện.

- some - lặp với mảng arr.some((item, index) => {})
  Kiểm tra ít nhất một phần tử trong mảng có thỏa mãn một điều kiện hay không.
  Trả về:
  true: Nếu ít nhất một phần tử trong mảng thỏa mãn điều kiện.
  false: Nếu không có phần tử nào thỏa mãn điều kiện.

- find - lặp với mảng arr.find((item, index) => {})
  Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện.
  Nếu không có phần tử nào thỏa mãn, trả về undefined.
  Không làm thay đổi mảng gốc.

- filter - lặp với mảng arr.filter((item, index) => {})
  Trả về một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện.
  Nếu không có phần tử nào thỏa mãn, trả về một mảng rỗng.
  Không làm thay đổi mảng gốc.

- map - lặp với mảng arr.map((item, index) => {})
  Duyệt qua từng phần tử trong mảng ban đầu.
  Áp dụng một hàm callback lên mỗi phần tử.
  Tạo ra một mảng mới với các giá trị được tính toán từ hàm callback.
  Không làm thay đổi mảng gốc.

- reduce - array.reduce((accumulator, currentValue, currentIndex, array) => {}, initialValue);
  accumulator: Giá trị tích lũy qua mỗi lần lặp (kết quả trung gian).
  currentValue: Phần tử hiện tại đang được duyệt.
  currentIndex: Chỉ mục của phần tử hiện tại (tùy chọn).
  array: Mảng gốc (tùy chọn).
  initialValue: Giá trị khởi tạo cho accumulator. Nếu không cung cấp, phần tử đầu tiên của mảng sẽ được sử dụng làm accumulator.
  Trả về một giá trị duy nhất (dạng số, chuỗi, mảng, hoặc đối tượng tùy theo logic).
  Không làm thay đổi mảng gốc.

## Math trong js

1. Math.PI

- Trả về số pi (3.141592653589793)

2. Math.round(number)

- Làm tròn số thập phân thành số nguyên gần nhất

3. Math.abs(number)

- Trả về giá trị tuyệt đối của số đã cho.

4. Math.ceil(number)

- làm tròn lên số nguyên gần nhất

5. Math.floor(number)

- Làm tròn dưới số nguyên gần nhất

6. Math.random()

- Sinh số ngẫu nhiên trong khoảng [0, 1)

7. Math.max(...numbers)

- Trả về số lớn nhất trong dãy số

8. Math.min(...numbers)

- Trả về số nhoất nhất trong dãy số

## callback trong js

- Callback là một hàm được truyền vào một hàm khác dưới dạng tham số, sau đó được gọi lại (callback) bên trong hàm đó để thực thi
