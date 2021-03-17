function logWarningMessage(message){
    return ("WARNING : "+ message)
}
function logErrorMessage(message){
     return ("Error : "+ message)
}
//logWarningMessage("print is out of Ink")
//logErrorMessage("Building is on fire")
module.exports.logErrorMessage = logErrorMessage;
module.exports.logWarningMessage = logWarningMessage;