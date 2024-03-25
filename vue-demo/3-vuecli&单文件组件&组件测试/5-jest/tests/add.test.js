// jest -> global test
const {
  add
} = require('../index.js')

describe('add', () => {
  test('1+=2', () => {
    // given -> 准备数据
    const a = 1
    const b = 1
    const result = add(a, b)

    // toBe -> 匹配器
    // then -> 验证
    expect(result).toBe(2)
  })

  it(" 2+2=4", () => {
    const a = 2;
    const b = 2;

    // when -> 触发动作
    const result = add(a, b);

    // toBe -> 匹配器
    // then -> 验证
    expect(result).toBe(4);
  });
})

describe("string", () => {
  test("string  hello", () => {
    expect("hello world").toContain("hello");
  });
});