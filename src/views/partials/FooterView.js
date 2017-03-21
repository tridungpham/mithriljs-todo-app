const m = require('mithril');
const Tasks = require('../../models/Task').Tasks;

// view
const CounterView = require('./CounterView');
const FilterView = require('./FilterView');

module.exports = {

    clearCompletedTasks() {
        if (confirm('Are you sure to clear all completed tasks ?')) {
            Tasks.removeCompletedTasks();
        }
    },

    view() {
        if (Tasks.total() == 0) {
            return '';
        }

        return m('footer.footer', [
            m(CounterView),
            m(FilterView),
            m('button.clear-completed', {onclick: this.clearCompletedTasks}, 'Clear completed')
        ]);
    }
}