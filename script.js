const pwd = document.getElementById("pwd")
const pwdbtn = document.getElementById("pwdbtn")

pwdbtn.addEventListener('click',generatepwd);

function generatepwd(){
  let password ="";
  let values = "012[3]4{5}6/7|89" + "abcdef!g@h#i$j%klmno.p?q<r>s,t:uvwxyz" + "ABCD:EF&G*H(I)J_K-L=M+NOPQRSTUVWXYZ"

  for (let i=0;i<7;i++){
    let singlevalues = Math.floor(Math.random()*values.length+1);
    password += values.charAt(singlevalues);
  }
  pwd.innerText = password;
}