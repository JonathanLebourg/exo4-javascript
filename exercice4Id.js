
function validation(){

//definition des variables
  var lastName= document.getElementById('lastname').value;
  var firstName= document.getElementById('firstname').value;
  var city= document.getElementById('city').value;
  var regex= /^[a-zA-Zéèëï]+$/;
  var text= firstName+lastName+city; //concatenation

//enchainement des regex
if (!regex.test(text)||lastName==null){
    alert("Problème de saisie");}
else
  if (firstName==null){alert("Problème de saisie")}
    else
      if (city==null){alert("Problème de saisie")}
//sinon bonne réponse
  else{alert("Nom: "+lastName+"\nPrénom: "+firstName+"\nVille: "+city);}

}
