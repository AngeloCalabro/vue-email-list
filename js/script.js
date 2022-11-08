const { createApp } = Vue;

createApp({
    data() {
        return {
            emailRandom: [],
            listaNum: 10
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < this.listaNum; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result.data.response);
                    let email = result.data.response;
                    this.emailRandom.push(email);
                })
            }
            console.log(this.listaNum);
            // this.listaNum = '';
            this.emailRandom = [];
        }
    },
    created() {
        // this.callApi();
    }
}).mount('#appEmail')