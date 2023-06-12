const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: null,
        }
    },
    mounted() {
        axios.get('getTasks.php')
        .then(response => {
            this.tasks = response.data;
        })
    }
}).mount('#app')