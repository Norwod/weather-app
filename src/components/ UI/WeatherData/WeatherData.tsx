import React from 'react'
import { Card, Space, Typography } from 'antd';
const { Title, Text } = Typography;

const WeatherData = ({icon, children}:any) => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                width: '64px', height: "64px", background: "rgba(37, 34, 34, 0.5)", borderRadius: "10px", display: "flex",
                alignItems: "center", justifyContent: "center", marginRight: "16px"
            }}>
                {/* <VisibilityIcon style={{ color: 'white', width: '32px', height: "32px" }} /> */}
                {icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {children}
            </div>

        </div>
    )
}

export default WeatherData