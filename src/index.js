//importaciones
import './styles.css';
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';

//instancia del objeto
export const todoList = new TodoList();
//modificacion
todoList.todos.forEach(crearTodoHtml);



