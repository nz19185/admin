import React, { Component } from 'react';
import { Table, Tag, Button, Card, Popconfirm, message, Modal, Input, Spin, Alert } from 'antd';
import api from '../../../api/admin.js'
import { ApiFilled } from '@ant-design/icons';
class Adminlist extends Component {
    state = {
        datasouce: [],
        visible: false,
        spinning: false,
        inputVla:[],
        _id:'',
        columns: [
            {
                title: '_id',
                dataIndex: '_id',
                key: '_id'

            },
            {
                title: '账户',
                dataIndex: 'us',
                key: 'us'

            },
            {
                title: '操作',
                key: 'action',
                render: (recode) => {
                    return (
                        // 气泡确认框
                        <div>
                            <Popconfirm
                                title='您确认要删除这个管理吗'
                                onCancel={() => {
                                    message.error('取消删除')
                                }}
                                onConfirm={() => {
                                    this.deladmin(recode._id)
                                }}
                            >
                                <Button danger='true' >删除</Button>
                            </Popconfirm>
                            <Button type="primary" onClick={()=>{
                                // console.log(recode._id);
                                this.setState({
                                        visible: true,
                                        _id:recode._id
                                        });
                                
                            }}>
                                更改密码
                           </Button>
                            <Modal
                                title="更改您的密码"
                                visible={this.state.visible}
                                onOk={() => {
                                    // console.log(recode);
                                    this.setState({
                                        visible: false,
                                    });
                                     this.updateps({_id:this.state._id,ps:this.state.inputVla})

                                }}
                                onCancel={this.handleCancel}

                            >
                                <p>输入您的新密码</p>
                                <Input.Password placeholder="input password"  onChange={(e)=>{
                                    this.setState({inputVla:e.target.value})
                                    // console.log(e.target.value);
                                    
                                }} />
                            </Modal>


                        </div>

                    )
                }

            }

        ]
    };

    // showModal = (recode) => {
    //     this.setState({
    //         visible: true,
    //     });
    // };

    //   handleOk = (e) => {
    //     // console.log(e);
    //     this.setState({
    //       visible: false,
    //     });
    //     // this.updateps(_id)
    //   };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    //获取管理员列表
    getList = async () => {
        this.setState({ spinning: true })
        let result = await api.adminList()
        //   console.log(result);
        //   let list =result.lsit
        //   console.log(list);

        this.setState({ datasouce: result.lsit, spinning: false })

    }
    //删除管理员
    deladmin = async (_id) => {
        console.log(_id);

        let result = await api.deladmin({ _id })
        let { code } = result
        if (code == 0) {
            message.success('删除成功')
            this.getList();


        } else {
            return false
        }
        //  this.getList();
        //  console.log(result);
    }

    //修改密码
    updateps = async (obj) => {
          console.log(obj);  
        let result = await api.updatePs(obj)
        console.log(result);
    }
    componentDidMount() {
        this.getList();
    }
    render() {
        let { columns, datasouce, spinning } = this.state
        // console.log(datasouce); 
        return (
            <Card title='管理员管理' hoverable='true' >
                <Spin spinning={spinning}>
                    <Table columns={columns} dataSource={datasouce}
                        scroll={{ y: 400 }}
                        rowKey='_id'
                    ></Table>
                </Spin>
            </Card>
        );
    }
}

export default Adminlist;