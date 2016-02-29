requirejs.config({
    baseUrl: 'vendors',
});

requirejs(['vendors/backbone.js'], function(){
    var Todoitems =  Backbone.Collection.extend({url: 'http://private-1ae31-backboneapi.apiary-mock.com/todos'})
    var todoitems = new Todoitems()
    var TodoitemsView = Backbone.View.extend({
        renderItem: function(item){
            var html = '<li>' + item.get('title') + '</li>'
            $(todoitemsView.el).append(html)
        },
        render: function(){
            this.collection.each(this.renderItem)
        }

    })
    var todoitemsView = new TodoitemsView({collection: todoitems})


    todoitems.fetch({success: function(){
        todoitemsView.render()
        $('#app').html(todoitemsView.el)
    }})
})

