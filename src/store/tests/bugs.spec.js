import { addBugs,bugAdded, bugRequested,bugRequestFailed } from './../bugs';
import { apiCallBegan } from '../api';
import configureStore from './../configureStore';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

describe('bugs slice', () => {

    let fakeAxios;
    let store;

    beforeEach(()=>{
        fakeAxios = new MockAdapter(axios);
        store = configureStore();
    });

    it('should handle the addbug action', async() => {
        //AAA concept

        //Arrange
        const bug= {description:"a"};
        const saveBug = {...bug,id:1};
        fakeAxios.onPost('/bugs').reply(200, saveBug)
        
        //Act
        await store.dispatch(addBugs(bug));
        
        //Assert
        expect(store.getState().entities.bugs.list).toContainEqual(saveBug); 

    });
    describe('action creators', () => {
        it('add bugs', () => {
            const bug = {description:'a'};
            const result =  addBugs(bug);
            const expected = {
                type: apiCallBegan.type,
                payload: {
                    url:'/bugs',
                    method:'post',
                    data:bug,
                    onStart: bugRequested.type,
                    onSuccess : bugAdded.type,
                    onError: bugRequestFailed.type
                } 
            }
            expect(result).toEqual(expected);  
        })
    })
})