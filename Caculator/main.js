const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const AC = $('.btn-Restart');
const btns = $$('.btn');
const input = $('.input');
btns.forEach(function(btn){
    btn.onclick = function(e)
        {
           HandleInput(e.target.textContent);
        }
});

var textInput = '';
var i = false;
var e = false;
function HandleInput(value)
{
   if(value == 'AC')
   {
        textInput = ''
        input.value = '';
   }
   else if(value == '+/-')
   {
        if(e == false)
        {
            textInput += '-';
            input.value = textInput;
            e = true;
        }
        else
        {
            textInput = textInput.substring(0,textInput.length-1);
            input.value = textInput;
            e = false;
        }
   }
   else if(value == '=')
   {
     input.value = eval(textInput);
     i = true;
   }
    else
    {
        if(i == true)
        {
            textInput = '';
            input.value = textInput;
            i=false;
        }
        textInput += value;
        input.value = textInput;
    }
}