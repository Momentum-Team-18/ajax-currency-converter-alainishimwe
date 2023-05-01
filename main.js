let mainContainer = document.querySelector('#mainContainer')
let showAmount = document.querySelector('.showAmount')
let myConverter = document.querySelector('.myConverter')

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
        console.log(data)
        console.log(data.rates)
        console.log(Object.values(data.rates))
        
        
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
            //option.classList.add("myCurrency")
            
        }

        myOption = document.getElementById('idSelect')
        //console.log(myOption)

        myOption.addEventListener('change', (event) => {
            newCurrency = `${event.target.value}`
            console.log(newCurrency)
            console.log(data.rates[newCurrency])
        })


        //console.log(myOption.innerText)

        let theNumberToConvert = document.getElementById("numberToConvert")
        let myCurrency = document.querySelector("#idSelect")
        //console.log(option)

        // document.querySelector(".myCurrency").addEventListener('click', (event) => {
        //     myCurrency = myCurrency.value;
        //     console.log(myCurrency)
        // })
            
        document.querySelector(".convertButton").addEventListener("click", (event) => {
            let newNumber = parseInt(theNumberToConvert.value) ;
            yourAmount = newNumber * data.rates[newCurrency]
            displayAmount = document.createElement('p')
            displayAmount.innerText = yourAmount
            mainContainer.appendChild(displayAmount)
            console.log(yourAmount);
        })
        // for(let sign in myOption.innerText) {
        //     console.log(myOption.innerText[0])
        // }

       

        // for(let i =0; i< myOption.length; i++) {
        //     for(let currSign in data.rates){
        //         //console.log(data.rates[currSign])
        //         if(myOption[i].innerText == currSign) {
        //             z = data.rates[currSign]
        //             console.log(z)
                    
        //         }
        //     }
        // }



        // for (let currSign in data.rates) {
        //     console.log(currSign)

        //      if (myOption.innerText == currSign ) {
        //         //console.log(currSign)
        //        z = data.rates[currSign];
        //         //console.log(z) ;
        //      }
        //     //  z = data.rates[myCurrency.value]
        //     // console.log(myCurrency.value)

        //     // console.log(currSign)
        // }
        

        

        
    })
