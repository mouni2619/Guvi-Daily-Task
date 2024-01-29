document.addEventListener('DOMContentLoaded', fetchCountryList);

function fetchCountryList() {
    // Fetch the list of countries from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countryList => displayCountryList(countryList));
}

function displayCountryList(countryList) {
    const countryContainer = document.createElement('div');
    countryContainer.setAttribute('class', 'container')
    document.body.append(countryContainer)

    const firstheading = document.createElement('h1');
    firstheading.setAttribute('id', 'title')
    firstheading.classList.add("text-center")
    firstheading.innerText = "Restcountries & Weather using fetch API"
    countryContainer.appendChild(firstheading)

    const rowdiv = document.createElement('div')
    rowdiv.classList.add("row")
    countryContainer.appendChild(rowdiv)

    countryList.forEach(country => {
        const coldiv = document.createElement('div')
        coldiv.classList.add("paddingrow", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4","col-xxl-3")
        rowdiv.appendChild(coldiv)

        const countryCard = document.createElement('div');
        countryCard.classList.add('h-100', 'card')
        countryCard.setAttribute('style', 'width:16rem')
        coldiv.appendChild(countryCard)

        const headersdiv = document.createElement('div')
        headersdiv.classList.add('bgblack', "card-header")
        countryCard.appendChild(headersdiv)

        const heading = document.createElement('h3');
        heading.classList.add('text-center', 'text-light',)
        heading.setAttribute('id', 'h3')
        heading.textContent = country.name.common
        headersdiv.appendChild(heading)

        const cardId = document.createElement('div');
        cardId.setAttribute('class', 'card-body')
        cardId.setAttribute('id', 'cardId')
        countryCard.appendChild(cardId)

        const img = document.createElement('img');
        img.setAttribute('class', 'card-img-top')
        img.setAttribute('id', 'img')
        img.setAttribute('alt', 'countryimage')
        img.setAttribute('src', country.flags.png)
        cardId.appendChild(img)

        const br = document.createElement('br')
        cardId.appendChild(br)
        const br1 = document.createElement('br')
        cardId.appendChild(br1)

        const cardBody = document.createElement('div');
        cardBody.classList.add('text-center', 'card-text')
        cardId.appendChild(cardBody)

        const para1 = document.createElement('h6');
        para1.classList.add('card-title', 'text-dark', 'text-center')
        para1.setAttribute('id', 'p1')
        para1.innerHTML = `<span>Capital:<span> ${country.capital}`
        cardBody.appendChild(para1)

        const para2 = document.createElement('h6');
        para2.classList.add('card-title', 'text-dark', 'text-center')
        para2.setAttribute('id', 'p2')
        para2.innerHTML = `<span>Region:<span> ${country.region}`
        cardBody.appendChild(para2)

        const para3 = document.createElement('h6');
        para3.classList.add('card-title', 'text-dark', 'text-center')
        para3.setAttribute('id', 'p3')
        para3.innerHTML = `<span>Country Code:<span> ${country.cca3}<br><br>`
        cardBody.appendChild(para3)

        const countryName = country.capital;
        const countryButton = document.createElement('button');
        countryButton.textContent = "Click for Weather";
        countryButton.className = countryName;
        countryButton.setAttribute('id', 'btn')
        countryButton.addEventListener('click', () => fetchWeather(countryName, cardBody));
        cardBody.appendChild(countryButton);

        // Create a paragraph tag for each button to display weather information
        const weatherParagraph = document.createElement('p');
        weatherParagraph.className = 'weatherInfo';
        cardBody.appendChild(weatherParagraph);
    });
}
function fetchWeather(countryName, container) {
    // Find the corresponding paragraph tag for the clicked button
    const countryButtons = Array.from(container.getElementsByTagName('button'));
    const clickedButtonIndex = countryButtons.findIndex(button => (button.className === countryName[0]));
    // Find the next sibling paragraph for the clicked button
    const weatherParagraph = container.getElementsByTagName('p')[clickedButtonIndex];
    // Check if weather data is already displayed
    if (weatherParagraph.innerHTML !== '') {
        // Clear weather data if already displayed
        weatherParagraph.innerHTML = '';
    } else {
        // Fetch weather information from OpenWeatherMap API using the country capital
        const apiKey = '96e593fdea250becd87c338e1618326d'; //  your API key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${apiKey}`;
        fetch(weatherApiUrl)
            .then(weatherResponse => weatherResponse.json())
            .then(weatherData => displayWeather(weatherData, weatherParagraph));
    }
}
function displayWeather(weatherData, weatherParagraph) {
    // Display weather information inside the corresponding paragraph tag
    weatherParagraph.innerHTML = `<br><div class="lastdiv"><h6 class="weatherhead">WEATHER REPORT<h6> <i>Temperature: ${Math.round((weatherData.main.temp))} &#8451;<br>
                                 Description: ${weatherData.weather[0].description} <br>
                                 Humidity: ${weatherData.main.humidity}% <br>
                                 windspeed - ${weatherData.wind.speed} m/s N <i><div>`;
}
