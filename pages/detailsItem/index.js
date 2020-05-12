// pages/detailsItem/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerArr:[{
      menber:'aspectFill',
      src:"/icons/banner/banner1.jpg"
    },
    {
      menber:'aspectFill',
      src:"/icons/banner/banner2.jpg"
    },
    {
      menber:'aspectFill',
      src:"/icons/banner/banner3.jpg"
    },],
    infoDetails:[{
      name:"B级-水晶富士 （中） 1份 / 520-600g",
      tips:"提示信息",
      pice:2.66,
      integral:5,
      integral:false,
    },],
    imgArr:[{
      src:"/icons/details/timg2.jpg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let info = JSON.parse(options.info);
    var i = 0;
    for(let i = 0; i < this.data.bannerArr.length; ++i)
    {
      let banner = this.data.bannerArr[i];
      banner.src = info.src;
      this.data.bannerArr[i] = banner;
    }
    this.setData(this.data)
    // this.setData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var i = 0;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var i = 0;
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
    console.log("onShare");
  },

  /**
   * 点击购买
   */
  onBuyShopping: function () {
    console.log("onBuyShopping");
    
  }


})