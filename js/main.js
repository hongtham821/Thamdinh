window.onload = function() {
    var pdfContainer = document.getElementById("pdfContainer");
    var embedElement = document.createElement("embed");
    embedElement.src = "your-file.pdf";
    embedElement.type = "application/pdf";
    pdfContainer.appendChild(embedElement);
  };  