import React from 'react'
import { Alert } from 'antd';

export default function Alerts(props) {
    return (
        <div>
              <Alert message={props.Error} style={{width:"290px",top:props.top,left:props.left}} type="error" />
        </div>
    )
}
