// 全局执行上下文绑定
GlobalExectionContext = {
  ThisBinding: globalObject, // 绑定为全局对象
  // 创建词法环境
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: 'Object'
      // 在这里绑定标识符
      // let const 变量，未被初始化
      // 函数
    },
    outer: null
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: 'Object'
      // 在这里绑定var 变量标识符，初始化为undefined
    },
    outer: null
  }
}

// 函数执行上下文
FunctionExectionContext = {
  ThisBinding: object, // 绑定this对象

  // 创建词法环境
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: 'Declarative'
      // 在这里绑定标识符
      // let const 变量，未被初始化
      // 函数
    },
    outer: OuterLexicalEnvironment
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: 'Declarative'
      // 在这里绑定var 变量标识符，初始化为undefined
    },

    outer: OuterLexicalEnvironment
  }
}
