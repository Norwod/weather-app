import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Input, Space } from 'antd';
import Weather from './components/Weather/Weather';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';


function App() {

  const [city, setCity] = useState('');
  const [res, setRes] = useState<any>({});
  const [language, setLanguage] = useState('ru');
  const [history, setHistory] = useState<string[]>([]);
  const apiKey = '9d2f2ef83a9413199df042e88d942ec7';


  const inputChangeHandler = (e: any) => {
    setCity(e.target.value)
  }

  const searchHandler = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&units=metric&appid=9d2f2ef83a9413199df042e88d942ec7`)
      .then(response => response.json()).then(data => setRes(data));
    setHistory(prev => [...prev, city])
  }

  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&units=metric&appid=9d2f2ef83a9413199df042e88d942ec7`)
      .then(response => response.json())
      .then(data => setRes(data));
  }, [language])


  const changeLanguage = (lg: any) => {
    i18n.changeLanguage(lg)
    setLanguage(lg)
  }

  return (
    <div className='App'>
      <Space>
      <Button onClick={() => changeLanguage("en")}>en</Button>
      <Button onClick={() => changeLanguage("ru")}>ru</Button>
      </Space>
      

      <h1>Wearther App</h1>
      <div className='search'>
        <Input className='input' placeholder={t("placeholder")} onChange={inputChangeHandler} value={city}></Input>
        <Button type="primary" onClick={searchHandler}>{t('search')}</Button>
      </div>
      <div>
        {res.main
          ?
          <Weather
            current_temp={res.main.temp}
            min_temp={res.main.temp_min}
            max_temp={res.main.temp_max}
            feels_like={res.main.feels_like}
            pressure={res.main.pressure}
            humidity={res.main.humidity}
            city={res.name}
            weather={res.weather[0].description}
            wind_speed={res.wind.speed} />
          :
          <h2>
            {t("nothing_found")}

          </h2>
        }
      </div>
      <h2>{t("history")}</h2>
      {history.map(i => <h3 className='history' onClick={() => setCity(i)}>{i}</h3>)}
      <Footer />
    </div>
  );
}

export default App;
