import React, { Component } from 'react';
import { Table, Tag, Button, Card, Popconfirm, message, Modal, Input, Spin, Alert } from 'antd';

class searchbook extends Component {
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
                title: '书名',
                dataIndex: 'name',
                key: 'name'

            },
            {
                title: '作者',
                dataIndex: 'auctor',
                key: 'auctor'

            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price'

            },
            {
                title: '类别',
                dataIndex:'booktype',
                key: 'booktype'

            },
            {
                title: '描述',
                dataIndex: 'desc',
                key: 'desc'

            },
           
           

        ]
    };

    

    
    
    componentDidMount() {
        console.log(this);
        
        // console.log(this.props.location.state);
        const list =this.props.location.state
        if(list){
            localStorage.setItem('hehe',JSON.stringify (list))
        }
        
        console.log( 'list',list);
        // let {datasouce}=this.state
        const  xixi= JSON.parse( localStorage.getItem('hehe'))
        this.setState({datasouce:xixi})
        // console.log(this.state.datasouce);
        
        
        
        
    }
    render() {
        let { columns, datasouce, spinning } = this.state
        // console.log(datasouce); 
        return (
            <Card title='查询到的书籍' hoverable='true' >
                <Spin spinning={spinning}>
                    <Table columns={columns} dataSource={datasouce}
                        scroll={{ y: 350 }}
                        rowKey='_id'
                    ></Table>
                </Spin>
            </Card>
        );
    }
}

export default searchbook;