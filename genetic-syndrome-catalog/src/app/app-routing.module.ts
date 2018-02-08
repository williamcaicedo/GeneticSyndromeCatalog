import { SyndromeListComponent } from './syndrome-list/syndrome-list.component';
import { SyndromeDetailComponent } from './syndrome-detail/syndrome-detail.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule  } from "@angular/core";


const appRoutes: Routes = [
    {
        path: 'detail/:id',
        component: SyndromeDetailComponent
    },
    {
        path: '',
        component: SyndromeListComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}