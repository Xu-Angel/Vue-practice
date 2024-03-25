// jest -> global test
const {
  add
} = require('../index.js')

describe('add', () => {
  it('1+=2', () => {
    // given -> 准备数据
    const a = 1
    const b = 1
    const result = add(a, b)

    // toBe -> 匹配器
    // then -> 验证
    expect(result).toBe(2)
  })
})