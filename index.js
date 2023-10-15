const lodApi= async (location)=>{
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a602b6c17068109c3ca9518466aa02e6&units=metric`)
    const data =await res.json();
    //console.log(data)
    displayWeather(data);
}
const displayWeather= (data,location)=>{
    
    const filldital=document.getElementById('data-fild');
    filldital.textContent='';
    const dital=document.createElement('div');
    dital.innerHTML=`
    <h1><i class="fa-solid fa-temperature-half"></i><span> ${data.main?.temp}</span></span>°C</h1>
    <!--<p>temp_min : <span>${data.main?.temp_min}</span>°C <br>temp_max : <span>${data.main?.temp_max}</span>°C</p>--> 
            <h2 id="weather">${data.weather[0]?.description}</h2>
            <h1 id="country">${data.name} in <span>${data.sys?.country}</span></h1>
            <div class="wind-speed">
                <div>
                    <p><i class="fa-solid fa-wind"></i></p>
                </div>
                <div>
                   <p><span id="wind">${data.wind?.speed}</span> km/h</p>
                    <p>wind speed</p>
                </div>
            </div>
    `

    filldital.appendChild(dital);
}

const searchButton=()=>{
    const inputs=document.getElementById('input-value');
    const inputText=inputs.value;
    //console.log(inputText);
    lodApi(inputText);
}

