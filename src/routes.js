import Notes from './components/pages/All_notes.vue';
import Todo from './components/pages/All_todo.vue';
import Forecast from './components/pages/Full_forecast.vue';
import Budget from './components/pages/Budget.vue';
import Home from './components/Home.vue'


export const routes = [

    { path: '', component: Home },
    { path: '/notes', component: Notes },
    { path: '/todo', component: Todo },
    { path: '/forecast', component: Forecast },
    { path: '/budget', component: Budget}
    
];
