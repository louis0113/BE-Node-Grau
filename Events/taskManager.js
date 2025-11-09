const EventEmitter = require("events");
class TaskManager extends EventEmitter {
  constructor(nome, status, timeout) {
    super();
    this.nome = nome;
    this.status = status;
    this.timeout = timeout;
  }

  createEvents() {
    this.on("taskCreated", () => {
      this.status = "pendente";
      console.log(
        `A tarefa "${this.nome}" foi criada e com status ${this.status}`,
      );
    });

    this.on("taskCompleted", () => {
      this.status = "concluída";
      console.log(
        `A tarefa "${this.nome}" foi completada e com status ${this.status}`,
      );
    });

    this.on("taskCancelled", (task) => {
      task.status = "cancelada";
      console.log(
        `A tarefa "${task.nome}" foi cancelada e com status ${task.status}`,
      );
    });
  }

  createTask(task) {
    console.log(`Criando task '${this.nome}'`);
    this.emit("taskCreated", task);
  }

  completeTask(task, time) {
    setTimeout(() => {
      setTimeout(() => {
        console.log(`Completando task '${this.nome}'`);
        this.emit("taskCompleted", task);
      }, time);
    }, 1000);
  }

  cancelTask(task) {
    setTimeout(() => {
      console.log(`Cancelando task '${this.nome}'`);
      setTimeout(() => {
        this.emit("taskCancelled", task);
      }, task.timeout);
    });
  }
}

const task1 = new TaskManager("Criar front-end com React", "", 10000);
const task2 = new TaskManager("Criando endpoints", "", 10000);
const tasks = [task1, task2];
const timeForComplete = 30000;
const bufferTimer = 5000;

function run() {
  for (let x = 0; x < 2; x++) {
    tasks[x].createEvents();
    tasks[x].createTask(tasks[x]);
    if (x == 0) {
      tasks[x].cancelTask(tasks[x]);
    } else {
      tasks[x].completeTask(tasks[x], timeForComplete);
    }
  }
}

function showTasks() {
  setTimeout(() => {
    for (const task of tasks) {
      console.log("--------------------------------------------------");
      console.log(
        `Nome: ${task.nome}\nStatus: ${task.status}\nTimeout ${task.timeout}`,
      );
      console.log("--------------------------------------------------");
    }
  }, timeForComplete + bufferTimer);
}

run();
showTasks();
