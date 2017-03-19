
const m = require('mithril');
const Tasks = require('./models/Task').Tasks;
const TaskListView = require('./views/TaskListView');
const InputView = require('./views/TaskInsertView');
const StatsView = require('./views/StatsView');

m.mount(document.getElementById('app'), {
    view() {
        return m('div', [
            m(InputView),
            m('.panel-body', m('h4', 'Todo:')),
            m(TaskListView, { items: Tasks.items().filter(item => !item.done) }),
            m('.panel-body', m('h4', 'Done:')),
            m(TaskListView, { items: Tasks.items().filter(item => item.done) }),
            m('.panel-footer', m(StatsView), )
        ])
    }
});

