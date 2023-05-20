var elements = document.getElementsByClassName("main-path");
var floatingDiv = document.getElementById("floatingDiv");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function (event) {
        // Obtém a posição do mouse em relação ao documento
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        // Define a posição da div flutuante
        floatingDiv.style.left = Number(mouseX + 20) + "px";
        floatingDiv.style.top = Number(mouseY - 20) + "px";

        // Exibe a div flutuante
        console.log("display block");
        floatingDiv.style.display = "flex";
    });
}

// Oculta a div flutuante quando o usuário clicar fora dela
document.addEventListener("click", function (event) {
    if (
        event.target !== floatingDiv &&
        !event.target.classList.contains("main-path") &&
        !event.target.closest("#floatingDiv")
    ) {
        console.log("display none");
        floatingDiv.style.display = "none";
    }
});

// var elementsNode = document.getElementsByClassName("drawflow-node");
var floatingDivNode = document.getElementById("floatingDivNode");

// for (var i = 0; i < elementsNode.length; i++) {
//     elementsNode[i].addEventListener("click", function (event) {
//         elementsNode[i].appendChild(document.getElementById("floatingDivNode"));
//         document.getElementById("floatingDivNode").style.display = "flex";
//     });
// }

// Oculta a div flutuante quando o usuário clicar fora dela
document.addEventListener("click", function (event) {
    if (
        event.target !== floatingDivNode &&
        !event.target.classList.contains("drawflow-node") &&
        !event.target.closest(".drawflow-node") &&
        event.target !== document.getElementById("deleteNode")
    ) {
        console.log("display none");
        floatingDivNode.style.display = "none";
    }
});
