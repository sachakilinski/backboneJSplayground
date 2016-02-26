requirejs.config({
    baseUrl: 'vendors',
});

requirejs(['vendors/backbone.js'], function(){
    var Todoitem =  Backbone.Model.extend({urlRoot: 'http://private-1ae31-backboneapi.apiary-mock.com/todos/'})
    var todoitem = new Todoitem({id: 770 })
    console.log(JSON.stringify(todoitem))
    var TodoitemView = Backbone.View.extend({
        render: function(){
            var html = '<li>' + this.model.get('title') + '</li>'
            $(this.el).html(html)
        }
    })
    var todoitemView = new TodoitemView({model: todoitem})


    todoitem.fetch({success: function(){
        todoitemView.render()
        $('#app').html(todoitemView.el)
    }})
})

