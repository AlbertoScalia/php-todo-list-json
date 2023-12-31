<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php-todo-list-json</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>

    <div id="app">
        <div class="container">
            <h1 class="mt-4">ToDo List</h1>
            <div class="card my-4">
                <ul class="list-unstyled mb-0">
                    <li class="p-4 d-flex justify-content-between align-items-center" v-for="(task, index) in tasks"
                        :class="task.done ? 'done' : ''" 
                        @click="toggleDone(index)">
                        {{task.name}}
                        <div class="delete" @click="deleteTask(index)">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" @click="addTask()">
                    +
                </span>
                <input type="text" class="form-control" placeholder="Add new task" v-model="newTask"
                    @keyup.enter="addTask(), newTask = ''">
            </div>
        </div>
    </div>



    <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
    <script src='https://unpkg.com/vue@3/dist/vue.global.js'></script>
    <script src="./app.js"></script>
</body>

</html>