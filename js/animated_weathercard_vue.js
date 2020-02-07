var vm = new Vue({
	el:'#app',
	data:{
		temperature:0,
		strDate:'Friday 07 February',
		strSummary:'Snow',
		atmPressure:0,
		humidity:0,
		weather:[
					{ type: 'snow', name: 'Snow'}, 
					{ type: 'wind', name: 'Windy'}, 
					{ type: 'rain', name: 'Rain'}, 
					{ type: 'thunder', name: 'Storms'},
					{ type: 'sun', name: 'Sunny'}
				]
	},
	computed:{
		changeData : function(){
			this.temperature = -5;
			this.strDate = 'Saturday 08 February';
			this.strSummary = this.weather[1].name;
			
			//changeWeather(this.weather[1]);
		},
	}
})