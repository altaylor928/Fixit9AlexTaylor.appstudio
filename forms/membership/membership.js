var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit1.onclick = function(){
  var isMember = members.includes(inptFirstName.value)
  if (isMember == true){
    lblCheck.value = (`${inptFirstName.value}, you are a member.`)
  }
  else{
    lblCheck.value = (`${inptFirstName.value} you are not a member. We will make you one.`)
    members.push(inptFirstName.value)
    lblCheck.value = (`${inptFirstName.value}, you are now a member!`)
  }
}