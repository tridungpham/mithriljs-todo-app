const m = require('mithril');
const Tasks = require('../models/Task').Tasks;
const MainView = require('./partials/MainView');
const InputView = require('./partials/TaskInsertView');
const FooterView = require('./partials/FooterView');

module.exports = {
    view({attrs}) {
        return m('section.todoapp', [
            m(InputView),
            m(MainView, { items: attrs.items }),
            m(FooterView)
        ]);
    }
}