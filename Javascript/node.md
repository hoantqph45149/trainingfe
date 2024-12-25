# JavaScript là gì?

- JavaScript là ngôn ngữ lập trình được nhà phát triển sử dụng để tạo trang web tương tác. Từ làm mới bảng tin trên trang mạng xã hội đến hiển thị hình ảnh động và bản đồ tương tác, các chức năng của JavaScript có thể cải thiện trải nghiệm người dùng của trang web.

## Cách sử dụng JS trong file HTML

- Sử dụng thẻ `<script src="file.js"></script>`.
- Có thể viết JS thẳng vào thẻ `<script> code JS ... </script>`.

## Comments trong JS

1. Mục đích:

- Ghi chú và vô hiệu hóa đoạn mã.

2. Loại comments:

- Comments 1 dòng và comments nhiều dòng.

3. Sử dụng phím tắt:

- Windows: `Ctrl + /`.

## Toán tử JS

1. Toán tử số học - Arithmetic

   - Là nhân, chia, cộng, trừ...

2. Toán tử gán - Assignment

   - Là khai báo 1 biến sau đó gán cho nó 1 giá trị.

3. Toán tử so sánh - Comparison

   - Là để tìm ra 1 điều kiện để thực thi 1 đoạn mã.
   - Các toán tử so sánh: `===`, `==`, `>`, `<`, `>=`, `<=`.

4. Toán tử logic - Logical

   - Là toán tử kết nối hai hay nhiều biểu thức, dùng để kiểm tra mối quan hệ logic giữa các biểu thức.

## Tiền tố và hậu tố

- Tiền tố: ví dụ `++a` hoặc `--a` => trả về giá trị biến `a` đã được thực thi.
- Hậu tố: ví dụ `a++` hoặc `a--` => trả về giá trị `a` được copy trước khi thực thi.

## Câu lệnh điều kiện if else

- `if else` chỉ nhận kiểu dữ liệu boolean để thực thi code.
- Nếu thỏa mãn điều kiện của `if` thì nó sẽ thực thi khối code của `if`.
- `else` sẽ nhận điều kiện ngược lại tất cả các điều kiện `if`.

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

- `0`
- `''` (chuỗi rỗng)
- `false`
- `null`
- `undefined`
- `NaN`

2. Truthy

- Các giá trị khác Falsy

## Làm việc với chuỗi trong JS

1. `length`: Trả về độ dài của chuỗi.

2. `indexOf("name", number)`: Tìm vị trí đầu tiên của chuỗi con "name" trong chuỗi chính, bắt đầu từ vị trí `number`. Neu khong tim thay thi tra ve -1.

3. `lastIndexOf("name")`: Tìm vị trí xuất hiện cuối cùng của "name" trong chuỗi.

4. `slice(number1, number2)`: Cắt chuỗi từ vị trí `number1` đến `number2` (không bao gồm `number2`).

5. `replace("oldName", "newName")`: Thay thế chuỗi "oldName" bằng "newName".

6. `toUpperCase()`: Chuyển tất cả ký tự trong chuỗi thành chữ hoa.

7. `toLowerCase()`: Chuyển tất cả ký tự trong chuỗi thành chữ thường.

8. `trim()`: Loại bỏ khoảng trắng ở đầu và cuối chuỗi.

9. `split("delimiter")`: Chia chuỗi thành mảng dựa trên điểm chung "delimiter".

10. `charAt(number)`: Trả về ký tự tại vị trí `number`.

11. `str[number]`: Lấy ký tự trong chuỗi tại vị trí `number`.

## Làm việc với số trong JS

1. `toFixed(number)` làm tròn số đến số chữ số thập phân được chỉ định.

2. `toString()` chuyển đổi số thành chuỗi, có thể chỉ định cơ số (radix => 2, 8, 10, 16).

3. `parseInt(string, radix)` chuyển đổi chuỗi thành số nguyên, với cơ số được chỉ định (radix).

