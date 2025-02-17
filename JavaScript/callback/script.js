function sum(a,b)
{
    console.log(a+b);
}

function  calc(e,f,xyz){
    e=e+1;
    f=f+1
    xyz(e,f)
}


calc(1,2,sum())