import React, {Component} from 'react';
// import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';

var todos = [
	{
	  todoTitle: 'First todo',
	  todoDescription: 'Some kind of description'
	},
	{
	  todoTitle: 'Another todo',
	  todoDescription: 'Another description'
	},
	{
	  todoTitle: 'And another',
	  todoDescription: 'Does it matter?'
	}
  ]

export default class TodoApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}


	

	render() {
		return (
			<div className="container">
				 <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
				 <ul className="list-group">
          			{this.state.todos.map((todo, index) =>
            			<li className="list-group-item" key="{index}">
                			<h4 className="list-group-item-heading">{todo.todoTitle}</h4>
                			<p>{todo.todoDescription}</p>
 						</li>
         			 )}
        		</ul>
			</div>
		);
		
	}
}