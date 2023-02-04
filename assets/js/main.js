//    get lists 
 const selections = document.getElementsByClassName('selection');
 const steps = document.getElementsByClassName('circle');
 let level ={
    'select1':'step1',
    'select2':'step2',
    'select3':'step3',
    'select4':'step4',
    
 };
 
// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element)return element;
    throw new Error('Something went wrong, make sure the ${selector} exist or is typed correctly.')
};
const back =selectElement("#back");
back.style.scale ="0";

function removeClass(list,className){
    for(var i=0; i<list.length;i++){
        if(list[i].classList.contains(className)){
            list[i].classList.remove(className);
        }
    }
}



function next(){
    var nextElement;
    
    if(formIsvalide()){
        for(var i=0; i<selections.length;i++){
            if(selections[i].classList.contains('active-selection')){
                selections[i].classList.remove('active-selection');
                nextElement = selections[i].nextElementSibling;
                
                
            }
            
        }
        let id=nextElement.id;
        
        if( id !='select5'){
           nextElement.classList.add('active-selection');
           const back =selectElement("#back");
            back.style.scale="1";
           
            if( id =='select4'){
                createSummary();
                const nextbtn =selectElement("#next");
                nextbtn.innerHTML='Confirm';
                nextbtn.style.scale ="1";
            }
            if(level[id]=='step1'){
                step1();
            }
            if(level[id]=='step2'){
                step2();
            }
            if(level[id]=='step3'){
                step3();
            }
            if(level[id]=='step4'){
                step4();
            }
        }else{
            nextElement.classList.add('active-selection');
            const back =selectElement("#back");
            back.style.scale="0";
            const nextbtn =selectElement("#next");
            nextbtn.style.scale ="0";
        }
    }
}

function goBack(){
    for(var i=0; i<selections.length;i++){
        if(selections[i].classList.contains('active-selection')){
            selections[i].classList.remove('active-selection');
            nextElement = selections[i].previousElementSibling;
            
            
        }
        
    }
    let id=nextElement.id;
    if(level[id]=='step1'){
        step1();
    }
    if(level[id]=='step2'){
        step2();
    }
    if(level[id]=='step3'){
        step3();
    }
    if(level[id]=='step4'){
        step4();
    }
    
    if( id !='select1'){
       nextElement.classList.add('active-selection');
       const back =selectElement("#back");
        back.style.scale="1";
        const nextbtn =selectElement("#next");
        
        nextbtn.style.scale ="1";
        if(id !='select4'){
            nextbtn.innerHTML='Next Step';
        }
        
    }else{
        nextElement.classList.add('active-selection');
        const back =selectElement("#back");
        back.style.scale="0";
        
        const nextbtn =selectElement("#next");
       
        nextbtn.style.scale ="1";

    }
}


function step1(){
    removeClass(steps,'current-step');
    const sidebarBtn2 =selectElement('#step1'); 
    sidebarBtn2.classList.add('current-step');

    removeClass(selections,'active-selection')
    const step = selectElement('#select1');
    step.classList.add('active-selection') ;

    const back =selectElement("#back");
    back.style.scale="0";
    
    const nextbtn =selectElement("#next");
    nextbtn.innerHTML='Next Step';
    nextbtn.style.scale ="1";


}  


