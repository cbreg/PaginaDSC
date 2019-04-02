class Filme{
    constructor(titulo, ano, genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }
}
var filmes = [new Filme("Titulo1", "2000", "Ficcao"),
              new Filme("Titulo2", "2001", "Romance"),
              new Filme("Titulo3", "2002", "Ação")];

for(var i = 0; i < filmes.length; i++){

    tabBody = document.getElementsByTagName("tbody").item(0);
    row = document.createElement("tr");

    for (var prop in filmes[i]) {

        cell = document.createElement("td");
        textnode = document.createTextNode(filmes[i][prop]);
        cell.appendChild(textnode);
        row.appendChild(cell);
        tabBody.appendChild(row);
    }
}
