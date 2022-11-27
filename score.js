function addPlayer(){
    if(arrBat.length>11 && arrBow.length>11)
    {
        alert('you cant add more player');
    }else{
        console.log('test');
        document.getElementById('id01').style.display='block';
        document.getElementById('name').value="";
    }
}

function handleCancel(){
    document.getElementById('id01').style.display='none';
}
var c=0;
var arrBat=[];
var arrBow=[];
function handleSave()
{
    let tempList=[];
    let tempList2=[];
    document.getElementById('id01').style.display='none';
    console.log(document.getElementById('type').value);
    console.log(document.getElementById('name').value);
    let batType=document.getElementById('type').value;
    let batName=document.getElementById('name').value;
    document.getElementById('bowling').innerHTML="";
    document.getElementById('batting').innerHTML="";
    document.getElementById('batting').innerHTML+='<tr><th id="btname'+c+'" >'+'Batting'+'</th><th id="btrun'+c+'" >'+'R'+'</th><th id="fourrun'+c+'">'+'4s'+'</th><th id="sixrun'+c+'">'+'6s'+'</th><th id="strikeRate'+c+'">'+'SR'+'</th></tr>';
    document.getElementById('bowling').innerHTML+='<tr><th id="btname'+c+'" >'+'Bowling'+'</th><th id="btrun'+c+'" >'+'O'+'</th><th id="fourrun'+c+'">'+'R'+'</th><th id="sixrun'+c+'">'+'W'+'</th></tr>';

    
    if(batType=='Batsman')
    {
        //document.getElementById('batting').innerHTML+='<tr><td id="btname'+c+'" >'+batName+'<sup>*</sup></td><td id="btrun'+c+'" >'+0+'</td><td id="fourrun'+c+'">'+0+'</td><td id="sixrun'+c+'">'+0+'</td><td id="strikeRate'+c+'">'+0+'</td></tr';
        arrBat.push({
            isbatsman:true,
            four:0,
            six:0,
            onstrike:false,
            run:0,
            batsmanName:batName,
            strikeRate:0,
            ball:0,
            isOut:false
            
        })
        console.log(arrBat,'all elements');
        arrBat[0].onstrike=true;
    }else{
       // document.getElementById('bowling').innerHTML+='<tr><td id="bwname'+c+'">'+batName+'<sup>*</sup></td><td>'+0+'</td><td id="bwover'+c+'">'+0+'</td><td id="bwicket'+c+'">'+0+'</td></tr'; 
        arrBow.push({
            isBowler:true,
            onstrike:false,
            bowlerName:batName,
            wicket:0,
            overRun:0,
            over:0.0

        });

        arrBow[0].onstrike=true;
        console.log(arrBow,'all elements for bowler');
    }
    
    

    //tempList=[...arrBat];
    //tempList2=[...arrBow];

    for(let i=0;i<arrBat.length;i++)
    {
        if(arrBat[i].isbatsman==true)
        {
            document.getElementById('batting').innerHTML+='<tr><td id="btname'+c+'" >'+arrBat[i].batsmanName+'</td><td id="btrun'+c+'" >'+arrBat[i].run+'</td><td id="fourrun'+c+'">'+arrBat[i].four+'</td><td id="sixrun'+c+'">'+arrBat[i].six+'</td><td id="strikeRate'+c+'">'+arrBat[i].strikeRate+'</td></tr';
        }
    }
    for(let i=0;i<arrBow.length;i++)
    {
        if(arrBow[i].isBowler==true)
        {
            document.getElementById('bowling').innerHTML+='<tr><td id="bwname'+c+'">'+arrBow[i].bowlerName+'</td><td>'+arrBow[i].over+'</td><td id="bwover'+c+'">'+arrBow[i].overRun+'</td><td id="bwicket'+c+'">'+arrBow[i].wicket+'</td></tr'; 
        }
    }


    
}




