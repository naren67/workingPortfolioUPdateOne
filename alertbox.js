var close = 0;

function spike(){
          if(close==0)
          {
                    document.getElementById('bring-up').style.display = 'block'
                    close=1;
          }
}



function aClose(){
          if(close==1){
               document.getElementById('bring-up').style.display = 'none'
               close=0;
          }
}