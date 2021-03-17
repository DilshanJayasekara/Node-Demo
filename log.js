//var logWarningMessage = function(message){
 //   return ("WARNING : "+ message)
//};
//var logErrorMessage = function (message){
//     return ("Error : "+ message)
//};

var logModule = {
    logWarningMessage : function(message){
        return ("WARNING : "+ message)
    },
    logErrorMessage : function (message){
        return ("Error : "+ message)
   }
};
//logWarningMessage("print is out of Ink")
//logErrorMessage("Building is on fire")
//module.exports.logErrorMessage = logErrorMessage;
//module.exports.logWarningMessage = logWarningMessage;
module.exports = logModule;