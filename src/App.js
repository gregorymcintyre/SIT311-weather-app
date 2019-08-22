import React from 'react';
import './App.css';
import WeatherInfoComponent from './WeatherInfoComponent';

const fetch = require("node-fetch");

const API_KEY = 'deeccb2a2a33162688a21b572e0b0886';

class App extends React.Component {
	state = {
		city : "Cairns",
		cloudDescription : undefined,
		mainTemp : undefined,
		mainPressure : undefined,
		mainHumidity : undefined,
		mainMinTemp : undefined,
		mainMaxTemp : undefined,
		windSpeed : undefined,
		windDirection : undefined,
		sysSunrise : undefined,
		sysSunset : undefined,
		
	}
	
	handleChanges = (event) =>
	{
		this.setState({
			city:event.target.value
		})
		
	}
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<label for="city">City </label>
					<input id={"City"}
						 type='text'
						 value={this.state.city}
						 onChange={this.handleChanges}/>
						 
					<input type="button"
						onClick={this.getWeather}
						value={'Get Weather'}/>
					
					<div className="App-content">
						<WeatherInfoComponent 
							city={this.state.city}
							cloudDescription = {this.state.cloudDescription}
							mainTemp = {this.state.mainTemp}
							mainPressure = {this.state.mainPressure}
							mainHumidity = {this.state.mainHumidity}
							mainMinTemp = {this.state.mainMinTemp}
							mainMaxTemp = {this.state.mainMaxTemp}
							windSpeed = {this.state.windSpeed}
							windDirection = {this.state.windDirection}
							sysSunrise = {this.state.sysSunrise}
							sysSunset = {this.state.sysSunset}
						/>
					</div> 
				
				</header>
			</div>
		)
	}
	
	getWeather = () =>
	{
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=metric`)
			.then(response => response.json())
			.then(data => {
				this.setState({
					weather : data,
					city : data.name,
					cloudDescription : data.weather[0].description,
					mainTemp : data.main.temp,
					mainPressure : data.main.pressure,
					mainHumidity : data.main.humidity,
					mainMinTemp : data.main.temp_min,
					mainMaxTemp : data.main.temp_max,
					windSpeed : data.wind.speed,
					windDirection : data.wind.deg,
					sysSunrise : data.sys.sunrise,
					sysSunset : data.sys.sunset
				})
			})
			.catch(error => {
			
			})
	}
}

export default App;
