import { writable } from "svelte/store";

const {update, subscribe} = writable({
    isLoading: false,
    users: [],
});

function Store(){
    const store = {
        subscribe: subscribe,
        fetch: function(){

            update((data)=>{
                data.isLoading = false;                
                return data;
            })

            fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then((users)=>{
                update((data)=>{
                    data.users = users;
                    data.isLoading = true;
                   

                    
                    return data;
                })
            })
        }
    };
console.log(store)

    return store;
    
}

const json_place_holder = Store();
export {json_place_holder}