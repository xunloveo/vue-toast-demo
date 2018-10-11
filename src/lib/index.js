import ToastComponent from './vue-toast.vue'

let Toast = {}

// 插件必须定义install方法 方便Vue.use
Toast.install = function (Vue, options) {

  // 默认的配置
  let opt = {
    duration: 3000
  }

  // 覆盖默认的
  for (let key in options) {
    opt[key] = options[key]
  }

  // 扩展一个toast函数
  Vue.prototype.$toast = function (message, option) {

    // 如果自定义了 就覆盖默认的
    if (typeof option == 'object') {
      for (let key in options) {
        opt[key] = option[key]
      }
    }

    // 获取vue实例
    const ToastContainer = Vue.extend(ToastComponent)

    // 将实例挂载到 div上
    let instance = new ToastContainer().$mount(document.createElement('div'))

    instance.message = message
    instance.visible = true
    document.body.appendChild(instance.$el)

    // 隔相应的时间 消失
    setTimeout(() => {
      instance.visible = true
      document.body.removeChild(instance.$el)
    }, opt.duration);
  }

  // toast.show 方法
  Vue.prototype.$toast['show'] = function (message, option) {
    Vue.prototype.$toast(message, option)
  }

  // toast.success 方法
  Vue.prototype.$toast['success'] = function (message, option) {
    Vue.prototype.$toast(message, option)
  }

  // toast.info 方法
  Vue.prototype.$toast['info'] = function (message, option) {
    Vue.prototype.$toast(message, option)
  }

  // toast.error 方法
  Vue.prototype.$toast['error'] = function (message, option) {
    Vue.prototype.$toast(message, option)
  }
}

if (window.Vue) {
  Vue.use(Toast)
}

export default Toast