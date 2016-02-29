requirejs.config({
    baseUrl: 'vendors',
});

requirejs(['vendors/backbone.js'], function(){
    var Todoitems =  Backbone.Collection.extend({url: 'http://private-1ae31-backboneapi.apiary-mock.com/todos'})
    var todoitems = new Todoitems()
    var TodoitemsView = Backbone.View.extend({
        initialize: function(){
            var html = '<input type="text" name="newtodo" id="newtodo" value="Add Item"> <input type="submit" id="addtodo" value="Add">'
            $(this.el).html(html)
        },
        events:{
          "click" : 'addTodo'
        },
        renderItem: function(item){
            var html = '<li>' + item.get('title') + '</li>'
            $(this.el).append(html)
        },
        render: function(){
            this.collection.each(this.renderItem, this)
        },
        addTodo: function(e){
            alert("clicked")
        }
    })
    var todoitemsView = new TodoitemsView({collection: todoitems})


    todoitems.fetch({success: function(){
        todoitemsView.render()
        $('#app').html(todoitemsView.el)
    }})
})

