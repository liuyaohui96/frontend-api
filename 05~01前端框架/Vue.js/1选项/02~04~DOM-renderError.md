
## renderError
1. 类型： `(createElement: () => VNode, error: Error) => VNode`
2. 描述：只能在开发者环境下工作。当默认的render函数遇到错误，提供替代的render 的输出，配合热加载(hot-reload)特别有用。