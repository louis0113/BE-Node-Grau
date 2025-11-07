const EventEmitter = require("events");
class TaskManager extends EventEmitter {}

const TKM = new TaskManager();

TKM.on("taskCreated", (task) => {
  task.status = "pendente";
  console.log(`A tarefa "${task.nome}" foi criada e com status ${task.status}`);
});

TKM.on("taskCompleted", (task) => {
  task.status = "concluída";
  console.log(
    `A tarefa "${task.nome}" foi completada e com status ${task.status}`,
  );
});

TKM.on("taskCancelled", (task) => {
  task.status = "cancelada";
  console.log(
    `A tarefa "${task.nome}" foi cancelada e com status ${task.status}`,
  );
});

let task1 = {
  nome: "Criar endpoints aleatórios",
  status: "",
  timeout: 10000,
};

let task2 = {
  nome: "Seila",
  status: "",
  timeout: 500,
};

const tasks = [task1, task2];
const timeForComplete = 30000;
function emit() {
  for (let x = 0; x < tasks.length; x++) {
    TKM.emit("taskCreated", tasks[x]);

    if (x == 0) {
      setTimeout(() => {
        TKM.emit("taskCancelled", tasks[x]);
      }, tasks[x].timeout);
    } else {
      setTimeout(() => {
        TKM.emit("taskCompleted", tasks[x]);
      }, timeForComplete);
    }
  }
}

function show() {
  for (const task of tasks) {
    console.log(task);
  }
}

function run() {
  emit();
  setTimeout(() => {
    show();
  }, timeForComplete + 5000);
}

run();
