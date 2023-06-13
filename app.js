const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: null,
            newTask: '',
            apiPost: 'storeTasks.php',
            apiGet: 'getTasks.php',
            apiDelete: 'deleteTasks.php'
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
        },
        deleteTask(index) {

            event.stopPropagation();
            const data = {
                index
            }
            axios.delete(
                this.apiDelete,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                .catch(error => {
                    console.error(error.message)
                })
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