# css 原子类

```javascript
npm i -S cq-atomcss

import 'cq-atomcss/normalize.css' // 初始化
import 'cq-atomcss/scrolllbar.css' // webkit blink内核滚动条样式
import 'cq-atomcss'

```

```css
.w-10 {
  width: 10%;
}
.w-20 {
  width: 20%;
}
.w-25 {
  width: 25%;
}
.w-30 {
  width: 30%;
}

.overflow-visible {
  overflow: visible;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-auto {
  overflow: auto;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.pointer {
  cursor: pointer;
}

.ma {
  margin: 1px;
}

.pa {
  padding: 1px;
}
```
