const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: null,
            newTask: '',
            apiPost: 'storeTasks.php',
            apiGet: 'getTasks.php'
        }
    },
    methods: {
        addTask() {
            const data = {
                newTask: this.newTask
            }
            axios.post(
                this.apiPost,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    console.log(response)
                    this.tasks = response.data
                }).catch(error => {
                    console.error(error.message)
                })
        },
        toggleCompleted(task) {
            if (task.done === true) {
                task.done = false
            } else {
                task.done = true
            }
        }
    },
    mounted() {
        axios.get(this.apiGet)
        .then(response => {
            this.tasks = response.data;
        })
        .catch(error => {
            console.error(error.message)
        })
    }
}).mount('#app')