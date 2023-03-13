/*
password has to be atleast 8 chars
success - passwords has atleast 8 chars
failed - passwords does not have 8 chars
*/
let pass="12039213"
if(pass.length>=8){
    console.log("success")
}
else{
    console.log("not enough characters,failed")
}