import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBugs, resolveBug, getUnresolvedBugs } from './../store/bugs';

const BugList = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(getUnresolvedBugs);
    console.log(bugs);
    // const bugs = useSelector(state=>state.entities.bugs.list);
    const bugResolved = (id) => {
        dispatch(resolveBug(id));
    }

    useEffect(()=>{
        dispatch(loadBugs());
    })

    return ( 
        <ul>
            {bugs.map(bug=><li key={bug.id}>{bug.description} <button onClick={()=>bugResolved(bug.id)}>Resolve</button></li>)}
           
        </ul>
     );
}
 
export default BugList;