import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import service and query
import { Angular2PrestaService, Angular2PrestaQuery } from 'angular2-presta';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let product of product$ | async">
      <a2p-image [resource]="query.resource" [resourceID]="product.id" [imageID]="product.id_default_image" [size]="'home'"></a2p-image>
      <h1 [innerHTML]="product.name"></h1>
      <p [innerHTML]="product.description_short"></p>
      <p>{{ product.price | currency }}<p>
    </div>`,
  styles: []
})
export class AppComponent implements OnInit {

  // products observable
  product$: Observable<any>;

  // Search products for dress
  query: Angular2PrestaQuery = {
    resource : 'products',
    search: 'dress'
  };

  // Inject Angular2PrestaService
  constructor(private _service: Angular2PrestaService) {}

  ngOnInit() {
    // Use search function provided by Angular2PrestaService
    this.product$ = this._service.search(this.query);
  }

}
