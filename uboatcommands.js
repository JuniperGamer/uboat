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
