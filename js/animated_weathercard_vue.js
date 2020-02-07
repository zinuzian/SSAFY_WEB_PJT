var vm = new Vue({
	el:'#app',
	data:{
		temperature:0,
		strDate:'Wednesday 1 Jan',
		Summary:0,
		atmPressure:0,
		humidity:0,
		weather:[
			{ type: 'snow', name: 'Snow'}, 
			{ type: 'wind', name: 'Windy'}, 
			{ type: 'rain', name: 'Rain'}, 
			{ type: 'thunder', name: 'Storms'},
			{ type: 'sun', name: 'Sunny'}
		],
		buttonId:[
			"button-snow",
			"button-wind",
			"button-rain",
			"button-thunder",
			"button-sun",
		],
		weatherIcon:[
			"wi wi-snow",
			"wi wi-strong-wind",
			"wi wi-rain",
			"wi wi-lightning",
			"wi wi-day-sunny",
		],
		wday:[
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		months:[
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		]
	},methods:{
		setData : function(t,s,p,h){
			var today = new Date();
			this.temperature = t;
			this.strDate = this.getStrDate(today);
			this.Summary = s;
			this.atmPressure = p;
			this.humidity = h;
			return $("#"+this.buttonId[s]).trigger('click');
		},
		getStrDate: function(date){
			var wd = date.getDay();
			var d = date.getDate();
			var m = date.getMonth();
			return "" + this.wday[wd] + " " + d + " " + this.months[m];
		}
	},
	computed:{
		
	}

});