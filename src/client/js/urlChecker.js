function validURL(url) {
    var reg =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    if(reg.test(url)){
        return true;
    }else{
        return false;
    }
 }
module.exports = validURL;