var newCount=0;
var k=0;
var opner=[];
function handleSubmit()
{
    document.getElementById('s').value;
    console.log(document.getElementById('runs').innerHTML,'runs');
    let oldRun=document.getElementById('runs').innerHTML;
    let oldW=document.getElementById('wicket').innerHTML;
    let currRun=document.getElementById('s').value;
    let numOfBall=document.getElementById('over').innerHTML;
    let numOfOver=document.getElementById('over1').innerHTML;
    let numOfBall1=document.getElementById('ov').innerHTML;
    let numOfOver1=document.getElementById('ov1').innerHTML;
    if(arrBat.length==0 || arrBow.length==0)
    {
        alert('please select batsman and bowler');
    }else{
        
    if(currRun=='1' || currRun=='2' || currRun=='3' || currRun=='4' || currRun=='6' || currRun=='w' || currRun=='W')
    {
        if(parseInt(oldW)>=9)
        {
             alert('team all out');
        }
        document.querySelector('.add').disabled=true;
        document.getElementById('batting').innerHTML="";
        document.getElementById('bowling').innerHTML="";
        document.getElementById('batting').innerHTML+='<tr><th id="btname'+c+'" >'+'Batting'+'</th><th id="btrun'+c+'" >'+'R'+'</th><th id="fourrun'+c+'">'+'4s'+'</th><th id="sixrun'+c+'">'+'6s'+'</th><th id="strikeRate'+c+'">'+'SR'+'</th></tr>';
        document.getElementById('bowling').innerHTML+='<tr><th id="btname'+c+'" >'+'Bowling'+'</th><th id="btrun'+c+'" >'+'O'+'</th><th id="fourrun'+c+'">'+'R'+'</th><th id="sixrun'+c+'">'+'W'+'</th></tr>';
        if(parseInt(numOfBall)>4 && parseInt(numOfBall1)>4)
        {
            document.getElementById('over1').innerHTML=parseInt(numOfOver)+1;    
            document.getElementById('over').innerHTML='0';
            document.getElementById('ov1').innerHTML=parseInt(numOfOver1)+1;    
            document.getElementById('ov').innerHTML='0';
        }else{
            document.getElementById('over').innerHTML=parseInt(numOfBall)+1;   
            document.getElementById('ov').innerHTML=parseInt(numOfBall1)+1;  
        }
        if(currRun=='W' || currRun=='w')
        {
            document.getElementById('wicket').innerHTML=parseInt(oldW)+1;
        }else{
            document.getElementById('runs').innerHTML=parseInt(oldRun)+parseInt(currRun);     
        }
        
        if(k==0)
        {      
                for(let i=0;i<2;i++)
                {
                    opner.push(arrBat[i]);
                    console.log(opner[i],'data of opner',arrBat[i]);
                }
                k++;
        }

        console.log(opner,'opner data');
        console.log(opner[0],'opner data');
        console.log(opner[1],'opner data');

        if(currRun=='1' || currRun=='3')
        {
            for(let i=0;i<2;i++)
            {
                if(opner[i].onstrike==true)
                {
                    if(currRun=='1')
                    {
                        opner[i].run+=1;
                        opner[i].ball+=1;
                        opner[i].strikeRate=(opner[i].run/opner[i].ball)*100;
                        
                    }else{
                        opner[i].run+=3;
                        opner[i].ball+=1;
                        opner[i].strikeRate=(opner[i].run/opner[i].ball)*100;
                    }
                    opner[i].onstrike=false;
                }else{
                    opner[i].onstrike=true;
                }
            }
        }else if(currRun=='2' || currRun=='4' || currRun=='6' || currRun=='W'|| currRun=='w' )
        {
            for(let i=0;i<2;i++)
            {
                console.log(currRun,'you currn ball', opner, i);
                console.log(opner[i].onstrike,i,'index and onstrike');
                if(opner[i].onstrike==true)
                {
                    if(currRun=='2')
                    {
                        opner[i].run+=2;
                        opner[i].ball+=1;
                        opner[i].strikeRate=(opner[i].run/opner[i].ball)*100;
                    }else if(currRun=='4'){
                        opner[i].run+=4;
                        opner[i].four+=1;
                        opner[i].ball+=1;
                        opner[i].strikeRate=(opner[i].run/opner[i].ball)*100;
                    }else if(currRun=='6')
                    {
                        opner[i].run+=6;
                        opner[i].six+=1;
                        opner[i].ball+=1;
                        opner[i].strikeRate=(opner[i].run/opner[i].ball)*100;
                    }else if(currRun=='W')
                    {
                        let index=arrBat.findIndex(o=>o.batsmanName==opner[i].batsmanName);
                        console.log(index,'indeax in avrr bat');
                        opner[i].onstrike=false;
                        opner[i].isOut=true;
                        arrBat[index]=opner[i];
                        console.log(arrBat[index],'for W');
                        opner.splice(i,1);
                        opner[i]=arrBat[index+1];
                        opner[i].onstrike=true;
                    }else if(currRun=='w')
                    {
                        let index=arrBat.findIndex(o=>o.batsmanName==opner[i].batsmanName);
                        console.log(opner[i].batsmanName,'batsman Name');
                        console.log(index,'indeax in avrr w bat');
                        opner[i].onstrike=false;
                        opner[i].isOut=true;
                        arrBat[index]=opner[i];
                        console.log(arrBat[index],'for w');
                        opner.splice(i,1);
                        console.log(opner,'opner in w');
                        opner[i]=arrBat[index+1];
                        console.log(opner[i],'afetre adding');
                        opner[i].onstrike=true;
                    }   
                }
            }   
        }

        for(let i=0;i<arrBow.length;i++)
        {
             if(arrBow[i].onstrike==true && i!=odl)
             { 
                    if(i==arrBow.length-1 )
                    {
                        if(arrBow[i].over==0.5)
                        {
                            arrBow[0].onstrike=true;
                            arrBow[i].over+=0.5;
                            arrBow[i].onstrike=false;
                            document.querySelector('#sub').disabled=true;
                        }else{
                            arrBow[i].over+=0.1;
                        }
                    }else if(arrBow[i].over==0.5)
                    {
                        arrBow[i+1].onstrike=true;
                        var odl=i+1;
                        arrBow[i].over+=0.5;
                        arrBow[i].onstrike=false;
                        for(let j=0;j<2;j++)
                        {
                                if(opner[j].onstrike==true)
                                {
                                    opner[j].onstrike=false;
                                }else{
                                    opner[j].onstrike=true;
                                }
                        }
        
                    }else{
                        arrBow[i].over+=0.1;
                    }
                    
                    if(currRun=='2')
                    {
                        arrBow[i].overRun+=2;
                    }else if(currRun=='4'){
                        arrBow[i].overRun+=4;
                    }else if(currRun=='6')
                    {
                        arrBow[i].overRun+=6;
                    }else if(currRun=='1')
                    {
                        arrBow[i].overRun+=1;
                    }else if(currRun=='3')
                    {
                        arrBow[i].overRun+=3;
                    }else if(currRun=='W' || currRun=='w')
                    {
                        arrBow[i].wicket+=1;
                    }  
                    document.getElementById('bowling').innerHTML+='<tr><td id="bwname'+c+'">'+arrBow[i].bowlerName+'<sup>*</sup></td><td>'+(arrBow[i].over).toFixed(1)+'</td><td id="bwover'+c+'">'+arrBow[i].overRun+'</td><td id="bwicket'+c+'">'+arrBow[i].wicket+'</td></tr';
             }else{
                    document.getElementById('bowling').innerHTML+='<tr><td id="bwname'+c+'">'+arrBow[i].bowlerName+'</td><td>'+arrBow[i].over+'</td><td id="bwover'+c+'">'+arrBow[i].overRun+'</td><td id="bwicket'+c+'">'+arrBow[i].wicket+'</td></tr';
             }
        }

        for(let i=0;i<arrBat.length;i++)
        {
            if(arrBat[i].onstrike==true)
            {
                document.getElementById('batting').innerHTML+='<tr><td id="btname'+c+'" >'+arrBat[i].batsmanName+'<sup>*</sup></td><td id="btrun'+c+'" >'+arrBat[i].run+'</td><td id="fourrun'+c+'">'+arrBat[i].four+'</td><td id="sixrun'+c+'">'+arrBat[i].six+'</td><td id="strikeRate'+c+'">'+(arrBat[i].strikeRate).toFixed(2)+'</td></tr';

            }else if(arrBat[i].isOut==true)
            {
                document.getElementById('batting').innerHTML+='<tr><td id="btname'+c+'" ><font color="#CDC7C7">'+arrBat[i].batsmanName+'</font></td><td id="btrun'+c+'" >'+arrBat[i].run+'</td><td id="fourrun'+c+'">'+arrBat[i].four+'</td><td id="sixrun'+c+'">'+arrBat[i].six+'</td><td id="strikeRate'+c+'">'+(arrBat[i].strikeRate).toFixed(2)+'</td></tr';
            }else{
                document.getElementById('batting').innerHTML+='<tr><td id="btname'+c+'" >'+arrBat[i].batsmanName+'</td><td id="btrun'+c+'" >'+arrBat[i].run+'</td><td id="fourrun'+c+'">'+arrBat[i].four+'</td><td id="sixrun'+c+'">'+arrBat[i].six+'</td><td id="strikeRate'+c+'">'+(arrBat[i].strikeRate).toFixed(2)+'</td></tr';
            }
        }
       console.log(opner,'all opner');

   }else{
       alert('please valid value');
   }

 }
    
}