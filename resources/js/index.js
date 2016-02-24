requirejs.config({
    baseUrl: 'vendors',
});

requirejs(['vendors/backbone.js'], function(){
    var Todolist =  Backbone.Model.extend({})
    var todolist = new Todolist({title: 'title'})
    var TodolistView = Backbone.View.extend({
        render: function(){
            var html = '<li>' + this.model.get('title') + '</li>'
            $(this.el).html(html)
        }
    })
    var todolistView = new TodolistView({model: todolist})
    todolistView.render()
    $('#app').html(todolistView.el)
})

