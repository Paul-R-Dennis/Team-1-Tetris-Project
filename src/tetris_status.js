// Status class provides all the functionality of keeping the game statuses
// 
class Tetris_status {
    
    constructor() {
    }

    set_playbutton_status() {
        document.querySelector(".play-button").disabled = false;       // Set play  button status to enabled
        document.querySelector(".pause-button").disabled = true;       // Set pause button status to disabled
    }
    
    set_pausebutton_status() {
        document.querySelector(".play-button").disabled = true;       // Set play  button status to disabled
        document.querySelector(".pause-button").disabled = false;     // Set pause button status to enabled
    }
    
    set_login_status() {
        document.querySelector(".login-button").disabled = false;      // Set login  button status to enabled
        document.querySelector(".logout-button").disabled = true;      // Set logout button status to disabled
    }
    
    set_logout_status() {
        document.querySelector(".login-button").disabled = true;       // Set login  button status to disabled
        document.querySelector(".logout-button").disabled = false;     // Set logout button status to enabled
    }
  
}