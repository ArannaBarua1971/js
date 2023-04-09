let string='';
let buttons =document.querySelectorAll('.button');

buttons.forEach((ele,index)=>{
    ele.addEventListener('click',(event)=>{
        if((ele.innerHTML)=='='){
            try{
                string=eval(string);
                document.getElementById('calcu').value=string;
            }
            catch(expre){
                string="";
                document.getElementById('para').innerHTML="wronginput";
                if(confirm("you enter wrong ?")){
                    document.getElementById('para').innerHTML="calculate...";  
                }
                document.getElementById('calcu').value=string;
            }
        }
        else if((ele.innerHTML)=='C'){
            string=""
            document.getElementById('calcu').value=string;
        }
        else{
            string+=ele.innerHTML;
            document.getElementById('calcu').value=string;
        }
        console.log(string)
    })
})
