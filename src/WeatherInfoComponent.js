import React from 'react';
import PropTypes from 'prop-types';

class WeatherInfoComponent extends React.Component {

	render() {
/*
		return (
			<React.Fragment>
				<p>{JSON.stringify(this.props.weather)}</p>
			</React.Fragment>
		)
*/		


		return (

			<React.Fragment>
				<h1 >Weather in {this.props.city}</h1>
				

				
				<h2>{this.props.mainTemp} degrees Celcius</h2>
				
				<table>
					<tr>
						<td>Minimum Temp</td>
						<td>{this.props.mainMinTemp} degrees Celcius</td>
					</tr>				
					<tr>
						<td>Maximum Temp</td>
						<td>{this.props.mainMaxTemp} degrees Celcius</td>
					</tr>
					<tr>
						<td>Wind</td>
						<td>Wind speed of {this.props.windSpeed} km/h at {this.props.windDirection} degrees</td>
					</tr>
					<tr>
						<td>Cloudiness</td>
						<td>{this.props.cloudDescription}</td>
					</tr>
					<tr>
						<td>Pressure</td>
						<td>{this.props.mainPressure} hpa</td>
					</tr>
					
					<tr>
						<td>Humidity</td>
						<td>{this.props.mainHumidity}%</td>
					</tr>
					<tr>
						<td>Sunrise</td>
						<td>
							{this.props.sysSunrise}
							<script> document.write(new Date({this.props.sysSunrise}).toLocaleDateString()); </script>
						</td>
					</tr>
					<tr>
						<td>Sunset</td>
						<td>
							{this.props.sysSunset}
							<script> document.write(new Date({this.props.sysSunset}).toLocaleDateString()); </script>
						</td>
					</tr>
				</table>
			</React.Fragment>
		)
	}
}

WeatherInfoComponent.propTypes = {
	weather : PropTypes.object,
}

export default WeatherInfoComponent;
