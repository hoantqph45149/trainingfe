## Reactjs là gì ?

React.js (hay còn gọi là React hoặc ReactJS) là một thư viện JavaScript mã nguồn mở được sử dụng để xây dựng giao diện người dùng, đặc biệt là cho các ứng dụng web đơn trang (Single Page Applications - SPA).

### Các đặc điểm chính của React.js

- **Component-Based**: React cho phép xây dựng giao diện người dùng bằng cách chia nhỏ thành các thành phần (components) độc lập, có thể tái sử dụng.
- **Virtual DOM**: React sử dụng DOM ảo để tối ưu hóa hiệu suất. Khi trạng thái của ứng dụng thay đổi, React sẽ cập nhật DOM ảo trước, sau đó so sánh với DOM thật và chỉ áp dụng những thay đổi cần thiết.
- **JSX**: JSX là một cú pháp mở rộng của JavaScript, cho phép viết mã HTML trong JavaScript. JSX giúp code dễ đọc và viết hơn.
- **One-Way Data Binding**: Dữ liệu trong React được truyền một chiều từ cha xuống con, giúp dễ dàng kiểm soát và debug.

## props trong reactjs

Trong React, `props` (viết tắt của "properties") là một cơ chế để truyền dữ liệu từ component cha xuống component con. Props giúp các component có thể giao tiếp với nhau và chia sẻ dữ liệu một cách hiệu quả.

### Cách sử dụng props

Props được truyền từ component cha xuống component con dưới dạng thuộc tính của thẻ component. Component con có thể truy cập các props này thông qua đối tượng `props`.

### Ví dụ

```javascript
import React from "react";

// Component con
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Component cha
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
```

## children props trong reactjs

`children props` là một prop đặc biệt được sử dụng để truyền các phần tử con vào một component. Điều này cho phép bạn tạo các component có thể chứa các phần tử khác bên trong chúng.

### Cách sử dụng children props

Bạn có thể truy cập `children` thông qua đối tượng `props` trong component của bạn.

### Ví dụ

```javascript
import React from "react";

// Component cha
function Container(props) {
  return <div className="container">{props.children}</div>;
}

// Sử dụng component cha với các phần tử con
function App() {
  return (
    <Container>
      <h1>Tiêu đề</h1>
      <p>Nội dung</p>
    </Container>
  );
}

export default App;
```

## NPM và NPX trong reactjs

### NPM

NPM (Node Package Manager) là một công cụ quản lý gói cho JavaScript, được cài đặt cùng với Node.js. NPM cho phép bạn cài đặt, quản lý và chia sẻ các thư viện và công cụ JavaScript.

#### Các lệnh NPM cơ bản

- `npm init`: Khởi tạo một dự án mới và tạo file `package.json`.
- `npm install <package>`: Cài đặt một gói và thêm nó vào `node_modules`.
- `npm install`: Cài đặt tất cả các gói được liệt kê trong `package.json`.
- `npm uninstall <package>`: Gỡ bỏ một gói khỏi dự án.

### NPX

NPX là một công cụ cho phép bạn thực thi các gói Node.js mà không cần cài đặt toàn cục hoặc thêm chúng vào `package.json`.

#### Sử dụng NPX

- `npx <command>`: Chạy một lệnh từ một gói mà không cần cài đặt nó toàn cục.
- `npx create-react-app my-app`: Tạo một ứng dụng React mới mà không cần cài đặt `create-react-app` toàn cục.

## memo trong react js

`memo` là một Higher Order Component (HOC) trong React, được sử dụng để tối ưu hóa hiệu suất của các component bằng cách ghi nhớ (memoize) kết quả render của chúng. `memo` giúp ngăn chặn việc render lại không cần thiết của component khi các props của nó không thay đổi.

### Ví dụ

```javascript
import React, { memo } from "react";

function ChildComponent({ name }) {
  return <div>Hello, {name}!</div>;
}

const MemoizedChildComponent = memo(ChildComponent);

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>
      <p>Count: {count}</p>
      <MemoizedChildComponent name="Alice" />
    </div>
  );
}

export default ParentComponent;
```

## Hooks trong reactjs

Hooks là những methods hay là những hàm được reactjs viết sẵn, mỗi hàm sẽ là 1 tính năng và sẽ đc dùng trong những trường hợp cụ thể.

### những hooks của reactjs

- useState
- useEffect
- useLayoutEffect
- useContext
- useReducer
- useRef
- useMemo
- useCallback
- useImperativeHandle
- useDebugValue

## useState trong reactjs

`useState` là một Hook trong React cho phép bạn thêm state vào các function component. Nó trả về một mảng với hai giá trị: giá trị hiện tại của state và một hàm để cập nhật giá trị đó.

### Cách sử dụng useState

import nó từ React và gọi nó trong function component.

### Ví dụ

```javascript
import React, { useState } from "react";

function Counter() {
  // Khai báo một biến state mới, gọi là "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã nhấn {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Nhấn tôi</button>
    </div>
  );
}

export default Counter;
```

## Mount và unmount trong reactjs

Trong React, "mount" và "unmount" là hai giai đoạn quan trọng trong vòng đời của một component.

### Mount

Mount là quá trình khi một component được tạo và thêm vào DOM. Các phương thức vòng đời liên quan đến mount bao gồm:

- `componentDidMount`: Được gọi ngay sau khi component được thêm vào DOM. Đây là nơi bạn có thể thực hiện các thao tác khởi tạo như gọi API, thiết lập subscriptions, hoặc cập nhật state.

