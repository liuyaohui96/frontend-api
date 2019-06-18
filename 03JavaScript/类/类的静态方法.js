/**
 * 调用发生typeerror
 * colorChange方法是静态的。 静态方法仅在创建它们的构造函数中存在，
 * 并且不能传递给实例去调用
 */

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
freddie.colorChange('orange');
