
for (let i = 1; i <= 5; i++) {
    let j = '*'; 
    for (let k = 1; k < i; k++) {
        j += '*';
    }
    console.log(j);
}

for (let n = 5; n >= 1; n--) {
    let s = '*'; 
    for (let j = 1; j < n; j++) {
        s += '*'; 
    }
    console.log(s);
}
let name1 = prompt("Adınızı daxil edin:");
let lname = prompt("Soyadınızı daxil edin:");
let date = prompt("Dogum ilinizi daxil edin:");
console.log(name1, lname, "siz ", date , "ildə anadan olmusuz");
  
for (let number = 1; number <= 100; number++){
    if (number % 5 === 0){
        console.log(number);
    }
}

let correctusername = "turkan";
let correctpassword = "2004";  
let username = prompt("Username daxil edin:");
let password = prompt("Password daxil edin:");
if (correctusername === username && correctpassword === password) {
    console.log("Salam, " + username + "! Daxil oldunuz.");
} else {
    console.log("Username və ya password səhvdir.");
}
