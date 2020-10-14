<template>
<div>

    <div class="row">

        <div class="content-box bg-light col-10 d-block m-auto">
            <h1 class="text-center weather_title">{{ location.name }}</h1>
            <div class="row">
                <div class="col-md-6">
                    <h3 class="weather_date">{{updateTime('date')}}</h3>
                    <h2 class="weather_time">{{updateTime('time')}}pm</h2>
                    <h4 class="secondary_info">Humidity: {{ current.humidity }}%</h4>
                    <h4 class="secondary_info">Pressure: {{ current.pressure_mb }}</h4>
                    <h4 class="secondary_info">Wind: {{ current.wind_mph }} mph</h4>
                </div>
                <div class="col-md-6">
                    <img class="weather_icon" src="//cdn.weatherapi.com/weather/64x64/day/143.png" alt="">

                    <h2 class="text-center temp">{{ current.temp_f }}f</h2>
                    <h4 class="secondary_info">Feels Like {{current.feelslike_f}}f</h4>
                    <h4 class="secondary_info">cloudy</h4>
                </div>
            </div>

        </div>

    </div>
    <button @click="getWeather(query)" class="btn btn-success">Check Api</button>

</div>
</template>

<script>
// http://api.weatherstack.com/current?access_key=fcffe13ef0115ba41e0fbb1153981046&query=New%20York
import { bus } from '../../main';

export default {
    data() {
        return {
            forecast: {},
            current: {},
            location: {},
            query: "New York",
            days: 2,
            timestamp: String

        }
    },
    methods: {
        getWeather(query) {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=1590231e5d674493844164905201310&q=${query}&days=${this.days}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })

                .then((data) => {
                    this.isLoading = false;
                    this.location = data.location;
                    this.current = data.current;
                    this.forecast = data.forecast.forecastday;

                    console.log(this.current)

                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = "Failed to fetch data - please try again later";
                });
        },
        updateTime(type) {
            let today, time, date;
            if (type == 'time') {
                today = new Date();
                time = today.getHours();
                if (time <= 12) {
                    return time + ":" + today.getMinutes()
                } else {
                    return time - 12 + ":" + today.getMinutes();
                }
            } else if (type == 'date') {
                today = new Date();
                date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                return date;

            }

        },
        
    },
    computed: {
        getSearch(){
          bus.$on('query',(data) =>{
            this.query = data;
          })
        }
    },
    mount() {
      this.getWeather();
    }
}
</script>

<style lang="scss" scoped>
.row {
    margin: 3rem;
}

.weather_ {
    &date {
        font-size: 2rem;
        margin-top: 2rem;
    }

    &time {
        font-size: 5rem;
    }

    &icon {
        width: 8rem;
    }

    &title {
        font-size: 3rem;
        border-bottom: solid #0000001f;
        padding-bottom: 1rem;
    }
}

.secondary_info {
    color: #00000075;
}

.temp {
    font-size: 4rem;
}

</style>
