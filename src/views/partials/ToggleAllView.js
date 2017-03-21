const m = require('mithril');
const Tasks = require('../../models/Task').Tasks;

module.exports = {
    view() {
        return m('div', [
            m('input[type=checkbox].toggle-all'),
            m('label', {for: 'toggle-all', onclick: () => Tasks.markAllAsDone()}, 'Mark all as complete')
        ]);
    }
}