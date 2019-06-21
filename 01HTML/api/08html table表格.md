# 表格
表示二维的数据结构（行列关系的数据用表格）

## 基本标签
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
```
1. table 定义表格
2. caption 定义标题
3. thead 或 tfoot 定义表头和表尾
  * th： thead 或 tfoot内->tr内，定义table head
5. tbody 定义表格主题

6. tr 定义table row
  * td： tbody内->tr内，定义table data

## 多列进行分组
```html
<table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
```
1. `<colgroup>`
2. `<col>`