### Unmount

Unmount là quá trình khi một component bị loại bỏ khỏi DOM. Các phương thức vòng đời liên quan đến unmount bao gồm:

- `componentWillUnmount`: Được gọi ngay trước khi component bị loại bỏ khỏi DOM. Đây là nơi bạn có thể thực hiện các thao tác dọn dẹp như hủy subscriptions, xóa timers, hoặc hủy bỏ các yêu cầu API.

## useLayoutEffect trong reactjs

`useLayoutEffect` là một Hook trong React tương tự như `useEffect`, nhưng nó được gọi đồng bộ sau khi tất cả các thay đổi DOM đã được thực hiện. `useLayoutEffect` sẽ chạy trước khi trình duyệt cập nhật lại DOM.

### Ví dụ

```javascript
import React, { useLayoutEffect, useRef } from "react";

function LayoutEffectComponent() {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const { height } = divRef.current.getBoundingClientRect();
    console.log("Chiều cao của div:", height);
  }, []);

  return <div ref={divRef}>Đo chiều cao của tôi</div>;
}

export default LayoutEffectComponent;
```

## useEffect trong reactjs

`useEffect` là một Hook trong React cho phép bạn thực hiện các side effects trong function component. Các side effects có thể bao gồm việc lấy dữ liệu từ API, thiết lập subscriptions, hoặc thay đổi DOM.

### useEffect có 3 trạng thái

`useEffect` có thể được sử dụng trong ba trạng thái khác nhau tùy thuộc vào cách bạn sử dụng mảng phụ thuộc (dependency array):

1. **Không có mảng phụ thuộc**:

   - `useEffect` sẽ chạy sau mỗi lần render của component.
   - Ví dụ:
     ```javascript
     useEffect(() => {
       console.log("Component rendered");
     });
     ```

2. **Mảng phụ thuộc rỗng**:

   - `useEffect` chỉ chạy một lần sau lần render đầu tiên của component (tương đương với `componentDidMount`).
   - Ví dụ:
     ```javascript
     useEffect(() => {
       console.log("Component mounted");
     }, []);
     ```

3. **Mảng phụ thuộc có giá trị**:
   - `useEffect` sẽ chạy lại mỗi khi một trong các giá trị trong mảng phụ thuộc thay đổi.
   - Ví dụ:
     ```javascript
     useEffect(() => {
       console.log("Dependency changed");
     }, [dependency]);
     ```

### Ví dụ tổng hợp

```javascript
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  });

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <p>Bạn đã nhấn {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Nhấn tôi</button>
    </div>
  );
}

export default ExampleComponent;
```

## useRef trong reactjs

`useRef` là một Hook trong React cho phép bạn tạo ra một đối tượng tham chiếu có thể giữ một giá trị có thể thay đổi mà không gây ra việc render lại component. `useRef` thường được sử dụng để truy cập trực tiếp vào các phần tử DOM hoặc để giữ giá trị qua các lần render.

### Ví dụ

#### Truy cập vào phần tử DOM

```javascript
import React, { useRef, useEffect } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Truy cập trực tiếp vào phần tử DOM và thiết lập focus
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus vào ô nhập liệu</button>
    </div>
  );
}

export default TextInputWithFocusButton;
```

## useMemo trong reactjs

`useMemo` là một Hook trong React cho phép bạn tối ưu hóa hiệu suất của ứng dụng bằng cách ghi nhớ (memoize) giá trị của một biểu thức tính toán phức tạp. `useMemo` chỉ tính toán lại giá trị khi một trong các giá trị phụ thuộc thay đổi, giúp tránh các tính toán không cần thiết trong mỗi lần render.

### Ví dụ

#### Tính toán phức tạp

```javascript
import React, { useState, useMemo } from "react";

function ExpensiveCalculationComponent({ num }) {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Tính toán phức tạp...");
    for (let i = 0; i < 1000000000; i++) {} // Giả lập tính toán phức tạp
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <p>Giá trị tính toán: {memoizedValue}</p>
      <p>Bạn đã nhấn {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Nhấn tôi</button>
    </div>
  );
}

export default ExpensiveCalculationComponent;
```

## useCallback trong reactjs

`useCallback` là một Hook trong React cho phép bạn ghi nhớ (memoize) các hàm callback để tránh việc tạo lại chúng trong mỗi lần render. Điều này giúp tối ưu hóa hiệu suất của ứng dụng, đặc biệt là khi bạn truyền các hàm callback xuống các component con.

### Ví dụ

```javascript
import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Bạn đã nhấn {count} lần</p>
      <button onClick={increment}>Nhấn tôi</button>
    </div>
  );
}

export default Counter;
```

## useReducer trong reactjs

`useReducer` là một Hook trong React cho phép bạn quản lý state phức tạp hơn bằng cách sử dụng một hàm reducer. Nó tương tự như `useState`, nhưng phù hợp hơn khi state của bạn có cấu trúc phức tạp hoặc khi logic cập nhật state phụ thuộc vào nhiều hành động khác nhau.

### Ví dụ

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Bạn đã nhấn {state.count} lần</p>
      <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
    </div>
  );
}

export default Counter;
```

## useContext trong reactjs

`useContext` cho phép bạn sử dụng giá trị của một Context trong function component. Context cung cấp một cách để truyền dữ liệu qua cây component mà không cần phải truyền props xuống từng cấp.

### Ví dụ

```javascript
import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return <button className={theme}>Nút với chủ đề {theme}</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

export default App;
```
