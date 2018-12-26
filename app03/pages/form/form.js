Page({
  formSubmit(e) {
    console.log(e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.name)
    console.log(e.detail.value.age)
  },
  formReset(e) {
    console.log(e)
    console.log('form发生了reset事件')
  }
})