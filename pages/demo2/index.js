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
      src:"/icons/fruits/fruits1.png",
      oldPice:"30",
      newPice:"20",
      itemId:"1001",
      lab:"苹果",
    },
    {
      src:"/icons/fruits/fruits2.png",
      oldPice:"30",
      newPice:"20",
      itemId:"1002",
      lab:"草莓",
    },
    {
      src:"/icons/fruits/fruits3.png",
      oldPice:"90",
      newPice:"30",
      itemId:"1003",
      lab:"樱桃",
    },
    {
      src:"/icons/fruits/fruits4.png",
      oldPice:"10",
      newPice:"20",
      itemId:"1004",
      lab:"葡萄",
    },
    {
      src:"/icons/fruits/fruits5.png",
      oldPice:"30",
      newPice:"30",
      itemId:"1005",
      lab:"水果",
    },
    {
      src:"/icons/fruits/fruits6.png",
      oldPice:"30",
      newPice:"30",
      itemId:"1006",
      lab:"凤梨",
    },
    {
      src:"/icons/fruits/fruits7.png",
      oldPice:"30",
      newPice:"30",
      itemId:"1006",
      lab:"橙子",
    },
    {
      src:"/icons/fruits/fruits8.png",
      oldPice:"30",
      newPice:"50",
      itemId:"1006",
      lab:"水果",
    },
    {
      src:"/icons/fruits/fruits9.png",
      oldPice:"50",
      newPice:"70",
      itemId:"1006",
      lab:"水果",
    },]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("data:" + JSON.stringify(options));
    console.log("onLoad:");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("daonReadyta:");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },

  /**
   * 点击添加 +
   */
  addItem:function(event) {
    let id = event.currentTarget.id;
    console.log("addItem:" + id);
  },

 /**
 * 点击图片跳转到对应详情
 */
  itemDetails:function(event) {
    let id = event.currentTarget.id;
    console.log("details id:" + id);
    // wx.switchTab({
    //   url: '../demo4/index',
    // })
    let info;
    for(let i = 0; i < this.data.itemArr.length; ++i)
    {
      if(this.data.itemArr[i].itemId == id){
        info = this.data.itemArr[i];
        continue;
      }
    }
    wx.redirectTo({
      url: '/pages/detailsItem/index?info=' + JSON.stringify(info),
    })
    // let itemArr = this.data.itemArr;
    // let info = {
    //   src:"/icons/item/item3.png",
    //   oldPice:"90",
    //   newPice:"30",
    //   itemId:"1003",
    //   lab:"文本3",
    // }
    // this.data.itemArr.push(info);

    // this.setData(this.data);
  },

})