const { createApp } = Vue;

createApp({
    data() {
        return {
            emailRandom: []
        }
    },
    methods: {
        callApi() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    let email = res.data.response;
                    this.emailRandom.push(email);
                })
            }
        }
    },
    created() {
        // this.callApi()
    }
}).mount('#appEmail')