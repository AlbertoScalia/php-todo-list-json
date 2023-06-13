<?php 

if(isset($_POST["index"])) {
    $index = intval($_POST["index"]);
    $tasksString = file_get_contents('tasks.json');
    $tasksArray = json_decode($tasksString, true);

    $numericIndexedArray = array_values($tasksArray);

    $task = $numericIndexedArray[$index];

    if($task["done"] === true) {
        $task["done"] = false;
    } else {
        $task["done"] = true;
    }

    $replacement = array($index => $task);
    $newTasksArray = array_replace($tasksArray, $replacement);

    $newTasksJSONString = json_encode($newTasksArray);
    file_put_contents('tasks.json', $newTasksJSONString);

    header('Content-Type: application/json');

    echo $newTasksJSONString;
}