window.onload = function() {
  let one_button = document.getElementById("myButton_1");
  let c = document.getElementById("display");
  c.oninput = function(){
      console.log("Press the Button 1==="+ c);
    };
  one_button.onclick = function (){
    console.log(one_button.value);
    c = one_button.value;
    console.log(c+"=Display Value");
  };
};