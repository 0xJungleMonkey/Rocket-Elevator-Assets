
//input constiables
/////////////////////////////////////////////////////////////////

const residential = document.getElementById("residential")
const commercial = document.getElementById("commercial")
const cooperate = document.getElementById("cooperate")
const hybrid = document.getElementById("hybrid")
const hint=document.getElementById("hint")
//output constiables
/////////////////////////////////////////////////////////////////
const amount = document.getElementById("amount")
const unitprice = document.getElementById("unitprice")
const totalprice = document.getElementById("totalprice")
const installation = document.getElementById("installation")
const finalprice = document.getElementById("finalprice")
const installationrate =document.getElementById("installationrate")
//type listener
residential.addEventListener('click',() =>  {
    hint.style.display ="block"
    resi.style.display = 'block'
    commer.style.display = 'none'
    coop.style.display = 'none'
    hy.style.display = 'none'
})
commercial.addEventListener('click',() =>  {
    hint.style.display ="block"
    resi.style.display = 'none'
    commer.style.display = 'block'
    coop.style.display = 'none'
    hy.style.display = 'none'
})
cooperate.addEventListener('click',() =>  {
    hint.style.display ="block"
    resi.style.display = 'none'
    commer.style.display = 'none'
    coop.style.display = 'block'
    hy.style.display = 'none'
})
hybrid.addEventListener('click',() =>  {
    hint.style.display ="block"
    resi.style.display = 'none'
    commer.style.display = 'none'
    coop.style.display = 'none'
    hy.style.display = 'block'
})


//residential
const residentialapartment =document.getElementById("residentialapartment")
const residentialfloors =document.getElementById("residentialfloors")
const residentialbasement =document.getElementById("residentialbasement")
const residentialsubmit = document.getElementById("residentialsubmit")
residentialsubmit.addEventListener('click',() => {
    
    if (residentialfloors.value > 20){
       amount.value = Math.ceil(Number(residentialapartment.value) / Number(residentialfloors.value) /6*2)
    }else{
        amount.value = Math.ceil(Number(residentialapartment.value)/ Number(residentialfloors.value) /6)
    }  
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
 
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
   
})
//commercial
const distinct = document.getElementById("distinct")
const commmercialfloors = document.getElementById("commmercialfloors")
const commmercialbasement = document.getElementById("commmercialbasement")
const commmercialparking = document.getElementById("commmercialparking")
const cages = document.getElementById("cages")
const commercialsubmit = document.getElementById("commercialsubmit")
commercialsubmit.addEventListener('click',() => {
    amount.value = cages.value 
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
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
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
})
//hybrid
const hybriddistinct = Number(document.getElementById("hybriddistinct").value)
const hybridfloors = Number(document.getElementById("hybridfloors").value)
const hybridbasement = Number(document.getElementById("hybridbasement").value)
const hybridparking = Number(document.getElementById("hybridparking").value)
const hybridoccupants = Number(document.getElementById("hybridoccupants").value)
const hybridhours = Number(document.getElementById("hybridhours").value)
const hybridsubmit = document.getElementById("hybridsubmit")

hybridsubmit.addEventListener('click',() => {
    amount.value = (Math.ceil(Number(hybridoccupants.value)*(Number(hybridfloors.value)+Number(hybridbasement.value))/1000))
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
})




function funcPrice(product,installrate){
    unitprice.value =  (Math.round(product).toFixed(2))
    installation.value = (Number(installrate) * 100) + "%"
    // totalprice.value =  formatter.format(Math.round(Number(unitprice.value)*Number(amount.value)))
    // finalprice.value =  Math.round(Number(totalprice.value) + Number(amount.value) * Number(installation.value)*Number(unitprice.value))
    totalprice.value = (Math.round(Number(unitprice.value)*Number(amount.value))).toFixed(2)
    installationrate.value =  Number(installrate)
    finalprice.value =  (Math.round(Number(totalprice.value) + Number(amount.value) *Number(installationrate.value)*Number(unitprice.value))).toFixed(2)
   
    // document.getElementById("installation").innerHTML = unitinstallation*amount
    // document.getElementById("finalprice").innerHTML = (unitprice + unitinstallation) * amount
}

