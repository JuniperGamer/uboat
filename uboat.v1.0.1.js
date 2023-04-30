let a = 0, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18, s = 19, t = 21, u = 31, v = 41, w = 51, x = 61, y = 71, z = 81

console.group('Uboat Board');
console.error("You are using a legacy version of uboat language. Please update to the latest version for the newest features.")
 console.log("uboat language imported succesfully! Type help if needed. You are using version: 1.0.1")
console.groupEnd('Uboat Board');

function toUboat(str) {
    let uboatStr = "";
    for (let i = 0; i < str.length; i++) {
      const letter = str[i].toLowerCase();
      const code = uboat[letter];
      if (code !== undefined) {
        uboatStr += code.toString();
      } else {
        uboatStr += letter;
      }
    }
    return uboatStr;
  }
  
  // Function to translate Uboat code to a string
  function fromUboat(uboatStr) {
    let str = "";
    for (let i = 0; i < uboatStr.length; i++) {
      const code = parseInt(uboatStr[i]);
      if (!isNaN(code)) {
        const letters = Object.keys(uboat);
        const letter = letters.find(l => uboat[l] === code);
        str += letter;
      } else {
        str += uboatStr[i];
      }
    }
    return str;
  }
  

function help(){
    help.help()
}
const help = {
    help() {
        console.log("All commands listed:\n - help // Shows commands enabled\n clear // clears the console.\n github.go // takes you to Uboat's github respritory");
    },
};

function clear(){
    clear.clear()
}
const clear = {
    clear() {
        console.clear();
    },
}

function github(){
    github.go()
}
const github = {
    go() {
        window.location.href = "https://github.com/JuniperGamer/uboat";
    },
}