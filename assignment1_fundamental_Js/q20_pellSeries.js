// 1,2,5,12,29
function pellSeries(n)
{
let fNo=1;
let sNo=2;
for(let i=1;i<=n;i++){

    next=fNo+(sNo*2)
    console.log(fNo)
    fNo=sNo;
    sNo=next;
}
}

pellSeries(10)

