const fruits=['apple','banana','orange','grape','guava','watermelon','peach','mango','lemon'];
var letter;
var guessed=[];
var holding;
var dash =[];
var score=0;
var mainloopvalue=0;
var wrongguess=0;
var list=[];
function display(m){
    for(let i =0;i<guess.length;i++){
        if(guessed.includes(guess[i])){
           dash[i]=guess[i];  
        }
        else{
            dash[i]='_';
        }
    }
    score = Math.round(100-((m/6)*100));
    document.getElementById("dashed").innerHTML=dash.join(' ');
    if(dash.includes('_')!=true){
        alert('YOU WINS'+' score = '+score);
    }
}
function my_function(n){

    guessed.push(n);
    if(guess.includes(n)!=true){
        wrongguess += 1;
        document.getElementById('number').innerHTML=wrongguess;
        document.getElementById('images').src=wrongguess + '.png';
    }
    
    document.getElementById(''+n+'').setAttribute('disables',true);
    if(wrongguess===6){
        alert('GAME OVER')
    }
    display(wrongguess);  
}
let guess =fruits[Math.floor((Math.random() * 6) + 1)];
list=guess.split('');
document.getElementById('max').innerHTML=6;
display();



   


 