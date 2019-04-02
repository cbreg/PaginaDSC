var comidas = ["Banana", "Maçã", "Batata", "Feijão"];

for(var i = 0; i < comidas.length; i++){
    var node = document.createElement("li");                 
    var textnode = document.createTextNode(comidas[i]);         
    node.appendChild(textnode);                             
    document.getElementById("lista").appendChild(node);    
}