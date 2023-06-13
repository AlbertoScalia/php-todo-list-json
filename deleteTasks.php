<?php


if(isset($_DELETE["index"])) {

    $index = intval($_DELETE["index"]);

    $tasksString = file_get_contents('tasks.json');

    $tasksString = file_get_contents('tasks.json');
    $tasksArray = json_decode($tasksString, true);

    array_splice($tasksArray, $index, 1);

    $newTasksJSONString = json_encode($tasksArray);
    file_put_contents('tasks.json', $newTasksJSONString);

    header('Content-Type: application/json');

    echo $newTasksJSONString;
}