4. `parseFloat(string)` chuyển đổi chuỗi thành số thực (số thập phân).

5. `Number.isInteger(value)` kiểm tra xem giá trị có phải là số nguyên hay không.

6. `Number.isNaN(value)` kiểm tra xem giá trị có phải là NaN (Not-a-Number) hay không.

## Làm việc với mảng trong JS

1. Tạo mảng

- `const arr = [1, 2, 3, 4, 5]`
- `const arr = new Array(1, 2, 3, 4, 5)`
- `const arr = Array.of(1, 2, 3, 4, 5)`

2. Làm việc với mảng

- `arr.push(6)` thêm phần tử vào cuối mảng và làm thay đổi mảng gốc.
- `arr.pop()` xóa phần tử cuối mảng và làm thay đổi mảng gốc.
- `arr.shift()` xóa phần tử đầu mảng và làm thay đổi mảng gốc.
- `arr.unshift(6)` thêm phần tử vào đầu mảng và làm thay đổi mảng gốc.
- `arr.splice(1, 2)` xóa phần tử tại số 1, 2 phần tử và làm thay đổi mảng gốc.
- `arr.slice(1, 2)` cắt phần tử tại số 1, 2 phần tử và trả về mảng mới.
- `arr.sort()` sắp xếp mảng và làm thay đổi mảng gốc.
- `arr.reverse()` đảo ngược mảng và làm thay đổi mảng gốc.
- `arr.concat(1, 2, 3)` gộp mảng và trả về mảng mới.
- `arr.join(',')` chuyển mảng thành chuỗi.
- `arr.indexOf(value, startIndex)` tìm vị trí (chỉ mục) đầu tiên của phần tử có giá trị là `value` trong mảng, bắt đầu từ chỉ mục `startIndex` (nếu có).
- `arr.lastIndexOf(value, startIndex)` tìm vị trí (chỉ mục) cuối cùng của phần tử có giá trị là `value` trong mảng, tính ngược từ chỉ mục `startIndex` (nếu có).
- `arr.fill(value, startIndex, endIndex)` điền giá trị `value` vào mảng, từ chỉ mục `startIndex` đến `endIndex` (không bao gồm `endIndex`) và làm thay đổi mảng gốc.
- `arr.includes(value, startIndex)` kiểm tra xem mảng có chứa giá trị `value` không, bắt đầu từ chỉ mục `startIndex` (nếu có).

## Hàm trong JS

1. Khởi tạo 1 hàm

- `function functionName() {}`

2. Gọi hàm

- `functionName()`

3. Tham số

- `function functionName(param1, param2, ...) {}`

4. Return

- `function functionName(param1, param2) { return param1 + param2 }`

5. Tính chất

- Không thực thi khi định nghĩa.
- Thực thi khi gọi hàm.
- Có thể nhận tham số.
- Có thể trả về giá trị.

6. Các loại hàm

- Function declaration

  ```javascript
  function functionName() {}
  ```

- Function expression

  ```javascript
  const functionName = function () {};
  ```

- Arrow function

  ```javascript
  const functionName = () => {};
  ```

## Object trong JS

1. Khởi tạo 1 object

- `const obj = { key1: value1, key2: value2, ... }`

2. Làm việc với object

- `obj.key` truy xuất value theo key.
- `obj['key']` truy xuất value theo key.
- `obj.key = value` thay đổi value theo key.
- `delete obj.key` xóa key trong object.
- `Object.keys(obj)` trả về mảng key trong object.
- `Object.values(obj)` trả về mảng value trong object.
- `Object.entries(obj)` trả về mảng [key, value] trong object.
- `Object.assign(obj1, obj2)` gộp object.

3. Object constructor

- `function Person(name, age) { this.name = name; this.age = age; }`
- `const person1 = new Person('Nguyen Van A', 20)`
- `const person2 = new Person('Nguyen Van B', 21)`

4. Object prototype

