const m = require('mithril');
const Tasks = require('../models/Task').Tasks;

module.exports = {
    view() {
        return m('#stats-container', [
            m('h3', 'Stats'),
            m('ul', [
                m('li', 'Total: ' + Tasks.total()),
                m('li', 'Done: ' + Tasks.countDone())
            ])
        ])
    }
}