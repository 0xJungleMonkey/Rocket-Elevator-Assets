
function residentialFunction() {
    var residentialapartment =Number( document.getElementById("residentialapartment").value)
    var residentialfloors =Number( document.getElementById("residentialfloors").value)
    var residentialbasement =Number( document.getElementById("residentialbasement").value)
    if (residentialfloors > 20){
        amount = residentialapartment / residentialfloors /6*2
    }else{
        amount = residentialapartment / residentialfloors /6
    }
    
    document.getElementById("amount").innerHTML = amount
    document.getElementById("unitprice").innerHTML =  unitprice
    document.getElementById("totalprice").innerHTML =  totalprice
    document.getElementById("installation").innerHTML = installation
    document.getElementById("finalprice").innerHTML = finalprice
    
}

function commercialFunction() {
    var distinct = Number(document.getElementById("distinct").value)
    var commmercialfloors = Number(document.getElementById("commmercialfloors").value)
    var commmercialbasement = Number(document.getElementById("commmercialbasement").value)
    var commmercialparking = Number(document.getElementById("commmercialparking").value)
   amount = Number(document.getElementById("cages").value)
      
    document.getElementById("amount").innerHTML = amount
    document.getElementById("unitprice").innerHTML =  unitprice
    document.getElementById("totalprice").innerHTML =  totalprice
    document.getElementById("installation").innerHTML = installation
    document.getElementById("finalprice").innerHTML = finalprice
}
function cooperateFunction(){
    var cooperatetenant = Number(document.getElementById("cooperatetenant").value)
    var cooperatefloors = Number(document.getElementById("cooperatefloors").value)
    var cooperatebasement= Number(document.getElementById("cooperatebasement").value)
    var cooperateparking = Number(document.getElementById("cooperateparking").value)
    var cooperateoccupants = Number(document.getElementById("cooperateoccupants").value)
    

    document.getElementById("amount").innerHTML = cooperateoccupants*(cooperatefloors+cooperatebasement)/1000
    document.getElementById("unitprice").innerHTML =  unitprice
    document.getElementById("totalprice").innerHTML =  totalprice
    document.getElementById("installation").innerHTML = installation
    document.getElementById("finalprice").innerHTML = finalprice
}
function hybrid(){
    var hybriddistinct = Number(document.getElementById("hybriddistinct").value)
    var hybridfloors = Number(document.getElementById("hybridfloors").value)
    var hybridbasement = Number(document.getElementById("hybridbasement").value)
    var hybridparking = Number(document.getElementById("hybridparking").value)
    var hybridoccupants = Number(document.getElementById("hybridoccupants").value)
    var hybridhours = Number(document.getElementById("hybridhours").value)
    document.getElementById("amount").innerHTML = hybridoccupants*( hybridfloors+hybridbasement)/1000
    document.getElementById("unitprice").innerHTML =  unitprice
    document.getElementById("totalprice").innerHTML =  totalprice
    document.getElementById("installation").innerHTML = installation
    document.getElementById("finalprice").innerHTML = finalprice
}