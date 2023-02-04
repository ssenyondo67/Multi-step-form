
function goToSelection(currentSelection,nextSelection ,stepFrom,stepTo){
    // getting element
   
    const step1 = selectElement(currentSelection);
    const step2 = selectElement(nextSelection);
    const sidebarBtn1 =selectElement(stepFrom);
    const sidebarBtn2 =selectElement(stepTo);

    // removing class
    step1.classList.remove('active-selection');
    sidebarBtn1.classList.remove('current-step');

    // adding class
    step2.classList.add('active-selection') ;
    sidebarBtn2.classList.add('current-step');

    // localStorage
    localStorage.removeItem('step');
   
    
}

function next(){ 
    const step=localStorage.getItem('step')
   
    if(!step){
      localStorage.setItem('step','#step1');


    }else{
        if(formIsvalide()){
            removeClass(selections,'active-selection')
            removeClass(steps,'current-step')
            if(step =='#step1'){
                
                goToSelection('#select1','#select2','#step1','#step2');
                const back =selectElement("#back");
                back.style.scale="1";
                const nextbtn =selectElement("#next");
                nextbtn.innerHTML='Next Step';
                localStorage.setItem('step','#step2'); 
            
            }
            if(step =='#step2'){
                goToSelection('#select2','#select3','#step2','#step3');
                const back =selectElement("#back");
                back.style.scale ="1";
                const nextbtn =selectElement("#next");
                nextbtn.innerHTML='Next Step';
                // localStorage.setItem('step','#step3');  
            }
            if(step =='#step3'){
                createSummary()
                
                goToSelection('#select3','#select4','#step3','#step4');
                const back =selectElement("#back");
                back.style.scale ="1";

                const nextbtn =selectElement("#next");
                nextbtn.innerHTML='Confirm';
                // localStorage.setItem('step','#step4');  

            }
            if(step =='#step4'){
                goToSelection('#select4','#select5','#step4','#step4');
                const back =selectElement("#back");
                back.style.scale="0";
                const nextbtn =selectElement("#next");
                nextbtn.style.scale ="0";
                // localStorage.setItem('step','#step5');  

            }
            if(step =='#step5'){
                // localStorage.setItem('step','#step1'); 
                setTimeout(() => {
                window.location.reload(true);
                },3000);
            }
        }else{
            step1();
        }
    }
}


function goBack(){
    const step=localStorage.getItem('step')
    if(!step){
       localStorage.setItem('step','step1');
    }else{
        if(step =='#step2'){
            
            goToSelection('#select2','#select1','#step2','#step1');
           
            localStorage.removeItem('step');
            localStorage.setItem('step','#step1');   
            const back =selectElement("#back");
            back.style.scale ="0";
            const nextbtn =selectElement("#next");
            nextbtn.innerHTML='Next Step';

        }
        if(step =='#step3'){
            
            goToSelection('#select3','#select2','#step3','#step2');
           
            localStorage.removeItem('step');
            localStorage.setItem('step','#step2');   
            const back =selectElement("#back");
            back.style.scale ="1";
            const nextbtn =selectElement("#next");
            nextbtn.innerHTML='Next Step';

        }
        if(step =='#step4'){
            
            goToSelection('#select4','#select3','#step4','#step3');
           
            localStorage.removeItem('step');
            localStorage.setItem('step','#step3');  
            const back =selectElement("#back");
            const nextbtn =selectElement("#next");
            nextbtn.innerHTML='Next Step';
            back.style.scale ="1";

        }
    }
}
