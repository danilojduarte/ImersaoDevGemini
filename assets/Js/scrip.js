console.log(dados[0].img);

let section = document.getElementById("resultados-pesquisa");


for (let dado of dados) {

  section.innerHTML = `

        <div class="item-resultado">
          <h2>
          ${dados[0].titulo}
          </h2>
          <p>
          ${dados[0].descricao}
          </p>
          <a href=${dado.link}></a>









        
`;

}


//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrrbGQGqhR0xlij_pGeRU8mWVA7MFrckFmQ&s" alt="Capa serie Mr. Robot" class="resultado-capa">

        //   <p class="descricao-meta">
        //     ${dado}
        //   </p>
        //   <a href="https://en.wikipedia.org/wiki/Mr._Robot" target="_blank"
        //     >${dados[0].link}</a
        //   >
        // </div>
