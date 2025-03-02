import { Routes } from "@angular/router";
import { SpellListComponent } from "./spell-list/spell-list.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: '',
        component: SpellListComponent,
        title: 'Home Page',
    },
    {
        path: ':id',
        component: DetailsComponent,
        title: 'Home details',
    },
];

export default routes;