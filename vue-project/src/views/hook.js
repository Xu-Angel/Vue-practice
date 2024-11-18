// 组合式函数 https://cn.vuejs.org/guide/reusability/composables.html
import { ref, onMounted, onUnmounted } from 'vue'
// 如你所见，核心逻辑完全一致，我们做的只是把它移到一个外部函数中去，并返回需要暴露的状态。和在组件中一样，你也可以在组合式函数中使用所有的组合式 API。现在，useMouse() 的功能可以在任何组件中轻易复用了。
更酷的是，你还可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。这使得我们可以像使用多个组件组合成整个应用一样，用多个较小且逻辑独立的单元来组合形成复杂的逻辑。实际上，这正是为什么我们决定将实现了这一设计模式的 API 集合命名为组合式 API。
export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))
  useEventListener(window, 'mousemove', update)
  return {
    x,
    y
  }
}

export function useEventListener(target, event, callback) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}

export function useFetchStandard(url) {
  const data = ref(null)
  const error = ref(null)
// 如果你正在编写一个可能被其他开发者使用的组合式函数，最好处理一下输入参数是 ref 或 getter 而非原始值的情况。可以利用 toValue() 工具函数来实现：
  const fetchData = () => {
    // reset state before fetching..
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}

// 组合式函数只能在 <script setup> 或 setup() 钩子中被调用。在这些上下文中，它们也只能被同步调用。在某些情况下，你也可以在像 onMounted() 这样的生命周期钩子中调用它们。

这些限制很重要，因为这些是 Vue 用于确定当前活跃的组件实例的上下文。访问活跃的组件实例很有必要，这样才能：

将生命周期钩子注册到该组件实例上

将计算属性和监听器注册到该组件实例上，以便在该组件被卸载时停止监听，避免内存泄漏。