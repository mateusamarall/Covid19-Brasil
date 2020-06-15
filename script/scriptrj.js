function ListCasesRj() {
  const Listcountry = document.querySelector(".containerrj");
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj")
    .then((res) => {
      return res.json();
    })
    .then((states) => {
      console.log();
      Listcountry.innerHTML += `<div class="card" id="casoscovid"> ${states.cases}<br/> casos</div> 
          <div class="card" id="mortescovid">${states.deaths}<br/> Mortes</div> 
          <div class="card" id="recupcovid">${states.suspects}<br/> Suspeitos</div>`;
    });
}
ListCasesRj();
