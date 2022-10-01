const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
//residential
const residentialApartment = document.getElementById("residentialapartment");
const residentialFloors = document.getElementById("residentialfloors");
const residentialSubmit = document.getElementById("residentialsubmit");
residentialSubmit.addEventListener("click",resiFunction);

function resiFunction(){
  if (residentialFloors.value > 20) {
    amount.value = Math.ceil(
      (Number(residentialApartment.value) /
        Number(residentialFloors.value) /
        6) * 2 );
  } else if (residentialFloors.value == 1) {
    amount.value = 0;
  } else {
    amount.value = Math.ceil(
      Number(residentialApartment.value) / Number(residentialFloors.value) / 6
    );
  }
  updateInput();
}

//commercial
const distinct = document.getElementById("distinct");
const commmercialFloors = document.getElementById("commmercialfloors");
const commmercialBasement = document.getElementById("commmercialbasement");
const commmercialParking = document.getElementById("commmercialparking");
const cages = document.getElementById("cages");
const commercialSubmit = document.getElementById("commercialsubmit");
commercialSubmit.addEventListener("click", () => {
  amount.value = Math.ceil(cages.value);
  updateInput();
});

//cooperate
const cooperateTenant = document.getElementById("cooperatetenant");
const cooperateFloors = document.getElementById("cooperatefloors");
const cooperateBasement = document.getElementById("cooperatebasement");
const cooperateParking = document.getElementById("cooperateparking");
const cooperateOccupants = document.getElementById("cooperateoccupants");
const cooperateSubmit = document.getElementById("cooperatesubmit");

cooperateSubmit.addEventListener("click", () => {
  amount.value = Math.ceil(
    (Number(cooperateOccupants.value) *
      (Number(cooperateFloors.value) + Number(cooperateBasement.value))) /
      1000
  );
  updateInput();
});
//hybrid
const hybridDistinct = document.getElementById("hybriddistinct");
const hybridFloors = document.getElementById("hybridfloors");
const hybridBasement = document.getElementById("hybridbasement");
const hybridParking = document.getElementById("hybridparking");
const hybridOccupants = document.getElementById("hybridoccupants");
const hybridHours = document.getElementById("hybridhours");
const hybridSubmit = document.getElementById("hybridsubmit");

hybridSubmit.addEventListener("click", () => {
  amount.value = Math.ceil(
    (Number(hybridOccupants.value) *
      (Number(hybridFloors.value) + Number(hybridBasement.value))) /1000);
  updateInput();
});

//output constiables
/////////////////////////////////////////////////////////////////
const amount = document.getElementById("amount");
const unitPrice = document.getElementById("unitprice");
const totalPrice = document.getElementById("totalprice");
const installation = document.getElementById("installation");
const finalPrice = document.getElementById("finalprice");
const installationRate = document.getElementById("installationrate");

function funcPrice(product, installrate) {
  unitPrice.value = Math.round(product).toFixed(2);
  installation.value = Number(installrate) * 100 + "%";
  installationRate.value = Number(installrate);
  updateInput();
}

function updateInput() {
  totalPrice.value = Math.round(
    Number(unitPrice.value) * Number(amount.value)
  ).toFixed(2);
  finalPrice.value = Math.round(
    Number(totalPrice.value) +
      Number(amount.value) *
        Number(installationRate.value) *
        Number(unitPrice.value)
  ).toFixed(2);
}
