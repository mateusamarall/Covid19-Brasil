function ListCountries() {
  const Listcountry = document.querySelector(".container");
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
    .then((res) => {
      return res.json();
    })
    .then((countries) => {
      Listcountry.innerHTML += `<div class="card" id="casoscovid"> ${countries.data.cases}<br/> casos</div> 
      <div class="card" id="confircovid"> ${countries.data.confirmed} <br/>confirmados</div> 
      <div class="card" id="mortescovid">${countries.data.deaths}<br/> Mortes</div> 
      <div class="card" id="recupcovid">${countries.data.recovered}<br/> Recuperados</div>`;
    });
}

ListCountries();
