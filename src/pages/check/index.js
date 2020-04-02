import React, { Component } from 'react';
import { Result, Button } from 'antd';
import {withRouter} from 'react-router-dom'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=>{
                console.log(this);
                this.props.history.push('/login')    
            }}>登录才会显示页面哦</Button>}
          />
        );
    }
}

export default withRouter(index);