- Trong JavaScript, Prototype là một cơ chế cho phép các đối tượng kế thừa các thuộc tính và phương thức từ một đối tượng khác. Mỗi đối tượng trong JavaScript đều có một thuộc tính ẩn gọi là [[Prototype]], trỏ đến một object khác (gọi là prototype object).

## Date trong JS

1. Khởi tạo 1 date

- `const date = new Date()`

2. Làm việc với date

- `date.getFullYear()` trả về năm.
- `date.getMonth()` trả về tháng.
- `date.getDate()` trả về ngày.
- `date.getDay()` trả về ngày trong tuần.
- `date.getHours()` trả về giờ.
- `date.getMinutes()` trả về phút.
- `date.getSeconds()` trả về số giây.
- `date.getMilliseconds()` trả về số milliseconds (phần nghìn giây) của một đối tượng Date.

## Vòng lặp trong JS

1. Vòng lặp `for` - lặp với điều kiện đúng

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

2. for in - lặp qua key của đối tượng

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}
```

3. for of - lặp qua value của đối tượng

```javascript
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
```

4. vòng lặp while - lặp với điều kiện đúng

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

5. vòng lặp do while - lặp ít nhất 1 lần sau đó lặp với điều kiện đúng

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## Array method trong JS

1. Khởi tạo 1 mảng

- `const arr = [1, 2, 3, 4, 5]`

2. Làm việc với mảng

- `forEach` - lặp với mảng `arr.forEach((item, index) => {})`

  - Dùng để duyệt qua từng phần tử của mảng.

- `every` - lặp với mảng `arr.every((item, index) => {})`

  - Kiểm tra tất cả các phần tử trong mảng có thỏa mãn một điều kiện hay không.
  - Trả về:
    - `true`: Nếu tất cả các phần tử trong mảng thỏa mãn điều kiện.
    - `false`: Nếu có ít nhất một phần tử không thỏa mãn điều kiện.

- `some` - lặp với mảng `arr.some((item, index) => {})`

  - Kiểm tra ít nhất một phần tử trong mảng có thỏa mãn một điều kiện hay không.
  - Trả về:
    - `true`: Nếu ít nhất một phần tử trong mảng thỏa mãn điều kiện.
    - `false`: Nếu không có phần tử nào thỏa mãn điều kiện.

- `find` - lặp với mảng `arr.find((item, index) => {})`

  - Trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện.
  - Nếu không có phần tử nào thỏa mãn, trả về `undefined`.
  - Không làm thay đổi mảng gốc.

- `filter` - lặp với mảng `arr.filter((item, index) => {})`

  - Trả về một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện.
  - Nếu không có phần tử nào thỏa mãn, trả về một mảng rỗng.
  - Không làm thay đổi mảng gốc.

- `map` - lặp với mảng `arr.map((item, index) => {})`

  - Duyệt qua từng phần tử trong mảng ban đầu.
  - Áp dụng một hàm callback lên mỗi phần tử.
  - Tạo ra một mảng mới với các giá trị được tính toán từ hàm callback.
  - Không làm thay đổi mảng gốc.

- `reduce` - `array.reduce((accumulator, currentValue, currentIndex, array) => {}, initialValue)`
  - `accumulator`: Giá trị tích lũy qua mỗi lần lặp (kết quả trung gian).
  - `currentValue`: Phần tử hiện tại đang được duyệt.
  - `currentIndex`: Chỉ mục của phần tử hiện tại (tùy chọn).
  - `array`: Mảng gốc (tùy chọn).
  - `initialValue`: Giá trị khởi tạo cho `accumulator`. Nếu không cung cấp, phần tử đầu tiên của mảng sẽ được sử dụng làm `accumulator`.
  - Trả về một giá trị duy nhất (dạng số, chuỗi, mảng, hoặc đối tượng tùy theo logic).
  - Không làm thay đổi mảng gốc.

## Math trong JS

1. `Math.PI`

   - Trả về số pi (3.141592653589793).

2. `Math.round(number)`

   - Làm tròn số thập phân thành số nguyên gần nhất.

3. `Math.abs(number)`

   - Trả về giá trị tuyệt đối của số đã cho.

4. `Math.ceil(number)`

   - Làm tròn lên số nguyên gần nhất.

5. `Math.floor(number)`

   - Làm tròn xuống số nguyên gần nhất.

6. `Math.random()`

   - Sinh số ngẫu nhiên trong khoảng (0, 1).

7. `Math.max(...numbers)`

   - Trả về số lớn nhất trong dãy số.

8. `Math.min(...numbers)`
   - Trả về số nhỏ nhất trong dãy số.

## callback trong js

- Callback là một hàm được truyền vào một hàm khác dưới dạng tham số, sau đó được gọi lại (callback) bên trong hàm đó để thực thi

## Dom trong js

### 1. DOM là gì?

- DOM (Document Object Model) là một tiêu chuẩn do W3C (World Wide Web Consortium) phát triển để mô tả cấu trúc của tài liệu HTML và XML dưới dạng một cây đối tượng. Nó cho phép các lập trình viên truy cập và thao tác tài liệu bằng các ngôn ngữ lập trình như JavaScript.

### 2. Các thành phần

- Element: Là các phần tử HTML, đại diện cho các thành phần trong trang web.
- Attribute: Là các thuộc tính được gán cho các phần tử HTML để định nghĩa thông tin hoặc điều chỉnh cách mà phần tử hoạt động và hiển thị.
- Text node: Là các giá trị văn bản nằm trong các phần tử HTML.

### 3. Làm việc với DOM

- `document.getElementById('id')` lấy element theo id.
- `document.getElementsByClassName('class')` lấy các element theo class.
- `document.getElementsByTagName('tag')` lấy các element theo tag.
- `document.querySelector('selector')` lấy element đầu tiên khớp với selector.
- `document.querySelectorAll('selector')` lấy tất cả các element khớp với selector.

### 4. Attribute và text node trong DOM

- Attribute là các thuộc tính được gán cho các phần tử HTML để định nghĩa thông tin hoặc điều chỉnh cách mà phần tử hoạt động và hiển thị. Attribute thường được sử dụng trong mã HTML và có thể được truy cập hoặc thao tác bằng JavaScript thông qua DOM.

  - `getAttribute()` để lấy giá trị của một attribute.
  - `setAttribute()` để thêm hoặc cập nhật giá trị của một attribute.
  - `removeAttribute()` để xóa một attribute.
  - `hasAttribute()` để kiểm tra xem một phần tử có attribute hay không.

- Text node là các giá trị trong các phần tử HTML.

  - `innerText` lấy văn bản được hiển thị (được CSS ảnh hưởng). Tự động xử lý dấu ngắt dòng và khoảng trắng. Không lấy văn bản từ các phần tử ẩn.
  - `textContent` lấy tất cả văn bản (không bị ảnh hưởng bởi CSS). Không tự động xử lý dấu ngắt dòng và khoảng trắng dư thừa. Lấy văn bản từ các phần tử ẩn (e.g., display: none).
  - `innerHTML` trả về hoặc thiết lập nội dung HTML bên trong của một phần tử, không bao gồm phần tử đó. Chỉ tác động đến nội dung (bao gồm các thẻ con và văn bản) bên trong phần tử được chọn.
  - `outerHTML` trả về hoặc thiết lập toàn bộ HTML của phần tử và nội dung của nó (bao gồm cả chính phần tử đó). Tác động đến chính phần tử và cả nội dung bên trong nó.

### 5. ClassList property trong DOM

#### 1. Cách thêm class vào element

Sử dụng `classList.add('class1', 'class2', ...)` để thêm các class vào một phần tử.

```javascript
const element = document.getElementById("myElement");
element.classList.add("class1", "class2");
```

#### 2. Cách xóa class trong element

Sử dụng classList.remove('class1', 'class2', ...) để xóa các class từ một phần tử.

```javascript
const element = document.getElementById("myElement");
element.classList.remove("class1", "class2");
```

#### 3. Cách thay đổi class trong element

Sử dụng classList.toggle('class1') để thay đổi (toggle) class trong một phần tử.

```javascript
const element = document.getElementById("myElement");
element.classList.toggle("class1");
```

#### 4. Kiểm tra class có tồn tại trong element không

Sử dụng classList.contains('class1') để kiểm tra xem class có tồn tại trong một phần tử hay không.

```javascript
const element = document.getElementById("myElement");
const hasClass = element.classList.contains("class1");
console.log(hasClass); // true nếu class1 tồn tại, ngược lại false
```

### 6. Event trong dom

**Event là gì?**

- Event (sự kiện) là các hành động hoặc sự kiện xảy ra trong trình duyệt mà JavaScript có thể phản hồi. Ví dụ: người dùng nhấp chuột, di chuyển chuột, nhấn phím, tải trang, v.v.

**Các loại sự kiện phổ biến:**

- `click`: Xảy ra khi người dùng nhấp chuột vào một phần tử.
- `mouseover`: Xảy ra khi người dùng di chuyển chuột qua một phần tử.
- `mouseout`: Xảy ra khi người dùng di chuyển chuột ra khỏi một phần tử.
- `keydown`: Xảy ra khi người dùng nhấn một phím.
- `keyup`: Xảy ra khi người dùng thả một phím.
- `load`: Xảy ra khi trang hoặc một tài nguyên được tải xong.
- `submit`: Xảy ra khi người dùng gửi một form.

**Cách lắng nghe sự kiện:**

- Sử dụng phương thức `addEventListener` để lắng nghe sự kiện.

```javascript
element.addEventListener("event", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện
  event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên các phần tử cha
});
```

- `preventDefault` ngăn chặn sự kiện mặc định của element.
- `stopPropagation` ngăn chặn sự kiện lan truyền lên các phần tử cha.

**Gỡ bỏ sự kiện:**

- Sử dụng phương thức `removeEventListener` để gỡ bỏ sự kiện.

```javascript
function eventHandler(event) {
  // Xử lý sự kiện
}

