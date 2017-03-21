const m = require('mithril');
const TaskView = require('./TaskView');

module.exports = {
    view({ attrs }) {
        return m('ul.todo-list', attrs.items.map(item => m(TaskView, { item, class: 'list-group-item' })));
    }
}
