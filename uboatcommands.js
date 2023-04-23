const uboat = {
    help() {
      console.log("All commands listed:\n - help // Shows commands enabled\n clear // clears the console.\n github.go // takes you to Uboat's github repository");
    },
    clear() {
      console.clear();
    },
    github() {
      window.location.href = "https://github.com/JuniperGamer/uboat";
    }
  }
  
  function help() {
    uboat.help();
  }
  
  function clear() {
    uboat.clear();
  }
  
  function github() {
    uboat.github();
  }

// use uboat.example() to call a command
