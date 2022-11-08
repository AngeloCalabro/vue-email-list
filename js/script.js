const { createApp } = Vue;

createApp({
    data() {
        return {
            emailRandom: [],
            listaNum: 1
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < this.listaNum; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    let email = res.data.response;
                    this.emailRandom.push(email);
                })
            }
            console.log(this.listaNum);
            this.emailRandom = [];
        }
    },
    created() {
        // this.callApi()
    }
}).mount('#appEmail')