
var array = [{"letter":"A", "value":1, "amount":9},
{"letter":"B", "value":3, "amount":2},
{"letter":"C", "value":3, "amount":2},
{"letter":"D", "value":2, "amount":4},
{"letter":"E", "value":1, "amount":12},
{"letter":"F", "value":4, "amount":2},
{"letter":"G", "value":2, "amount":3},
{"letter":"H", "value":4, "amount":2},
{"letter":"I", "value":1, "amount":9},
{"letter":"J", "value":8, "amount":1},
{"letter":"K", "value":5, "amount":1},
{"letter":"L", "value":1, "amount":4},
{"letter":"M", "value":3, "amount":2},
{"letter":"N", "value":1, "amount":5},
{"letter":"O", "value":1, "amount":8},
{"letter":"P", "value":3, "amount":2},
{"letter":"Q", "value":10, "amount":1},
{"letter":"R", "value":1, "amount":6},
{"letter":"S", "value":1, "amount":4},
{"letter":"T", "value":1, "amount":6},
{"letter":"U", "value":1, "amount":4},
{"letter":"V", "value":4, "amount":2},
{"letter":"W", "value":4, "amount":2},
{"letter":"X", "value":8, "amount":1},
{"letter":"Y", "value":4, "amount":2},
{"letter":"Z", "value":10, "amount":1},
{"letter":"Blank","value":0, "amount":2}];
var array2 = [];
var trackScore = 0;
var currentGameScore = 0;
function scoreboard(){
  var trackCurrentGameScore = 0;
  var score = 0;
  var letter = " ";
  let temp = 0;
  for(var i = 1; i <= 15; i++ ){
    for(var x = 0; x < 7; x++){
    if($("#box"+i).find(".drag").length > 1)
      {
        if($("#box"+i).find("#drag"+x).length > 0){
          console.log("THE NUMBER IS" + x);
          $("#box"+ i).contents().appendTo('#Image');
        }
      }
    if ($("#box"+i).find(".drag").length > 0){ 
      if($("#box"+i).find("#drag"+x).length > 0){
        if(i == 7 || i == 9 ){
          temp = $("#drag"+x).data("value");
          temp = parseInt(temp);
          score = score + (temp * 2);
          letter = letter + array2[x];
        }else{
          temp = $("#drag"+x).data("value");
          temp = parseInt(temp);
          score = score + temp;
          letter = letter + array2[x];
        }
        if(i == 3 || i == 13)
        score = score * 2;
      }
  }
  }
}
if ($("#box"+3).find(".drag").length > 0 || $("#box"+13).find(".drag").length > 0){ 
  trackScore = score;
  trackCurrentGameScore = (currentGameScore * 2);
  trackScore = trackScore + trackCurrentGameScore;
  $("#score").remove();
  $("#Letter").remove();
  $( "<p id = \"score\" >score is := "+ trackScore +"</p>" ).appendTo( "#Text" );
  $( "<p id = \"Letter\" >word is := "+ letter +"</p>" ).appendTo( "#Text" );
}else{
  trackScore = score;
  trackScore = trackScore + currentGameScore;
  $("#score").remove();
  $("#Letter").remove();
  $( "<p id = \"score\" >score is := "+ trackScore +"</p>" ).appendTo( "#Text" );
  $( "<p id = \"Letter\" >word is := "+ letter +"</p>" ).appendTo( "#Text" );
}
}
let offset = [0, 0]

function allowDrop(drop) {
  scoreboard();
  var t = drop.target;
  while (t !== null && !t.classList.contains("box")) {
    t = t.parentNode;
  }
  if (t && t.childNodes.length > 1) {
    return false;
  }
  drop.preventDefault()
}

function drag(drop) {
  scoreboard();
  drop.dataTransfer.setData('text', drop.target.id);
  offset = [
    drop.target.offsetLeft - drop.clientX,
    drop.target.offsetTop - drop.clientY
  ];
}

function drop(drop) {
  drop.preventDefault();
  const data = drop.dataTransfer.getData('text');
  drop.target.appendChild(document.getElementById(data));
  scoreboard();
}

  function drop2(drop) {
    drop.preventDefault();
    var data = drop.dataTransfer.getData("text");
    drop.currentTarget.appendChild(document.getElementById(data));
  }

  function allowDrop2(drop) {
    drop.preventDefault();
  }
  
$(document).ready(function () {
  scoreboard();
  randT();
});

function randT(){
  var x = 0;
  //array2 = [];
  currentGameScore = trackScore;
  for(let i = 0;i < 7; i++){
    var rand = Math.floor(Math.random() * 27);
    if(array[rand].amount == 0){
      i = i - 1;
    }else{
    if($("#Image").find("#drag"+i).length > 0)
    {
      console.log("this ID stays " + i);
    }else{
    $('#drag'+i).remove();
    console.log(i);
    $('#Image').append(' <img src="./Image/Scrabble_Tile_'+ array[rand].letter +'.jpg" draggable="true" ondragstart="drag(event)"id="drag' + i + '" class="drag" data-value = "'+array[rand].value+'"" width="74.8" height="74">');
    array[rand].amount = array[rand].amount - 1;
    array2[i] = array[rand].letter;
    }
    }
  }
}

function randT2(){
  location.reload();
}

function remove(){
  $('.drag').remove();
}