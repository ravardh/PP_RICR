function submit(){

    const nm = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const ag = document.getElementById("age").value;
    const db = document.getElementById("dob").value;
    const ps = document.getElementById("password").value;
    const gn = document.querySelector("input[name='gender']:checked").value;
    const ex= document.getElementById("experience").value;
    const res = document.getElementById("resume").value;
    const ql = []; 
    
    document.querySelectorAll("input[name='qualification']:checked").forEach(element => {
        ql.push(element.value)
    });

    const ck =document.getElementById("accept").checked;
    if(!ck){
        alert("Please accept the Terms and condition")
        return;
    }

    console.log(nm,em,ag,db,ps,gn,ql,ex,res);
}