function step2(){
   
    if(formIsvalide()){
        const sidebarBtn2 =selectElement('#step2');
    removeClass(steps,'current-step');
    sidebarBtn2.classList.add('current-step');
    
    removeClass(selections,'active-selection')
    const step = selectElement('#select2');
    step.classList.add('active-selection') ;

    const back =selectElement("#back");
    back.style.scale="1";
    
    const nextbtn =selectElement("#next");
    nextbtn.innerHTML='Next Step';
    nextbtn.style.scale ="1";

    }

}  
function step3(){
    
   if(formIsvalide()){
    const sidebarBtn2 =selectElement('#step3');
    removeClass(steps,'current-step');
    sidebarBtn2.classList.add('current-step');

    removeClass(selections,'active-selection')
    const step = selectElement('#select3');
    step.classList.add('active-selection') ;

    const back =selectElement("#back");
    back.style.scale="1";
    
    const nextbtn =selectElement("#next");
    nextbtn.innerHTML='Next Step';
    nextbtn.style.scale ="1";
   }


}  
function step4(){
    if(formIsvalide()){
        const sidebarBtn2 =selectElement('#step4'); 
    removeClass(steps,'current-step');
    sidebarBtn2.classList.add('current-step');
    createSummary()
    removeClass(selections,'active-selection')
    const step = selectElement('#select4');
    step.classList.add('active-selection') ;

    const back =selectElement("#back");
    back.style.scale="1";
    
    const nextbtn =selectElement("#next");
    nextbtn.innerHTML='Confirm';
    nextbtn.style.scale ="1";
    }   
    

}   
// ---------------------vaidate input------------
let emailError =selectElement('#emailError');
let nameError =selectElement('#nameError');
let phoneError =selectElement('#phoneError');


function validateName(){
    let name = selectElement('#formName');
    var value = name.value;

   
    if(value.length ==0 ){
        nameError.innerHTML ='This field is required';
            name.parentNode.classList.add('error');
       
        return false;
    }
    if(!value.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s$/)){
        nameError.innerHTML ='write full name';
        name.parentNode.classList.add('error');
        return false
    }
    nameError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    name.parentNode.classList.remove('error');
    name.parentNode.classList.add('valid');
    setTimeout(() => {
        name.parentNode.classList.remove('valid'); 
        nameError.innerHTML ='';
    }, 3000);
    return true;
    

}

function validateEmail(){
    let email = selectElement('#formEmail');
    var value = email.value;

   
    if(value.length ==0 ){
        emailError.innerHTML ='This field is required';
            email.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                  
        emailError.innerHTML ='email is incorrect';
        email.parentNode.classList.add('error');
        return false
    }
    emailError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    email.parentNode.classList.remove('error');
    email.parentNode.classList.add('valid');
    setTimeout(() => {
        email.parentNode.classList.remove('valid'); 
        emailError.innerHTML ='';
    }, 3000);
    return true;
    

}
function validatePhone(){
    let phone = selectElement('#formPhone');
    var value = phone.value;

   
    if(value.length ==0 ){
        phoneError.innerHTML ='This field is required';
            phone.parentNode.classList.add('error');
        
        return false;
    }
    if(!value.match(/^[+ 0-9]{10,11}$/)){
                  
        phoneError.innerHTML ='11 digits required';
        phone.parentNode.classList.add('error');
        return false
    }
    phoneError.innerHTML ='<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
    phone.parentNode.classList.remove('error');
    phone.parentNode.classList.add('valid');
    setTimeout(() => {
        phone.parentNode.classList.remove('valid'); 
        phoneError.innerHTML ='';
    }, 3000);
    return true;
    

}

function formIsvalide(){
   if(!validateName() || !validateEmail() || !validatePhone()){
       return false;
   }
   return true;
}

// -----------------select plan-------------------
const plan1=selectElement("#plan1");
const plan2=selectElement("#plan2");
const plan3=selectElement("#plan3");

plan1.onclick=function(){
    plan1.classList.add('selected-plan');
    plan2.classList.remove('selected-plan');
    plan3.classList.remove('selected-plan');
}



plan2.onclick=function(){
    plan1.classList.remove('selected-plan');
    plan2.classList.add('selected-plan');
    plan3.classList.remove('selected-plan');
}


plan3.onclick=function(){
    plan1.classList.remove('selected-plan');
    plan2.classList.remove('selected-plan');
    plan3.classList.add('selected-plan');
}

const monthly=selectElement("#monthly");
const yearly=selectElement("#yearly");

const month=selectElement("#month");
const year=selectElement("#year");

const plan =selectElement('.plans');


