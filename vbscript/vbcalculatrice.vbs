Sub numInsert(numero)
 document.getElementById("calcResultat").value =document.getElementById("calcResultat").value + CStr(numero)
End Sub 

Dim numero1
Dim opSelected

Sub Operator(op)
    if(CStr(op)="+") Then 
        opSelected="+"
        End if

    if	(CStr(op)="-") Then
        opSelected="-"
    End if 

    if	(CStr(op)="*") Then
        opSelected="*"
    End if

    if	(CStr(op)="/") Then
        opSelected="/"
    End if

    numero1 = document.getElementById("calcResultat").value
    document.getElementById("calcResultat").value=""
End Sub

Sub calcul()

     numero2=document.getElementById("calcResultat").value
    if(opSelected="+")Then
        document.getElementById("calcResultat").value=CInt(numero1)+(numero2)
    End if

    if(opSelected="-")Then
        document.getElementById("calcResultat").value=numero1-numero2
    End if

    if(opSelected="*")Then
        document.getElementById("calcResultat").value=numero1*numero2
    End if

    if(opSelected="/")Then
        if(numero2=0) Then
            MsgBox("On ne peut pas faire une division par 0")
                document.getElementById("calcResultat").value=0
            Else
            document.getElementById("calcResultat").value=numero1/numero2
            End if
    End if
    
End Sub

Sub squareCalc()
    nbr=document.getElementById("calcResultat").value
    resultat=nbr*nbr
    document.getElementById("calcResultat").value=resultat
End Sub

Sub reset()
    document.getElementById("calcResultat").value=""
End Sub