element.addEventListener("event", eventHandler);

// Gỡ bỏ sự kiện
element.removeEventListener("event", eventHandler);
```

## Event Loop trong JavaScript

Event Loop là một cơ chế quan trọng trong JavaScript giúp xử lý các tác vụ không đồng bộ. Nó cho phép JavaScript thực hiện các tác vụ như xử lý sự kiện, thực hiện các callback, và quản lý các tác vụ không đồng bộ như AJAX, setTimeout, và Promises.

### Cách hoạt động của Event Loop

1. **Call Stack**: Là nơi lưu trữ các hàm cần thực thi. Khi một hàm được gọi, nó sẽ được đẩy vào Call Stack. Khi hàm hoàn thành, nó sẽ được loại bỏ khỏi Call Stack.

2. **Web APIs**: Là các API cung cấp bởi môi trường (như trình duyệt) để thực hiện các tác vụ không đồng bộ như setTimeout, AJAX, và DOM events.

3. **Callback Queue**: Là nơi lưu trữ các callback sẵn sàng để được thực thi. Khi một tác vụ không đồng bộ hoàn thành, callback của nó sẽ được đẩy vào Callback Queue.

4. **Event Loop**: Là cơ chế kiểm tra Call Stack và Callback Queue. Nếu Call Stack trống, Event Loop sẽ lấy callback từ Callback Queue và đẩy vào Call Stack để thực thi.

### Ví dụ minh họa

```javascript
console.log("Start");

