

// -------------- 1 problem-------------//

function mindGame(parameter){
    let gon = parameter*3;
    let jog = gon+10;
    let bag = jog/2;
    let beug = bag-5;
    let cons = console.log(beug);
    return cons;
    
}

mindGame(5);



function mindGame(parameter){
    let gon = parameter*3;
    let jog = gon+10;
    let bag = jog/2;
    let beug = bag-5;
    let cons = console.log(beug);
    return cons;
    
}

mindGame(50);



function mindGame(parameter){
    let gon = parameter*3;
    let jog = gon+10;
    let bag = jog/2;
    let beug = bag-5;
    let cons = console.log(beug);
    return cons;
    
}

mindGame(33);




// ------------ 2 problem---------------//



function evenOdd(parameter){

    let letters = parameter.length;
    let kazi = letters%2;
    if(kazi==0){
        console.log('Even');
    }
    else
        console.log('Odd');
    
}
evenOdd( 'Phero' );



function evenOdd(parameter){

    let letters = parameter.length;
    let kazi = letters%2;
    if(kazi==0){
        console.log('Even');
    }
    else
        console.log('Odd');
    
}
evenOdd( 'Batch7' );


function evenOdd(parameter){

    let letters = parameter.length;
    let kazi = letters%2;
    if(kazi==0){
        console.log('Even');
    }
    else
        console.log('Odd');
    
}
evenOdd( 'chatgpt' );












// ------------------problem 3----------------

function isLGSeven(num) {
    let sub = num - 7;
    return sub;
    
  }
 console.log(isLGSeven(6));  



 function isLGSeven(num) {
    let sub = num - 7;
    return sub;
    
  }
 console.log(isLGSeven(-15));  


 function isLGSeven(num) {
    let sub = num - 7;
    return sub;
    
  }
 console.log(isLGSeven(15));  











// ----------------problem 4-----------------

function findingBadData(parameter){
    let BadData = 0;
    for(let i = 0;i<parameter.length;i++){
        if(parameter[i]<0){
            BadData++;
        }
    }
    return BadData;
}
let parameterValue = [ 1,2,5 ];
console.log(findingBadData(parameterValue));



function findingBadData(parameter){
    let BadDatas = 0;
    for(let i = 0;i<parameter.length;i++){
        if(parameter[i]<0){
            BadDatas++;
        }
    }
    return BadDatas;
}
let parameterValueses = [ 2, -5, -7, -13 ];
console.log(findingBadData(parameterValueses));


function findingBadData(parameter){
    let BadDatas = 0;
    for(let i = 0;i<parameter.length;i++){
        if(parameter[i]<0){
            BadDatas++;
        }
    }
    return BadDatas;
}
let parameterValues = [  -4, -9, -5, -33, -55 ];
console.log(findingBadData(parameterValues));





// --------------- 5 problem------------//


function gemsToDiamond(num1, num2, num3) {
    let totaldiamond = num1 * 21 + num2 * 32 + num3 * 43;
    if (totaldiamond > 1000) {
      totaldiamond = totaldiamond - 2000;
    }
    return totaldiamond;
  }
 console.log(gemsToDiamond(1, 1, 1)); 


 function gemsToDiamond(num1, num2, num3) {
    let totaldiamond = num1 * 21 + num2 * 32 + num3 * 43;
    if (totaldiamond > 1000) {
      totaldiamond = totaldiamond - 2000;
    }
    return totaldiamond;
  }
 console.log(gemsToDiamond(20, 200, 50)); 


 function gemsToDiamond(num1, num2, num3) {
    let totaldiamond = num1 * 21 + num2 * 32 + num3 * 43;
    if (totaldiamond > 1000) {
      totaldiamond = totaldiamond - 2000;
    }
    return totaldiamond;
  }
 console.log(gemsToDiamond( 100, 5, 1));