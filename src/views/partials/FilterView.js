const m = require('mithril');


module.exports = {
    view() {
        return m('ul.filters', [
            m('li', m('a.selected', { href: '#' }, 'All')),
            m('li', m('a', { href: '#/active' }, 'Active')),
            m('li', m('a', { href: '#/completed' }, 'Completed')),
        ]);
    }
}