setTimeout(function () {
  console.log("Timeout");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise");
});

console.log("End");
```

## Json trong js

1. JSON là gì?

- JSON (JavaScript Object Notation) là một định dạng dữ liệu nhẹ để trao đổi dữ liệu giữa các hệ thống. Nó dễ đọc và viết cho con người, và dễ phân tích và tạo ra cho máy tính.

2. Cách sử dụng JSON trong JavaScript

- Chuyển đổi đối tượng JavaScript thành chuỗi JSON: `JSON.stringify(object)`
- Chuyển đổi chuỗi JSON thành đối tượng JavaScript: `JSON.parse(string)`

3. Ví dụ:

```javascript
const obj = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }
```

## Promise trong JavaScript

1. Promise là gì?

Promise là một đối tượng đại diện cho một giá trị có thể có trong tương lai, hoặc là một giá trị đã được tính toán hoặc là một lý do tại sao giá trị đó không thể được tính toán. Nó cho phép bạn viết mã không đồng bộ theo cách dễ đọc và dễ quản lý hơn.

2. Các trạng thái của Promise:

- **Pending**: Trạng thái ban đầu, chưa hoàn thành hoặc bị từ chối.
- **Fulfilled**: Đã hoàn thành thành công.
- **Rejected**: Đã bị từ chối với một lý do (thường là một lỗi).

3. Cách tạo một Promise:

```javascript
let promise = new Promise(function(resolve, reject) {
  // Thực hiện một số công việc không đồng bộ
  if (/* công việc thành công */) {
    resolve("Thành công!");
  } else {
    reject("Thất bại!");
  }
});
```

4. Cách dụng Promise:

```javascript
promise
  .then(function (result) {
    console.log(result); // "Thành công!"
  })
  .catch(function (error) {
    console.log(error); // "Thất bại!"
  });
