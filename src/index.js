module.exports = function check(str, bracketsConfig) {

    let strLength = str.length

    let bracketMap = bracketsConfig.map(el => el.join(""));

    while(strLength){
        strLength--
        for(let brasket of bracketMap){
            if(str.includes(brasket)) {
              str = str.replace(brasket, "")
              }
        }
    }

    if(str.length !== 0) {
        return false
    }

    return true
}

