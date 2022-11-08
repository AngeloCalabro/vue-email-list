const { createApp } = Vue;

createApp({
    data() {
        return {
            emailRandom: []
        }
    },
    methods: {
        callApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                console.log(res.data.response);

                for (let email = 0; email <= 10; email++) {
                    let email = res.data.response;
                    this.emailRandom.push(email.lenght);
                }
            })
        }
    },
    created() {
        // this.callApi()
    }
}).mount('#appEmail')