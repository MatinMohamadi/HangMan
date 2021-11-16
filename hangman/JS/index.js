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
      counter++;
      document.querySelector("#Wrong_letters").value += this.current_letter;
        change_pic();
      this.wrong_length = document.querySelector("#Wrong_letters").value.length;
        if (this.wrong_length > 9) {
        setTimeout(()=>{
          alert("You Lost ! Maybe Next Time Mate");
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
          alert("You Won ! Proud of You");
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