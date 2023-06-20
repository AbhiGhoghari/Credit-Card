function restrictInputLength(event, maxLength) {
    const input = event.target;
    const inputValue = input.value;
    
    if (inputValue.length > maxLength) {
      input.value = inputValue.slice(0, maxLength);
    }
  }

  var arr;

  var liveNumber = document.querySelector("#c-number");
  var number = document.querySelector("#number");

  number.addEventListener("input", function(event){
    arr = event.target.value;
    var formattedArr = '';
  
    for (var i = 0; i < arr.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedArr += ' ';
      }
      formattedArr += arr[i];
      console.log(arr.length)
    }
  
    liveNumber.textContent = formattedArr;
  });
    

  var liveName = document.querySelector("#c-name");
  var name1 = document.querySelector("#name");

  
 name1.addEventListener("input" , function(event){
    arr = event.target.value;
    var formattedArr = '';
  
    for (var i = 0; i < arr.length; i++) {
      
      formattedArr += arr[i];
      
    }
       liveName.textContent = formattedArr;
 });
  

  var liveMM = document.querySelector("#c-mm");
  var mm = document.querySelector("#MM");

  mm.addEventListener("input" ,  function (event){
    arr = event.target.value;
    var formattedArr = '';
  
    for (var i = 0; i < arr.length; i++) {
      
      formattedArr += arr[i];
     
    }
  
    liveMM.textContent = formattedArr;
   
  })

  var liveyear = document.querySelector("#c-yy");
  var year = document.querySelector("#YY");

  year.addEventListener("input" , function(event){
    arr = event.target.value;
    var formattedArr = "";

    for (var i = 0; i < arr.length; i++) {
      
        formattedArr += arr[i];
       
      }
     
      liveyear.textContent = formattedArr;

  })

  var livecvc = document.querySelector("#c-cvc");
  var cvc = document.querySelector("#cvc");

  cvc.addEventListener("input" , function(event){
    arr = event.target.value;
    var formattedArr = "";

    for (var i = 0; i < arr.length; i++) {
      
        formattedArr += arr[i];
       
      }
    
      livecvc.textContent = formattedArr;

  })


  document.querySelector("button").addEventListener("click" , function(){

    var cname = name1.value;
    var cnumber = number.value;
    var cmm = mm.value;
    var cyear = year.value;
    var ccvc  = cvc.value;

    var arr = [];
    var p = [];
    arr.push(cname);
    arr.push(cnumber);
    arr.push(cmm);
    arr.push(cyear);
    arr.push(ccvc)

    if(cmm > 12){
        mm.style.border = "1px solid red";
    }

    for(var i=0 ; i<5 ; i++){
        if(arr[i] == ""){
            if(i === 0){
                p.push(name1);
            }
            else if(i===1){
                p.push(number);
            }
            else if(i === 2){
                p.push(mm)
            }
            else if( i === 3){
                p.push(year)
            }
            else if(i === 4) {
                p.push(cvc)
            }
        }
    }

    for(var i = 0 ; i < p.length ; i++){
        var name3 = p[i];
        name3.style.border = "1px solid red";
    }
    
    if(cmm > 12){

    }else{
      if(p.length ===0){
        document.querySelector(".confirm").style.visibility =  "visible";
        document.querySelector(".info").style.visibility =  "hidden";
      }
      
    }

    

  })


  document.querySelector(".continue").addEventListener("click" , function(){
    document.querySelector(".confirm").style.visibility =  "hidden";
        document.querySelector(".info").style.visibility =  "visible";
  })

  


  