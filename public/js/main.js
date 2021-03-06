const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')


const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerText = `Please Enter City Name First`;
        datahide.classList.add('data_hide');
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=86d12b106e7ce0685fa7bfeeb4c22274`;
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;

            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == 'Clear') {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
            } else if (tempStatus == 'Clouds') {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6"></i>`;
            } else if (tempStatus == 'Rain') {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>`;
            } else {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
            };

            datahide.classList.remove('data_hide');

        } catch (error) {
            city_name.innerText = `Please Enter Proper(Valid) City Name `;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);


