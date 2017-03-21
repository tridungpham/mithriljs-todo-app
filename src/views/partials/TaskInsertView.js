const m = require('mithril');
const stream = require('mithril/stream');
const Tasks = require('../../models/Task').Tasks;


module.exports = {
    data: stream(''),

    resetInput() {
        this.data('');
    },

    onKeyUp(event) {
        if (event.keyCode == 13) {
            Tasks.push(this.data());
            this.resetInput();
        }
    },

    view() {
        return m('header.header', [
            m('h1', 'todos'),
            m('input.new-todo', {
                placeholder: 'What needs to be done?',
                value: this.data,
                autofocus: true,
                oninput: m.withAttr('value', this.data),
                onkeyup: this.onKeyUp.bind(this)
            })
        ]);
    }
}
