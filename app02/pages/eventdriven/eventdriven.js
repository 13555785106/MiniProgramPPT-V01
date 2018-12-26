Page({
  data: {},
  clickme(event) {
    console.log(event)
    this.setData({
      hi: event.currentTarget.dataset.hi,
      name: event.currentTarget.dataset.name,
      date: new Date().getTime()
    })
  },
  handleTap1(event) {
    console.log('handleTap1')
    console.log(event)
  },
  handleTap2(event) {
    console.log('handleTap2')
    console.log(event)
  },
  handleTap3(event) {
    console.log('handleTap3')
    console.log(event)
  },
  handleTap4(event) {
    console.log('handleTap4')
    console.log(event)
  },
})