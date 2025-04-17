const weatherForm = document.forms[0];

const apiTypes = {
    weather: 'weather',
    geo: "geo",
    forecast: 'forecast',
}

const getRequestUrl = (params, apiType = "geo") => {
    const API_HOST = "http://api.openweathermap.org";
    const API_KEY = "a5fc8be9dcd685b1f8c7d30b239a69c1";
    const url = new URL(API_HOST);
    const APIS = {
        weather: '/data/2.5/weather',
        geo: "/geo/1.0/direct",
        forecast: '/data/2.5/forecast',
    }

    url.pathname = APIS[apiType];
    url.searchParams.set('appid', API_KEY);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
    })

    return url;
}

const getGeoProps = (form) => {
    const q = form.elements.q.value;

    return {
        q
    }
}


const getWeatherProps = (form) => {
    const lon = form.elements.lon.value;
    const lat = form.elements.lat.value;

    return {
        lon,
        lat
    }
}

const getGeolocation = async (form) => {
    const props = getGeoProps(form);
    const url = getRequestUrl(props, apiTypes.geo);
    const res = await fetch(url);
    return await res.json();
}

const setGeolocation = (form, cityGeo) => {
    form.elements.lat.value = cityGeo[0].lat;
    form.elements.lon.value = cityGeo[0].lon;
}

const getWeather = async (form) => {
    const props = getWeatherProps(form);
    const url = getRequestUrl(props, apiTypes.weather);
    const res = await fetch(url);
    return await res.json();
}

weatherForm.addEventListener("change", async (event) => {
    if (event.target.name === 'q') {
        const form = event.currentTarget
        const cityGeo = await getGeolocation(form)
        setGeolocation(form, cityGeo);
    }
})

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const weather = await getWeather(event.target);
    console.log(weather);
})

weatherForm.elements.q.dispatchEvent(new Event('change', {bubbles: true}));