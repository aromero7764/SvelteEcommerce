import { writable } from 'svelte/store';


export const filterPrice = writable({
    min: 0,
    max: 0
});