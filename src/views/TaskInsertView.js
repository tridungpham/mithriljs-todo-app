const m = require('mithril');
const stream = require('mithril/stream');
const Tasks = require('../models/Task').Tasks;


module.exports = {
    data: stream(''),

    view() {
        return m('.panel-body', m('.form-horizontal', m('.row.form-group', [
            m('.col-md-10', m('input.form-control', {
                type: 'text',
                value: this.data(),
                placeholder: 'Add new task...',
                oninput: m.withAttr('value', this.data)
            })),
            m('.col-md-2', m('button.btn.btn-primary', {
                onclick: () => {
                    Tasks.push(this.data());
                    this.data('')
                }
            }, 'Add'))
        ])))
    }
}
