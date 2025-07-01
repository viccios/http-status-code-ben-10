const urlSite = document.getElementById("url-site");
const btnCopiarTexto = document.getElementById("copiar-texto");

urlSite.textContent = window.location.href + "/[codigo]";
btnCopiarTexto.addEventListener("click", copiarTexto);

function copiarTexto() {
  navigator.clipboard.writeText(urlSite.textContent);
  btnCopiarTexto.textContent = "Copiado!";
}
