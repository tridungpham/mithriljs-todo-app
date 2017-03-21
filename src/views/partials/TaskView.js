const m = require('mithril');
const Tasks = require('../../models/Task').Tasks;


module.exports = {
    view({ attrs }) {
        const item = attrs.item;
        const classes = [];

        if (attrs.class) {
            classes.push(attrs.class)
        }

        if (item.done) {
            classes.push('completed')
        }

        let description = item.description + (item.done ? ' (' + item.getDoneTime() + ')' : '');

        return m(
            'li',
            {
                class: classes.join(' '),
            },
            [
                m('.view', [
                    m('input[type=checkbox].toggle', {
                        checked: item.done,
                        onclick: () => Tasks.toggle(item)
                    }),
                    m('label', item.description),
                    m('button.destroy', {onclick: () => Tasks.remove(item)})
                ]),
                m('input.edit', { value: item.description })
            ]);
    }
}