

//type button listener
/////////////////////////////////////////////////////////////////

const residential = document.getElementById("residential")
const commercial = document.getElementById("commercial")
const cooperate = document.getElementById("cooperate")
const hybrid = document.getElementById("hybrid")
const hint=document.getElementById("hint")

residential.addEventListener('click',() =>  {
    hidequestions()
    hint.style.display ="block"
    resi.style.display = 'block'

})
commercial.addEventListener('click',() =>  {
    hidequestions()
    hint.style.display ="block"
    commer.style.display = 'block'
})
cooperate.addEventListener('click',() =>  {
    hidequestions()
    hint.style.display ="block"
    coop.style.display = 'block'
})
hybrid.addEventListener('click',() =>  {
    hidequestions()
    hint.style.display ="block"
    hy.style.display = 'block'
})

function hidequestions(){
    hint.style.display ='none'
    resi.style.display = 'none'
    commer.style.display = 'none'
    coop.style.display = 'none'
    hy.style.display = 'none'
}


//residential
const residentialapartment =document.getElementById("residentialapartment")
const residentialfloors =document.getElementById("residentialfloors")
const residentialbasement =document.getElementById("residentialbasement")
const residentialsubmit = document.getElementById("residentialsubmit")
residentialsubmit.addEventListener('click',() => {
   if(residentialfloors.value > 20){
       amount.value = Math.ceil(Number(residentialapartment.value) / Number(residentialfloors.value) /6*2)
    }else if(residentialfloors.value == 1){
        amount.value = 0
    }
    else{
        amount.value = Math.ceil(Number(residentialapartment.value)/ Number(residentialfloors.value) /6)
    }  
    updateinput()
  
})
//commercial
const distinct = document.getElementById("distinct")
const commmercialfloors = document.getElementById("commmercialfloors")
const commmercialbasement = document.getElementById("commmercialbasement")
const commmercialparking = document.getElementById("commmercialparking")
const cages = document.getElementById("cages")
const commercialsubmit = document.getElementById("commercialsubmit")
commercialsubmit.addEventListener('click',() => {
    amount.value = Math.ceil(cages.value) 
    updateinput()
})

//cooperate
const cooperatetenant = document.getElementById("cooperatetenant")
const cooperatefloors = document.getElementById("cooperatefloors")
const cooperatebasement= document.getElementById("cooperatebasement")
const cooperateparking = document.getElementById("cooperateparking")
const cooperateoccupants = document.getElementById("cooperateoccupants")
const cooperatesubmit = document.getElementById("cooperatesubmit")

cooperatesubmit.addEventListener('click',() => {
    amount.value =(Math.ceil(Number(cooperateoccupants.value)*(Number(cooperatefloors.value)+Number(cooperatebasement.value))/1000))
    updateinput()
})
//hybrid
const hybriddistinct = document.getElementById("hybriddistinct")
const hybridfloors = document.getElementById("hybridfloors")
const hybridbasement = document.getElementById("hybridbasement")
const hybridparking =document.getElementById("hybridparking")
const hybridoccupants = document.getElementById("hybridoccupants")
const hybridhours = document.getElementById("hybridhours")
const hybridsubmit = document.getElementById("hybridsubmit")

hybridsubmit.addEventListener('click',() => {
    amount.value = (Math.ceil(Number(hybridoccupants.value)*(Number(hybridfloors.value)+Number(hybridbasement.value))/1000))
    updateinput()
})



//output constiables
/////////////////////////////////////////////////////////////////
const amount = document.getElementById("amount")
const unitprice = document.getElementById("unitprice")
const totalprice = document.getElementById("totalprice")
const installation = document.getElementById("installation")
const finalprice = document.getElementById("finalprice")
const installationrate =document.getElementById("installationrate")

function funcPrice(product,installrate){
    unitprice.value =  (Math.round(product).toFixed(2))
    installation.value = (Number(installrate) * 100) + "%"
    installationrate.value =  Number(installrate)
    updateinput()
}

function updateinput(){
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
}