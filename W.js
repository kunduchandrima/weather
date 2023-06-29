        const apikey = "26cb96012bc4824e740a5243a650386a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");


        async function checkWeather(city){
            const response = await fetch(apiUrl + city +` &appid=${apikey}`);
            let data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML =  data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            

            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_960_720.jpg";
            }
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRDZHlojL2li_g51nMYcn1rgSEJelyHjCmbCPrE7knQ&s";
            }
            else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222807.png";
            }
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vuOnT_PUz2l1eZJpJYT3tbKqrKKP-t1DzxOGmd0c-g&s";
            }
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "https://st5.depositphotos.com/35423868/64812/v/600/depositphotos_648127034-stock-illustration-filled-outline-cloud-rain-icon.jpg";
            }
        };   

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

        
