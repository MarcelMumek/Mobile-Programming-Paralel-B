// Mumek, Marcel Sydney Randy
// Exercises #2 - Mobile Programming
// Senin, 01 Maret 2021

// 1. Callback
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan");
        callback();
    }, 3000);
}
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);

// 2. Promise
function helloworld() {
    return helloworld = new Promise((resolve) => {
        resolve("Hello World");
    })
};
let messages = async () => {
    try{
        const msg = await helloworld();
        setTimeout(() => {
            console.log(msg);
        }, 2000);
    }
    catch(error)
    {
        console.log(error);
    }
};
messages()

// 3. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
})
.then(function (user) {
    console.log(user);
});

function ambilDataUser() {

}
ambilDataUser()