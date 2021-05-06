// index.js
var common = require('../../utils/common.js')

Page({
  data: {
    src:['/images/Concordia-logo.jpeg','/images/logoENCS.jpeg','/images/picker.png'],
    multiArray:[
      ['COMP','SOEN'],
      ['228','232','233','248','249','335','345','346','348',
    '352','353','354','367','371','376','432','472']
    ],
    multiIndex: [0,0]

  },
  bindMultiPickerChange:function(e){
    console.log('picker send: ', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },

  bindMultiPickerColumnChange:function(e){
    // console.log('modified column is: ', e.detail.column, ' value is: ', e.detail.value);
    var data ={
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    
    switch(data.multiIndex[0]){
      case 0:
        data.multiArray[1] =  ['228','232','233','248','249','335','345','346','348',
        '352','353','354','367','371','376','432','472'];
        break;
            
      case 1:
        data.multiArray[1] = ['287','321','331'];
        break;  
    }
    

    // console.log('data->multiIndex: ',data.multiIndex);
    this.setData(data);

  },

  searchCourse:function(e){
    let csID = "";
    csID = this.data.multiArray[0][this.data.multiIndex[0]] + this.data.multiArray[1][this.data.multiIndex[1]];
    
    console.log('The csID is: ',csID)
    //微信跳转
    wx.navigateTo({
      url: '../csDetail/csDetail?id=' + csID,
    })
    // recall common.js to search csID

  },

  // 事件处理函数
  
  onLoad() {
    
  }
  
})
