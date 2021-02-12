import { ListPostComponent } from './components/list-post/list-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Routes } from '@angular/router';

const appRoutes : Routes =[
    {
        path:'',
        component:AddPostComponent
    },
    {
        path:'navbaer',
        component:NavbarComponent
    },
{
    path:'list',
    component:ListPostComponent
},
{
    path:'add',
    component:AddPostComponent
},
{
    path:'list/update/:titre',
    component:UpdatePostComponent
},
]
export default appRoutes;