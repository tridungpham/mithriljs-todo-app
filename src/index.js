
const m = require('mithril');
const Tasks = require('./models/Task').Tasks;
const AllTasksView = require('./views/AllTasksView');
const ActiveTasksView = require('./views/ActiveTasksView');
const CompletedTasksView = require('./views/CompletedTasksView');

m.route.prefix('#');

m.route(
    document.getElementById('app'),
    '/',
    {
        '/': AllTasksView,
        '/active': ActiveTasksView,
        '/completed': CompletedTasksView
    }
)