monthly.onclick=function(){
    yearly.classList.toggle('selected-bill');
    monthly.classList.toggle('selected-bill');
    month.classList.toggle('selected-span')
    year.classList.toggle('selected-span')
    plan.classList.remove('yearly'); 
    plan.classList.add('monthly');
   
}
yearly.onclick=function(){

    monthly.classList.toggle('selected-bill');
    yearly.classList.toggle('selected-bill');
    year.classList.toggle('selected-span')
    month.classList.toggle('selected-span');
    plan.classList.add('yearly'); 
    plan.classList.remove('monthly');
   
   
}


// -----------------------add ons--------------------
const onlineCheckBox =selectElement('#online');
const storageCheckBox =selectElement('#storage');
const customeCheckBox =selectElement('#custome');

onlineCheckBox.addEventListener('change',(e)=>{
    let addOn =selectElement('#onlineAdd');
    if(e.currentTarget.checked){
        
        addOn.classList.add('selected-addOn')
    }else{
        addOn.classList.remove('selected-addOn')
    }
});

storageCheckBox.addEventListener('change',(e)=>{
    let addOn =selectElement('#storageAdd');
    if(e.currentTarget.checked){
        
        addOn.classList.add('selected-addOn')
    }else{
        addOn.classList.remove('selected-addOn')
    }
});

customeCheckBox.addEventListener('change',(e)=>{
    let addOn =selectElement('#customeAdd');
    if(e.currentTarget.checked){
        
        addOn.classList.add('selected-addOn')
    }else{
        addOn.classList.remove('selected-addOn')
    }
});

// -----------------step 4------------summary------
const plans =document.getElementsByClassName ('plan');
const addOns =document.getElementsByClassName('add-on');
const bills =document.getElementsByClassName('bill-circle');
var billing;
var selectedAddOns=[];
var selectedPlan;
var totals=[];
var total=0;

function createSummary(){
    
    for(var i=0;i<plans.length;i++){
        if(plans[i].classList.contains('selected-plan')){
            selectedPlan=plans[i];
            
        }
    }
    for(var i=0;i<bills.length;i++){
        if(bills[i].classList.contains('selected-bill')){
            billing=bills[i];
            
        }
    }
    for(var i=0;i<plans.length;i++){
        if(addOns[i].classList.contains('selected-addOn')){
            if(!selectedAddOns.includes(addOns[i])){
                selectedAddOns.push(addOns[i]);
            }
           
            
        }
    }
    var selected_plan =selectedPlan.childNodes[3].firstElementChild.innerHTML;
    var plan_price;
    if(billing.id =='monthly'){
       plan_price=selectedPlan.childNodes[3].firstElementChild.nextElementSibling.innerHTML;
    }else{
        plan_price=selectedPlan.childNodes[3].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
       
    }
    var getPrice =plan_price.match(/\d+/)[0];
    totals.push(getPrice);
    
    var rowValue=('<th>'+ selected_plan+'('+ billing.id+ ') <br> <a href="#" class="link" onclick="step2()">change</a></th> <th>'+ plan_price +'</th>');
    const tablerow=document.getElementById('tebleHeader')
    tablerow.innerHTML=rowValue;
    

    for(var i=0; i<selectedAddOns.length;i++){
        const price =   selectedAddOns[i].lastElementChild.innerHTML;
        const add_on =   selectedAddOns[i].firstElementChild.lastElementChild.firstElementChild.innerHTML;
        var rowValue=('<td>'+ add_on+' </td> <td>'+ price +'</td>');
        const tablerow=document.getElementById(i.toString())
        tablerow.innerHTML=rowValue;
        getPrice =price.match(/\d+/)[0];
        totals.push(getPrice);
    
    }
   for(var i=0; i<totals.length;i++){
       total += parseInt(totals[i]);
   }
    var rowValue=('<td> $'+ total+'/'+plan_price.split('/')[1]+' </td>');
     tableCell=document.getElementById('total-cell')
    tableCell.innerHTML=rowValue;
    totals=[];
    total=0;
   
}