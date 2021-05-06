// pages/courses/courses.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList:[
      {
        id:"COMP228",
        title:"COMP 228  System Hardware ",
        credits:"3",
        content:"Prerequisite: COMP 248; MATH 203 or Cegep Mathematics 103 or NYA previously or concurrently; MATH 204 or Cegep Mathematics 105 or NYC previously or concurrently. Levels of system abstraction and von Neumann model. Basics of digital logic design. Data representation and manipulation. Instruction set architecture. Processor internals. Assembly language programming. Memory subsystem and cache management. I/O subsystem. Introduction to network organization and architecture. Lectures: three hours per week. Tutorial: two hours per week. ",
        notes:"NOTE: Students who have received credit for SOEN 228 may not take this course for credit."
      }
    ]
  },
  goToCSDetail:function(e){
    //get data-id from <view>
    let id = e.currentTarget.dataset.id;
    // console.log('data-id: ', e)
    //jump to csDetail page
    wx.navigateTo({
      url: '../csDetail/csDetail?id=' + id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getNewCoursesList();
    this.setData({
      courseList:list
    })
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