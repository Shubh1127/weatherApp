apikey = "c190936c72e53edaff0d21041094ef10";
        apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


        let button=document.querySelector("button")
        let input=document.querySelector("input")
        let img=document.querySelector(".icon");
        // let h1=document.querySelector("h1")

        button.addEventListener("click",()=>{
            checkWeather(input.value);
        })


        async function checkWeather(city){
            try{
            const res= await axios.get(apiurl + city +`&appid=${apikey}`);
             let data= await res;
             
            document.querySelector(".temp").innerHTML=Math.round(res.data.main.temp)+ "°C"
            document.querySelector(".city").innerHTML=res.data.name
            document.querySelector(".humidity").innerHTML=`${res.data.main.humidity} %`
            document.querySelector(".wind").innerHTML=`${res.data.wind.speed} Km/h`
            // console.log(res.data.weather[0].main)
            if(res.data.weather[0].main=="Clouds"){
                img.src="images/clouds.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else if(res.data.weather[0].main.main=="Rain"){
                img.src="images/rain.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else if(res.data.weather[0].main=="Drizzle"){
                img.src="images/drizzle.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else if(res.data.weather[0].main=="Mist"){
                img.src="images/mist.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else if(res.data.weather[0].main=="Haze"){
                img.src="images/haze.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else if(res.data.weather[0].main=="Clear"){
                img.src="images/clear.png";
                document.querySelector("h3").innerHTML=res.data.weather[0].main
            }
            else{
                console.log("not found")
            }
            }
            catch{
                console.log("error")
            }
        }