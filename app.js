const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: null,
            newTask: '',
            apiPost: 'storeTasks.php',
            apiGet: 'getTasks.php',
            apiDelete: 'deleteTasks.php',
            apiToggleDone: 'toggleDone.php'
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
        toggleDone(index) {
            const data = {
                index
            }
            axios.post(
                this.apiToggleDone,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.tasks = response.data
                }).catch(error => {
                    console.error(error.message)
                })
        },
        deleteTask(index) {

            event.stopPropagation();
            const data = {
                index
            }
            axios.post(
                this.apiDelete,
                data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    this.tasks = response.data
                }).catch(error => {
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