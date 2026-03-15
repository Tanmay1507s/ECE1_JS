function calculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++)
    {
        let x=prompt("Enter the Subject No."+(i+1));
        total+=x; 
    }
    let average=total/n;
    let grade;
    if(average>=90)
    {
        grade='A';
    }
    else if(average>=80 && average<90)
    {
        grade='B';
    }
    else if(average>=70 && average<80)
    {
        grade='C';
    }
    else if(average>=60 && average<70)
    {
        grade='D';
    }
    else if(average>=40 && average<60)
    {
        grade='E';
    }
    else if(average<40)
    {
        grade='F';
    }
    let result;
    if(average>40)
    {
        result="Pass";
    }
    else
    {
        result="Fail";
    }
    let r=document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average Marks"+average+"<br/>"+"Grade"+grade+"<br/>"+"Result"+result+"<br/>";
}