function ListCasesSP() {
  const Listcountry = document.querySelector(".containersp");
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp")
    .then((res) => {
      return res.json();
    })
    .then((states) => {
      Listcountry.innerHTML += `<div class="card" id="casoscovid"> ${states.cases}<br/> casos</div> 
        <div class="card" id="mortescovid">${states.deaths}<br/> Mortes</div> 
        <div class="card" id="recupcovid">${states.suspects}<br/> Suspeitos</div>`;
    });
}
ListCasesSP();
