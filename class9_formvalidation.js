
// Regular Expression
// / ... regular expression goes inside this .../
// ^ -> it checks from the start
// $ -> it checks from the end
// [a-z] -> matches lower alphabets
// [A-Z] -> matches uppercase alphabets
// [a-zA-Z]-> matches all alphabets
// [0-9] -> matches numeric values
// [a-z0-9] -> matches alphanumeric value
// {minValue, maxValue} -> eg:{3,50}
// for special characters use \eg:\@,\#,\_ etc
// ?= -> it means position of charactes does not matter (when we valid password)
// . => it matches the single character
// * -> it mataches one or more preceeding characters

const displayMgs = (mgs, id, colorname)=>{
    document.getElementById(id).innerHTML = mgs
    document.getElementById(id).style.color = colorname
}

const fnamevalidate=()=>{
    const fname = document.getElementById('fname').value

    if(fname==""){
        displayMgs("First Name is Mandotary", "fnamemgs", "red")
        return false
    }
    else if(fname.length< 3){
        displayMgs("First Name must be more than 2 character", "fnamemgs", "red")
        return false
    }
    else if(!fname.match(/^[a-zA-Z]+$/)){
        displayMgs("First Name should only contain alphabet", "fnamemgs", "red")
        return false
    }
    else {
        displayMgs("Valid First name", 'fnamemgs', 'green')
        return true
    }
}


const lnamevalidate=()=>{
    const lname = document.getElementById('lname').value

    if(lname==""){
        displayMgs("Last Name is Mandotary", "lnamemgs", "red")
        return false
    }
    else if(lname.length <= 2){
        displayMgs("Last Name must be more than one character", "lnamemgs", "red")
        return false
    }
    else if(!lname.match(/^[a-zA-Z]+$/)){
        displayMgs("Last Name should only contain alphabet", "lnamemgs", "red")
        return false
    }
    else {
        displayMgs("Valid Last name", 'lnamemgs', 'green')
        return true
    }
}

const emailvalidate=()=>{
    const email = document.getElementById('email').value

    if(email==""){
        displayMgs("Email is Mandotary", "emailmgs", "red")
        return false
    }
    else if(email.length< 3){
        displayMgs("Email must be more than 2 character", "emailmgs", "red")
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\!\.\-\#\%\&\@]+\@+([a-z])+\.+([a-z])+$/)){
        displayMgs("Invalid email", "emailmgs", "red")
        return false
    }
    else {
        displayMgs("Valid Email", 'emailmgs', 'green')
        return true
    }
}

const pwdvalidate=()=>{
    const pwd = document.getElementById('pwd').value

    if(pwd==""){
        displayMgs("pwd is Mandotary", "pwdmgs", "red")
        return false
    }
    
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&!]).{8,20}$/)){
        displayMgs("Weak Password", "pwdmgs", "red")
    
    }
    else {
        displayMgs("Strong Password", 'pwdmgs', 'green')
        return true
    }
}

const cpwdvalidate=()=>{
    const pwd = document.getElementById('pwd').value
    const cpwd = document.getElementById('cpwd').value

    if(cpwd==""){
        displayMgs("Confirm Password is Mandotary", "cpwdmgs", "red")
        return false
    }
    
    else if(!(cpwd==pwd)){
        displayMgs("Password didn't match.", "cpwdmgs", "red")
        return false
    }
    else {
        displayMgs("Password Match", 'cpwdmgs', 'green')
        return true
    }

}
const validform=()=>{
    if(fnamevalidate()&&lnamevalidate()&&emailvalidate()&&pwdvalidate()&&cpwdvalidate()){
        return true
    }
else{
    return false
}
}