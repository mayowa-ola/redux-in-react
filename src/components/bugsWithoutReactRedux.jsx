import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';
import { loadBugs } from '../store/bugs';

class Bugs extends Component {
    state = {
        bugs:[]
      }
    static contextType = StoreContext;

    componentDidMount() {
        // console.log(this.context);
        const store =  this.context;

        this.unsubscribe = store.subscribe(()=> {
            const bugsInStore = store.getState().entities.bugs.list;
            if(bugsInStore !== this.state.bugs)
                this.setState({bugs: bugsInStore});
        });

        store.dispatch(loadBugs());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    render() { 
        return ( 
            <ul>
                {this.state.bugs.map(bug=><li key={bug.id}>{bug.description}</li>)}
            </ul>
         );
    }
}

// Bugs.contextType = StoreContext
 
export default Bugs;