// pages/demo2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberArr:[{
      member:'aspectFill',
      src:"./../../icons/member/member_icon.png",
    },
    {
      member:'aspectFill',
      src:"./../../icons/member/member_icon.png",
    },
    {
      member:'aspectFill',
      src:"./../../icons/member/member_icon.png",
    },],
    navArr:[{
      member:'aspectFit',
      src:"./../../icons/nav/nav1.png",
    },
    {
      member:'aspectFit',
      src:"./../../icons/nav/nav2.png",
    },
    {
      member:'aspectFit',
      src:"./../../icons/nav/nav3.png",
    },
    {
      member:'aspectFit',
      src:"./../../icons/nav/nav4.png",
    },],
    bannerArr:[{
      menber:'aspectFit',
      src:"/icons/banner/banner1.jpg"
    },
    {
      menber:'aspectFit',
      src:"/icons/banner/banner2.jpg"
    },
    {
      menber:'aspectFit',
      src:"/icons/banner/banner3.jpg"
    },],
    itemArr:[{
      src:"/icons/item/item1.png",
      oldPice:"30",
      newPice:"20",
      itemId:"",
    },
    {
      src:"/icons/item/item2.png",
      oldPice:"30",
      newPice:"20",
      itemId:"",
    },
    {
      src:"/icons/item/item3.png",
      oldPice:"90",
      newPice:"30",
      itemId:"",
    },
    {
      src:"/icons/item/item1.png",
      oldPice:"10",
      newPice:"20",
      itemId:"",
    },
    {
      src:"/icons/item/item2.png",
      oldPice:"",
      newPice:"",
      itemId:"",
    },
    {
      src:"/icons/item/item3.png",
      oldPice:"",
      newPice:"",
      itemId:"",
    },]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("data:" + JSON.stringify(options));

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let itemArr = this.data.itemArr;
    this.data.itemArr.concat(itemArr);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})