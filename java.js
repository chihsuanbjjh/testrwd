
function clickme(){
    var p_text = document.getElementById('content') ;
    p_text.innerHTML += "<b>alsdfjlksa</b>";
}

function fnorder() {
  var order = document.getElementById("order");
  var selectconsole = document.getElementById("selectconsole");
  var number = document.getElementById("number");

  order.innerHTML = `
  <p>你購買的內容是：${
    selectconsole.options[selectconsole.selectedIndex].text
  }</p>
  <p>數量是：${number.value}</p>
  <p>總金額是：${number.value * selectconsole.value}</p>
  `;
}

function deterScore(){
    var score = document.getElementById("score").value;
    var scoreWithpassword = document.getElementById("scoreWithpassword").value;
    var scoretext = document.getElementById("scoretext");
    
    var msg;
    if (score){
      if (score >= 60 && score <= 100) {
        msg = "pass";
      } else {
        msg = "fail";
      }
    }else{
          if (scoreWithpassword >= 60 && scoreWithpassword <= 100) {
            msg = "pass";
          } else {
            msg = "fail";
          }
    }
    scoretext.innerHTML = msg;
}