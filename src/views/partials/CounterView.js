const m = require('mithril');
const Tasks = require('../../models/Task').Tasks;

module.exports = {
    view() {

        let countUncompleted = Tasks.countUncompleted();

        return m('span.todo-count', m.trust(`<strong>${countUncompleted}</strong> item left`))
    }
}