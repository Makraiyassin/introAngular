import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StockComponent} from "./stock/stock.component";
import {PremierComponent} from "./premier/premier.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {PariteComponent} from "./parite/parite.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductComponent} from "./product/product.component";
import {ProduitComponent} from "./pages/produit/produit.component";

const routes : Routes = [
  {path:'stock', component:StockComponent},
  {path:'premier', component:PremierComponent},
  {path: '', component: AccueilComponent},
  {path: 'parite/:nbr', component: PariteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'produit', component:ProduitComponent},
];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{

}
