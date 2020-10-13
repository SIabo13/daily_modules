<template>
  <h1 class="text-light">Forecast Page</h1>
</template>

<script>
// http://api.weatherstack.com/current?access_key=fcffe13ef0115ba41e0fbb1153981046&query=New%20York

export default {
  methods:{
    getWeather(){
      fetch('http://api.weatherstack.com/current?access_key=fcffe13ef0115ba41e0fbb1153981046&query=New%20York')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })

                .then((data) => {
                    this.isLoading = false;
                    console.log(data)
                   
                })
                .catch((error) => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = "Failed to fetch data - please try again later";
                });
    }
  },
  mount(){
    this.getWeather();
  }
}
</script>

<style lang="scss" scoped>

</style>