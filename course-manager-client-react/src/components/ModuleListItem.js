import React  from 'react';
import { Link } from 'react-router-dom';

export default class ModuleListItem
extends React.Component {
 constructor(props){
  super(props);
 }
 render() {
     return <div>
         <li className="list-group-item">
             {this.props.module.title}
         <button onClick={() => {
             this.props.delete(this.props.module.id)
         }}>
             DELETE
         </button>
         </li>

         <span className="float-right">
        <i className="fa fa-trash"></i>
        <i className="fa fa-pencil"></i>
       </span>

         <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
             {this.props.module.title}
         </Link>

     </div>;
 }
}
