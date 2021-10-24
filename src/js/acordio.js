function desplegar(element) {
   const pare = element.parentNode;
   const pareDesplegat = pare.classList.contains("desplegat");
   const desplegats = document.getElementsByClassName("desplegat");

   Object.keys(desplegats).forEach(key => {
      desplegats[key].classList.remove("desplegat");
   });
   if (!pareDesplegat) pare.classList.add("desplegat");
}

export { desplegar };
