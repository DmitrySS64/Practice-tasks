//вывести из объекта (тут fetch'ем отправить запрос надо)
//адресс в формате 'Город: city2 Улица: street2 Дом: house2'. 
//из этого же объекта вывести 'фамилия personLastName имя 
//personFirstName купил 5 штук товаров name'

async function fetchDataAndProcess(){
    try{
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();

        const city = data.address.city2;
        const street = data.address.street2;
        const house = data.address.house2;

        const personLastName = data.personLastName;
        const personFirstName = data.personFirstName;
        const productName = data.product.name;

        console.log(`Город: ${city}, Улица: ${street}, Дом: ${house}`);
        console.log(`${personLastName} ${personFirstName} купил 5 штук товаров ${productName}`);
    }
    catch (error){
        console.error("Ошибка", error);
    }
}

fetchDataAndProcess()