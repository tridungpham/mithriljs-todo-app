const m = require('mithril');
const Tasks = require('../models/Task').Tasks;
const BaseView = require('./BaseView');

module.exports = {
    view() {
        return m(BaseView, {items: Tasks.items()})
    }
}