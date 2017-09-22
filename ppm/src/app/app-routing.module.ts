import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './products/products.component';
import { DeleteComponent } from './delete/delete.component';
import { PostsComponent } from './posts/posts.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeNewComponent } from './home/home-new/home-new.component';

const routes: Routes = [
	{ path: '', component: NewComponent },
	{ path: 'results', component: ProductsComponent },
	{ path: 'ratings', component: PostsComponent },
	{ path: 'players/addplayer', component: HomeNewComponent },
	{ path: 'players/delete/:id', component: HomeNewComponent },
	
	{ path: 'status/game/2', component: ProductsComponent },
	{ path: 'status/game/3', component: DeleteComponent },
	// { path: 'products/edit/:id', component: EditComponent },
	// { path: 'products/new', component: NewComponent },
	// { path: 'products/delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
