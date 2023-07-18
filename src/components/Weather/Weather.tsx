import React from 'react'
import { useTranslation } from 'react-i18next';

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
}

const Weather = ({ current_temp, min_temp, max_temp, feels_like, pressure, humidity, city, weather, wind_speed }: WeatherProps) => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <h1> {t("city")} {city}</h1>
            <h3> {t("weather")} {weather}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <h3 style={{margin: '0px 4px'}}> {t("current_temp")} {Math.round(current_temp)}°C</h3>
                <h3 style={{margin: '0px 4px'}}>{t("feels_like")} {Math.round(feels_like)}°C</h3>
                <h3 style={{margin: '0px 4px'}}> {t("min_temp")} {Math.round(min_temp)}°C</h3>
                <h3 style={{margin: '0px 4px'}}> {t("max_temp")} {Math.round(max_temp)}°C</h3>
            </div>
            <h3> {t("humidity")} {humidity}%</h3>
            <h3> {t("pressure")} {pressure * 0.75} {t("humidity_esm")}</h3>
            <h3> {t("wind_speed")} {wind_speed} {t("ms")}</h3>

        </div>
    )
}

export default Weather