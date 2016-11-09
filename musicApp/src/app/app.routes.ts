import { ContactComponent } from './contact/contact.component';
import { Route } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { AlbumDetalisComponent } from './spotify/album-detalis/album-detalis.component';

export const routes: Route[] = [

    {
        path: '',   
        component: TodoComponent
    },
    {
        path: 'spotify',
        component: SpotifyComponent
    },
    {
        path: 'spotify/:id',
        component: AlbumDetalisComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
]


