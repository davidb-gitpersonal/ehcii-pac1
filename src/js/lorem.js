import { LoremIpsum  } from "lorem-ipsum";

const lorem = new LoremIpsum({
   sentencesPerParagraph: {
      max: 5,
      min: 1,
   },
   wordsPerSentence: {
      min: 5,
      max: 11,
   }
});

function getLorem(tipus) {
   if (tipus === 'paragraf') return lorem.generateParagraphs(1);
   if (tipus === 'texte') return lorem.generateSentences(1);
   return lorem.generateWords(1);
}

var substituirTotsParagrafs = function() {
   const paragrafs = document.getElementsByClassName("lorem-paragraf");
   Object.keys(paragrafs).forEach(element => {
      paragrafs[element].innerHTML = getLorem('paragraf');
   });
}

var substituirTotsTextes = function() {
   const textes = document.getElementsByClassName("lorem-texte");
   Object.keys(textes).forEach(element => {
      textes[element].innerHTML = getLorem('texte');
   });
}

var substituirTotsParuales = function() {
   const paraules = document.getElementsByClassName('lorem-paraula');
   Object.keys(paraules).forEach(element => {
      paraules[element].innerHTML = getLorem('paraula');
   });
}

var substituirLorems = function() {
      substituirTotsParagrafs();
      substituirTotsTextes();
      substituirTotsParuales();
}

export { substituirLorems };
