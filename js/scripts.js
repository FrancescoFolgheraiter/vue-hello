//destructoring prendo la funzione createApp da Vue
const { createApp } = Vue;
//utilizzo la funzione estrapolata da vue
createApp({
    data(){
        return{
            message: "Hello vue",
            immageUrl:"img/02.webp"
        };
    }
}).mount("#app");