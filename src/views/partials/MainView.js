const m = require('mithril');
const Tasks = require('../../models/Task').Tasks;
const ToggleAllView = require('./ToggleAllView');
const TodoListView = require('./TaskListView');


module.exports = {
    view({ attrs }) {
        if (!attrs.items || attrs.items.length == 0) {
            return '';
        }

        return m('section.main', [
            m(ToggleAllView),
            m(TodoListView, { items: attrs.items }),
        ]);
    }
}