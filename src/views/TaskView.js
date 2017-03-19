const m = require('mithril');
const Tasks = require('../models/Task').Tasks;


module.exports = {
    view({ attrs }) {
        const item = attrs.item;
        const classes = [];

        if (attrs.class) {
            classes.push(attrs.class)
        }

        if (item.done) {
            classes.push('done-item')
        }

        return m(
            'li',
            {
                class: classes.join(' '),
            },
            [
                m('input[type=checkbox]', { checked: item.done, onclick: () => Tasks.toggle(item) }),
                m.trust('&nbsp;'),
                m('span.item-description', item.description),
                m.trust('&nbsp;'),
                m('span', item.done ? '(' + item.getDoneTime() + ')' : ''),
                m('a.close', { onclick: () => Tasks.remove(item) }, m.trust('&times;'))
            ]);
    }
}