function saveData() {
  document.write="fname="+document.getElementById('fname').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
  document.write="email="+document.getElementById('email').value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";

  var radios = document.getElementsByName('gender');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        document.write="gender="+radios[i].value+"; expires=Thu, 18 Dec 2019 12:00:00 UTC";
        break;
    }
}
 alert('Your Data is Saved!');
}
 alert('SAVED DATA: '+document.write);

 

