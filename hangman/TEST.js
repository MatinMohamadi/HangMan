
var mins = 10;
var snds = 0;
var words = ["DOG","BOOK","BAG","SHOP","APPLE","HOUSE","LIBRARY","OFFICE"];
var rndm_numb;
var my_random_word;
var current_letter;
var splited_word;
var underline = "";
var wrong_length = 0;
var counter = 0;

function select(selector){
  return document.querySelector(selector)
}

function selectall(selector){
  return document.querySelectorAll(selector);

}

function disabling () {
  document.querySelector("#start_mygame").setAttribute("disabled", true);
}

function enabling () {
  let.btns = document.querySelectorAll(".btn-default");
  for (var i = 0; i < btns.length; i++) {
    btns[i].removeAttribute("disabled");
  }
}

function countDown() {
  setInterval(()=>{
    if (snds == 0) {
        mins--
        document.querySelector('#snds').innerHTML = 60;
        snds = 60
    }
        snds--
        document.querySelector('#mins').innerHTML = mins;
        document.querySelector('#snds').innerHTML = snds;
    },1000);
}
function timeOut() {
  setTimeout(()=>{
      alert(' YOU LOST :-( ');
      location.reload();
  },601000);
}

function send_letter(myletter) {
  current_letter = myletter.innerHTML.trim();
  myletter.setAttribute("disabled",true);
  replace_letter();
  wrong_length = select("#Wrong_letters").value.length;
}

function start_game(){
    var btns = selectall(".btn-default");
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].removeAttribute("disabled");
    }
    select("#start_mygame").setAttribute("disabled",true);
    setInterval(function(){
      if (snds == 0) {
          mins--
          select('#snds').innerHTML =60;
          snds = 60
      }
          snds--
          select('#mins').innerHTML = mins;
          select('#snds').innerHTML = snds;
      },1000);
    setTimeout(function(){
      alert(' YOU LOST :-( ');
      location.reload();
      },601000);
    randomize_word();
    split_word();
    generate_underline();
    }

    function change_pic() {
      select("#myimage").setAttribute("src","images/hm"+counter+".gif");
    }

    function win_game() {
      if (underline == my_random_word) {
        alert("THANKS U SAVED ME ! :-)");
        location.reload();
      }
    }

    function loss_game() {
      if (wrong_length > 9) {
      alert("NOOOOO PLZ SAVE ME NEXT TIME !");
      location.reload();
      }
    }

    function randomize_word() {
      do {
          rndm_numb = Math.floor(Math.random() * 10);
      } while (rndm_numb >= 8)

        my_random_word = words[rndm_numb];
    }

    function split_word() {
      splited_word = my_random_word.split();
    }

    function generate_underline() {

      for (var i = 0; i < my_random_word.length; i++) {
        underline += "_";
      }
      insert_word(underline);
    }

    function insert_word(word) {
      select("#correctr_letter").value = word;
    }

    function replace_letter() {
      var letter_index =  my_random_word.indexOf(current_letter);
      if (letter_index == -1) {
        counter++
        change_pic();
        select("#Wrong_letters").value += current_letter;
        setTimeout(function () {
          loss_game();
        });
      }else{
        arr_underline = underline.split("");
        arr_cur_word = my_random_word.split("");
        for (var i = 0; i < arr_underline.length; i++) {
          if (arr_cur_word[i]==current_letter){
            arr_underline[i]=current_letter;
          }
        }
        underline = arr_underline.join("");
        insert_word(underline);
        setTimeout(function () {
          win_game();
        });
      }
    }


    class StartGame{
      constructor(){
        events = new Events();
        this.bindEvents();
        this.events.randomize_word();
        this.events.split_word();
        this.events.generate_underline();
      }
      startBtn(){
        this.events.enabling();
        this.events.countDown();
        this.events.timeOut();
        this.events.disabling();
      }
      bindEvents(){
          $.selectall(".btn-default").forEach((el)=>{
          el.addEventListener("click",this.events.send_letter.bind(this.events));
        })
         $.select("#start_mygame").addEventListener("click",this.startBtn.bind(this));
         //bind will set the "this" of a given function to its argument.
         //cuz the beforehand this will be the event which the function passed!
      }
    }








    
