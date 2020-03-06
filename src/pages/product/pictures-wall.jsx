import React, { Component } from 'react'
import { Upload, Modal,message } from 'antd';

import { UploadOutlined } from '@ant-design/icons';


/* 用于图片上传的组件 */
class PicturesWall extends Component {

 

 const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};

 



 
  

  render() {
  
   
    return (
      <div>
    <Upload {...props}>
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
 
  </div>,
    );
  }
}
export default PicturesWall;