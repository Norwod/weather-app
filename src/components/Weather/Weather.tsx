import React from 'react'
import { useTranslation } from 'react-i18next';

import { Card, Space, Typography } from 'antd';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WeatherData from '../ UI/WeatherData/WeatherData';

const { Title, Text } = Typography;

export interface WeatherProps {
    current_temp: number;
    min_temp: number;
    max_temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    city: string;
    weather: string;
    wind_speed: number;
    visibility: number;
    language: string;
}

const Weather = ({ current_temp, min_temp, max_temp, feels_like, pressure, humidity, city, weather, wind_speed, visibility, language }: WeatherProps) => {
    const date = new Date();
    const { t, i18n } = useTranslation();
    return (
        // <div>
        //     <h1> {t("city")} {city}</h1>
        //     <h3> {t("weather")} {weather}</h3>
        //     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        //         <h3 style={{margin: '0px 4px'}}> {t("current_temp")} {Math.round(current_temp)}°C</h3>
        //         <h3 style={{margin: '0px 4px'}}>{t("feels_like")} {Math.round(feels_like)}°C</h3>
        //         <h3 style={{margin: '0px 4px'}}> {t("min_temp")} {Math.round(min_temp)}°C</h3>
        //         <h3 style={{margin: '0px 4px'}}> {t("max_temp")} {Math.round(max_temp)}°C</h3>
        //     </div>
        //     <h3> {t("humidity")} {humidity}%</h3>
        //     <h3> {t("pressure")} {pressure * 0.75} {t("humidity_esm")}</h3>
        //     <h3> {t("wind_speed")} {wind_speed} {t("ms")}</h3>

        // </div>
        <div>
            {/* <Space direction="vertical">
                <Title> {t("city")} {city}</Title>
                <Text> {t("weather")} {weather}</Text>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Text style={{ margin: '0px 4px' }}> {t("current_temp")} {Math.round(current_temp)}°C</Text>
                    <Text style={{ margin: '0px 4px' }}>{t("feels_like")} {Math.round(feels_like)}°C</Text>
                    <Text style={{ margin: '0px 4px' }}> {t("min_temp")} {Math.round(min_temp)}°C</Text>
                    <Text style={{ margin: '0px 4px' }}> {t("max_temp")} {Math.round(max_temp)}°C</Text>
                </div>

                <Text> {t("humidity")} {humidity}%</Text>
                <Text> {t("pressure")} {pressure * 0.75} {t("humidity_esm")}</Text>
                <Text> {t("wind_speed")} {wind_speed} {t("ms")}</Text>

            </Space> */}

            <Card size='small'>
                <Title style={{ margin: 0 }} level={3} > {city}</Title>
                <Title style={{ margin: '16px' }} level={3}>{date.getDate()} {date.toLocaleString( `${language}` , { month: 'long' })} {date.getFullYear()}</Title>
                <Title style={{ margin: '16px' }} >{Math.round(current_temp)}°C</Title>
                <Title style={{ margin: '16px' }} level={3}>{weather}</Title>
                <div style={{ display: 'flex', justifyContent: 'space-around', margin: '16px' }}>
                    <WeatherData icon={<ThermostatIcon style={{ color: 'white', width: '32px', height: "32px" }} />}>
                        <Text>{t("current_temp")}</Text>
                        <Text> {t("min_temp")} {Math.round(min_temp)}°C / {t("max_temp")} {Math.round(max_temp)}°C</Text>
                    </WeatherData>
                    <WeatherData icon={<AirRoundedIcon style={{ color: 'white', width: '32px', height: "32px" }} />}>
                        <Text>{t("wind_speed")} </Text>
                        <Text>{wind_speed} {t("ms")}</Text>
                    </WeatherData>
                    <WeatherData icon={<WaterDropIcon style={{ color: 'white', width: '32px', height: "32px" }} />}>
                        <Text> {t("humidity")}</Text>
                        <Text>{humidity}%</Text>
                    </WeatherData>
                    <WeatherData icon={<VisibilityIcon style={{ color: 'white', width: '32px', height: "32px" }} />}>
                        <Text> Visibility </Text>
                        <Text>{visibility / 1000} km</Text>
                    </WeatherData>

                </div>
            </Card >

        </div >
    )
}

export default Weather