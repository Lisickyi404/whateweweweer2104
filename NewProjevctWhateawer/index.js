/* поллучаю элементы страницы */
const inputCity = document.getElementById('1')
const button = document.getElementById('2')
const dayCard = document.getElementById('3')
const daysList =  document.getElementById('4')


/* параметры запроса */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8310a092damsh88d5f346c407ed7p18784fjsn304e9d3e486b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

button.addEventListener('click',()=>getLocationTitle())


/* Получаем город который ввел пользователь */
function getLocationTitle(){
    const title = inputCity.value
    /* вызываем функцию запроса и передаем туда город, который ввели */
    getLocation(title)
}

/* функцию получения запроса, которая принимает город */
function getLocation(location){
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, options)
	.then(response => response.json())
	.then(response => forecastRender(response))
	.catch(err => console.error(err));
}

/* функция которая создаст 3 новых карточки */
function forecastRender(forecast){
    console.log(forecast.forecast.forecastday)
    console.log(forecast.forecast.forecastday)

    /* берем список прогнозов на 3 дня и по очереди вызываем функцию editOneCard для каждого дня
    передаем в неё сам прогноз и дату прогноза
    */
    forecast.forecast.forecastday.forEach(element => {
        editOneCard(element.day,element.date)
    });


}


/* функция которая создает одну новую карточку */
function editOneCard(forecastDay,date){
    const newCard = dayCard.cloneNode(true)
    newCard.getElementsByClassName('temp')[0].innerHTML=forecastDay.avgtemp_c
    daysList.appendChild(newCard)
}