```

5. Promise chaining

```javascript
promise
  .then(function (result) {
    return result + " thêm dữ liệu";
  })
  .then(function (newResult) {
    console.log(newResult); // "Thành công! thêm dữ liệu"
  })
  .catch(function (error) {
    console.log(error);
  });
```

6. Promise.all

```javascript
let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values); // [3, 42, "foo"]
});
```

7. Promise.race

```javascript
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); // "two"
});
```

## Async/Await trong JavaScript

`async` và `await` là cú pháp mới trong JavaScript (ES8) giúp làm việc với các tác vụ không đồng bộ dễ dàng hơn. Chúng cung cấp một cách viết mã không đồng bộ trông giống như mã đồng bộ, giúp mã dễ đọc và dễ hiểu hơn.

### `async` Function

- Một hàm được khai báo với từ khóa `async` sẽ luôn trả về một `Promise`.
- Nếu hàm trả về một giá trị, giá trị đó sẽ được tự động bọc trong một `Promise.resolve`.
- Nếu hàm ném ra một lỗi, lỗi đó sẽ được bọc trong một `Promise.reject`.

### `await` Expression

- `await` chỉ có thể được sử dụng bên trong một hàm `async`.
- `await` sẽ tạm dừng việc thực thi của hàm `async` cho đến khi `Promise` được giải quyết (fulfilled hoặc rejected).
- Nó trả về giá trị của `Promise` nếu `Promise` được giải quyết thành công.
- Nếu `Promise` bị từ chối, `await` sẽ ném ra lỗi tương ứng.

### Ví dụ

```javascript
// Khai báo một hàm async
async function fetchData() {
  try {
    // Sử dụng await để đợi Promise được giải quyết
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Gọi hàm async
fetchData();
```

## var, let, const trong JavaScript

JavaScript cung cấp ba cách để khai báo biến: `var`, `let`, và `const`. Mỗi cách có các đặc điểm và phạm vi khác nhau.

### `var`

- **Phạm vi hàm (Function Scope)**: Biến được khai báo bằng `var` có phạm vi trong hàm chứa nó.
- **Hoisting**: Biến khai báo bằng `var` được hoisted lên đầu phạm vi của nó, nhưng giá trị của nó không được hoisted.
- **Có thể khai báo lại**: Biến có thể được khai báo lại trong cùng một phạm vi.

```javascript
function example() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  console.log(x); // 10
}
example();
```

### `let`

**Phạm vi khối (Block Scope)**: Biến được khai báo bằng `let` có phạm vi trong khối chứa nó (giữa cặp dấu {}).
**Hoisting**: Biến khai báo bằng `let` cũng được hoisted, nhưng không thể truy cập trước khi khai báo (Temporal Dead Zone).
**Không thể khai báo lại**: Biến không thể được khai báo lại trong cùng một phạm vi.

```javascript
function example() {
  console.log(x); // ReferenceError (Temporal Dead Zone)
  let x = 10;
  console.log(x); // 10
}
example();
```

### `consst`

**Phạm vi khối (Block Scope)**: Giống như `let`, biến được khai báo bằng `const` có phạm vi trong khối chứa nó.
**Hoisting**: Giống như `let`, biến khai báo bằng `const` cũng được hoisted nhưng không thể truy cập trước khi khai báo.
**Không thể thay đổi giá trị**: Biến khai báo bằng `const` phải được khởi tạo khi khai báo và không thể thay đổi giá trị sau đó.

```javascript
function example() {
  const x = 10;
  console.log(x); // 10
  x = 20; // TypeError: Assignment to constant variable.
}
example();
```

## Destructuring trong JavaScript

Destructuring trong JavaScript là một cú pháp cho phép bạn trích xuất các giá trị từ mảng hoặc đối tượng và gán chúng vào các biến riêng lẻ. Dưới đây là một số ví dụ về destructuring:

### Destructuring Mảng

```javascript
const array = [1, 2, 3, 4, 5];

// Trích xuất các giá trị từ mảng
const [first, second, third] = array;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

### Destructuring Đối tượng

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Trích xuất các giá trị từ đối tượng
const { name, age, city } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // New York
```

### Đặt Tên Biến Khác Khi Destructuring

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Đặt tên biến khác khi destructuring
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // John
console.log(personAge); // 30
console.log(personCity); // New York
```

### Destructuring với Giá Trị Mặc Định

```javascript
const person = {
  name: "John",
  age: 30,
};

// Sử dụng giá trị mặc định nếu thuộc tính không tồn tại
const { name, age, city = "Unknown" } = person;

console.log(name); // John
console.log(age); // 30
console.log(city); // Unknown
```

### Destructuring Mảng Lồng Nhau

```javascript
const nestedArray = [1, [2, 3], 4];

// Trích xuất giá trị từ mảng lồng nhau
const [first, [second, third], fourth] = nestedArray;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
```

### Destructuring đối tượng Lồng Nhau

```javascript
const nestedObject = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Trích xuất giá trị từ đối tượng lồng nhau
const {
  name,
  address: { city, country },
} = nestedObject;

console.log(name); // John
console.log(city); // New York
console.log(country); // USA
```

## Spread Operator trong js

Spread Operator trong JavaScript (...) là một cú pháp mạnh mẽ cho phép bạn mở rộng các phần tử của một mảng hoặc các thuộc tính của một đối tượng.

### Spread Operator với Mảng

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Kết hợp hai mảng
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Sao chép một mảng
const copiedArray = [...array1];

console.log(copiedArray); // [1, 2, 3]
```

### Spread Operator với Đối Tượng

```javascript
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };

// Kết hợp hai đối tượng
const combinedObject = { ...object1, ...object2 };

console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Sao chép một đối tượng
const copiedObject = { ...object1 };

console.log(copiedObject); // { a: 1, b: 2 }
```

### Spread Operator trong Hàm

```javascript
const numbers = [1, 2, 3, 4, 5];

// Truyền các phần tử của mảng vào hàm
const sum = (a, b, c, d, e) => a + b + c + d + e;

console.log(sum(...numbers)); // 15
```

### Spread Operator với Chuỗi

```javascript
const string = "hello";

// Chuyển đổi chuỗi thành mảng các ký tự
const charArray = [...string];

console.log(charArray); // ['h', 'e', 'l', 'l', 'o']
```
