传统的diff算法是利用循环递归的方式对所有节点依次对比,算法的复杂度为O(n * n * n),其中n为节点总数

1.  tree diff：分层比较，层级控制。
  - 同一父节点的全部子节点，进行比较
    - 发现某一子节点不在了直接删除该节点以及其所有子节点
  - DOM节点跨层级的移动操作。React diff很‘暴力’的节点以及其所有子节点删除，然后再相应节点创建新的该节点


2.  component diff
  - 对于不同一类型组件，即使结构相似，如果是不同类型的组件，就不会比较二者的结构，而是直接删除旧的component，创建新的component
  - 对于同一类型组件。用shouldComponentUpdate()判断Virtual DOM是否发生了变化，若没有变化就不需要在进行diff，这样可以节省大量时间，若变化了，就对相关节点进行update

3. element diff。通过设置唯一 key的策略，对 element diff 进行算法优化


建议：保持稳定的DOM结构有助于性能的提升