var mins = 10;
var snds = 0;
var words = ["BOSS","APPLE","DESK","DEVELOPER","HOME","GAME","MAGIC","LAPTOP"];
var rndm_numb;
var my_random_word;
var current_letter;
var splited_word;
var underline = "";
var wrong_length = 0;
var counter = 0;

var Events = class Events{
  constructor(){
    this.mins = 10;
    this.snds = 0;
    this.rndm_numb;
    this.words = ["BOSS","APPLE","DESK","DEVELOPER","HOME","GAME","MAGIC","LAPTOP"];
    this.my_random_word;
    this.current_letter;
    this.splited_word;
    this.underline = "";
    this.wrong_length = 0;
    this.counter = 0;
  }
   disabling(){
    document.querySelectorAll("#start_mygame").setAttribute("disabled",true);
  }
   enabling(){
    let btns = document.querySelectorAll(".btn-default");
    for (var i = 0; i < btns.length; i++) {
      btns[i].removeAttribute("disabled");
    }
  }
  countDown(){
    setInterval(()=>{
      if (snds == 0) {
          mins--
          document.querySelector('#snds').innerHTML =60;
          snds = 60
      }
          snds--
          document.querySelector('#mins').innerHTML = mins;
          document.querySelector('#snds').innerHTML = snds;
      },1000);
  }
  timeOut(){
    setTimeout(()=>{
        alert(' You Lost, Next Time Mate :-) ');
        location.reload();
    },601000);
  }
   send_letter(event) {
    let elem = event.target;
    this.current_letter = elem.innerHTML.trim();
    elem.setAttribute("disabled",true);
    this.replace_letter();
  }
  replace_letter() {
    this.letter_index =  this.my_random_word.indexOf(this.current_letter);
    if (this.letter_index == -1) {
      this.counter++;
      document.querySelector("#Wrong_letters").value += this.current_letter;
        this.change_pic();
      this.wrong_length = document.querySelector("#Wrong_letters").value.length;
        if (this.wrong_length > 9) {
        setTimeout(()=>{
          alert("NOOOOO PLZ SAVE ME NEXT TIMEll !");
          location.reload();
        },100);
        }
    }else{
      let arr_underline = this.underline.split("");
      let arr_cur_word = this.my_random_word.split("");
      for (var i = 0; i < arr_underline.length; i++) {
        if (arr_cur_word[i]==this.current_letter){
          arr_underline[i]=this.current_letter;
        }
      }
      this.underline = arr_underline.join("");
      this.insert_word(this.underline);
      setTimeout(()=>{
        if (this.underline == this.my_random_word) {
          alert("THANKS U SAVED ME ! :-)");
          location.reload();
        }
      },100);
    }
    }

    change_pic() {
      document.querySelector("#myimage").setAttribute("src","images/hm"+this.counter+".gif");
    }
     randomize_word() {
      do {
          this.rndm_numb = Math.floor(Math.random() * 10);
      } while (this.rndm_numb >= 8)

        this.my_random_word = this.words[this.rndm_numb];
    }
     split_word() {
      this.splited_word = this.my_random_word.split();
    }
     generate_underline() {

      for (let i = 0; i < this.my_random_word.length; i++) {
        this.underline += "_";
      }
      this.insert_word(this.underline);
    }
    insert_word(word) {
      document.querySelector("#correctr_letter").value = word;
    }

}

class StartGame{
  constructor(){
    this.events = new Events();
    this.bindEvents();
    this.events.randomize_word();
    this.events.split_word();
    this.events.generate_underline();
  }
  startBtn(){
    this.events.enabling();
    this.events.countDown();
    this.events.timeOut();
    this.events.disabling();
  }
  bindEvents(){
      document.querySelectorAll(".btn-default").forEach((el)=>{
      el.addEventListener("click",this.events.send_letter.bind(this.events));
    })
     document.querySelector("#start_mygame").addEventListener("click",this.startBtn.bind(this));
     //bind will set the "this" of a given function to its argument.
     //cuz the beforehand this will be the event which the function passed!
  }
}


