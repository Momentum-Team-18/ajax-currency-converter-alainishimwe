let mainContainer = document.querySelector('#mainContainer')

let converterUrl = "https://openexchangerates.org/api/currencies.json"
let currencyRate = "https://openexchangerates.org/api/latest.json?app_id=c0de237c94ad45e9b9ee4932324e9aa0&base=USD"

fetch(currencyRate, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.rates)
        
        
        
        // console.log(Object.keys(data))

        let availableCurrencies = Object.keys(data.rates)

        let selectFrom = document.createElement('select')
            selectFrom.id = "fromSelect"
            mainContainer.appendChild(selectFrom)
        let optionFrom = document.createElement('option')
            optionFrom.value = "USD";
            optionFrom.text = "USD";
            selectFrom.appendChild(optionFrom);

        let spacebtn = document.createElement('h3')
            spacebtn.innerText = "to"
            mainContainer.appendChild(spacebtn);

        let selectTo = document.createElement('select')
                selectTo.id = "idSelect"
                mainContainer.appendChild(selectTo);

        for(let i=0; i <= availableCurrencies.length; i++) {
            
            let option = document.createElement('option')
            option.value = availableCurrencies[i]
            option.text = availableCurrencies[i]
            selectTo.appendChild(option)

        }

        

        
    })
