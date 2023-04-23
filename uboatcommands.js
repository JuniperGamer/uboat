function help(){
    custom.help()
}

const custom = {
    help() {
        console.log("All commands listed:%0D%0A - help // Shows commands enabled%0D%0A uboatplus // Takes you to a link to download uboat+%0D%0A uboatplushelp // tells you what uboat+ is.");
    },
};
const clear = {
    clear() {
        console.clear();
    },
}

const uboatplus = {
    uboatplus() {
        console.log("Feature not ready.")
    },
}

const DEBUGuboatplus = {
    DEBUGuboatplus() {
        window.location = "https://duckduckgo.com/?q=uwu&atb=v361-1&ia=web";
    }
}

const uboatplushelp = {
    uboatplushelp() {
        console.log("Uboat + is a an extended version of uboat that adds particular words translated to their values %0D%0A this extension is not ready yet! so please be patient.")
    }
}