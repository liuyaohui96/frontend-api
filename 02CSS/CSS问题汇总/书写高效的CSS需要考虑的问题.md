## 书写高效的CSS需要考虑的问题
1. 样式从右往左解析选择器
2. 解析速度：ID > class > element > universal；虽然ID选择器速度最快，但是会降低代码的可读性，不方便维护
3. 不需要用标签限制ID选择器，因为ID已经是唯一的
4. 后代选择器是低效的


1. 避免过度约束，避免不必要的重复，尽可能的精简规则，合并不同类里的重复规则
2. 选择符:避免后代选择符，避免链式选择符;避免！important，可以选择其他选择器
3. 由于display的作用，某些样式组合会无效，正确使用display的属性
  * display:inline后不应该再使用width、height、margin、padding以及float
  * display:inline-block后不应该再使用float
  * display:block后不应该再使用vertical-align
  * display:table-*后不应该再使用margin或者float
6. 不滥用web字体。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能
7. 不声明过多的font-size：这是设计层面的问题，设计精良的页面不会有过多的font-size声明。