import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component{
    state = {
        tasks: []
    }
    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = async () => {
        const {data: response}  = await  api.get('/task');
        this.setState({ tasks: response});
    };

    render(){
        return (<div className="task-list">
            {this.state.tasks.map(task => (
                <h2 key={task.id} >{task.title}</h2>) ) }
        </div>
        )
    }
}