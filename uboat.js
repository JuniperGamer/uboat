let a = 0, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, i = 9, j = 10, k = 11, l = 12, m = 13, n = 14, o = 15, p = 16, q = 17, r = 18, s = 19, t = 21, u = 31, v = 41, w = 51, x = 61, y = 71, z = 81
let caramel = "0-1", stair = "0-2", strawberry = "0-3", chocolate = "0-4", ruby = "0-5", sapphire = "0-6", emerald = "0-7", coal = "0-8", and = "1-0"  

// make it so there is an error if a word from uboat+ does not import

console.group('Uboat Board');
 console.warn("A fix for the console commands has been found, use custom.help to trigger the help command. A fix will be shipped out for all commands soon.")
 console.log("uboat language imported succesfully! Type help if needed. You are using version: 1.0.4-2")
console.groupEnd('Uboat Board');


// NOTE: Ever since the 1.0.2 update, CONSOLE COMMANDS ARE BROKEN! I'm working on a fix but it might take awhile.

// Use custom.help as is. custom being the const and shit. Find a better way to call these commands.

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