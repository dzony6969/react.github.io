import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp- 273);
        const pressure = cityData.list.map(pressure => pressure.main.pressure);
        const humidity = cityData.list.map(hum => hum.main.humidity);
        const {lon, lat} = cityData.city.coord //es6 ulatwia dostep do lon i lat
        return (
            <tr key={name} >
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} units='°C ~średnio' color='orange' /></td>
                <td><Chart data={pressure} units='hPa' color='red' /></td>
                <td> <Chart data={humidity} units='%' color='blue'/></td>
                </tr>

        )

    }
    render() {
        return (
            <table className='table table-hober'>
            <thead>
                <tr>
                    <th>Miasto</th>
                    <th>Temperatura °C</th>
                    <th>Ciśnienie (hPa)</th>
                    <th>Wilgoć (%)</th>
                    </tr>
                    </thead>
                        <tbody>
                            {this.props.weather.map(this.renderWeather)}
                        </tbody>

</table>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather} //index.js w reducer
}

export default connect(mapStateToProps)(WeatherList);