const m = require('mithril');
const Tasks = require('../models/Task').Tasks;
const TaskView = require('./TaskView');

module.exports = {
    view({ attrs }) {
        return m('ul.list-group', attrs.items.map(item => m(TaskView, { item, class: 'list-group-item' })));
    }
}
