function numInsert(numero){
    document.getElementById("calcResultat").value+=numero;
}
var numero1=0;
var opSelected;
function Operator(op){
    if(op=='+'){
        opSelected='+'
    }
    else if(op=='-'){
        opSelected='-';
    }
    else if(op=='*'){
        opSelected='*';
    }
    else if(op=='/'){
        opSelected='/';
    }
    numero1=document.getElementById("calcResultat").value;
    document.getElementById("calcResultat").value="";
}

function calcul(){
    numero2=document.getElementById("calcResultat").value;
    var resultat;
    if(opSelected=='+'){
        resultat=Number(numero1)+Number(numero2)
    }
    if(opSelected=='-'){
        resultat=numero1-numero2;
    }
    if(opSelected=='*'){
        resultat=numero1*numero2;
    }
    if(opSelected=='/'){
        if(document.getElementById("calcResultat").value==0){
            alert("On ne peux pas diviser par 0 !!");         
        }else{
            resultat=numero1/numero2;
        }
    }
    document.getElementById("calcResultat").value=resultat;
}
function squareCalc(){
    nbr=document.getElementById("calcResultat").value;
    resultat=nbr*nbr;
    document.getElementById("calcResultat").value=resultat;
}

function reset(){
    document.getElementById("calcResultat").value="";
}

