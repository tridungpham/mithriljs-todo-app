/* Our models */

if (!localStorage.getItem('todoTasks')) {
    localStorage.setItem('todoTasks', JSON.stringify([]));
}


const Task = function (description, done) {
    this.description = description;
    this.done = done || false;
    this.doneTime = null;
    this.id = Date.now();
}

Task.prototype.toggle = function () {
    this.done = !this.done

    if (this.done) {
        this.doneTime = new Date();
    }
}

Task.prototype.getDoneTime = function () {
    return this.done ? this.doneTime.toString() : '';
}

Task.fromObj = function (data) {
    let task = new Task;
    Object.assign(task, data);

    return task;
}


const Tasks = {
    data: null,

    items() {
        if (this.data == null) {
            this.__read();
        }

        return this.data;
    },

    push(description) {
        this.data.push(new Task(description));
        this.__write();

        // console.log(this.data);
    },

    toggle(item) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == item.id) {
                this.data[i].toggle();
                this.__write();
                break;
            }
        }
    },

    remove: function (item) {
        let currentLength = this.data.length;

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == item.id) {
                this.data.splice(i, 1);
                this.__write();
                break;
            }
        }

        return currentLength != this.data.length;
    },

    total() {
        return this.items().length;
    },

    countDone() {
        return this.items().filter(item => item.done).length;
    },

    __write() {
        localStorage.setItem('todoTasks', JSON.stringify(this.data));
    },

    __read() {
        let data = JSON.parse(localStorage.getItem('todoTasks'));
        if (data.constructor === Array) {
            this.data = data.map(item => {
                item = Task.fromObj(item);
                return item;
            });
        }
    }
}

module.exports = { Task, Tasks }
