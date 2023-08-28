import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { selectProducts } from '../store/products/products.selector';
import { updateCampaignAdGroupName, updateCampaignProducts } from '../store/newcampaign/newcampaign.action';

@Component({
  selector: 'app-product-ad-group',
  templateUrl: './product-ad-group.component.html',
  styleUrls: ['./product-ad-group.component.css']
})
export class ProductAdGroupComponent {

    adGroupNameForm: FormGroup;
 

    allProducts$: Observable<Product[]>;
    private includedProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    private excludedProductsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    
    includedPorducts$ = this.includedProductsSubject.asObservable();
    excludedPorducts$ = this.excludedProductsSubject.asObservable();
  
    constructor(private productService: ProductService, private store: Store ) { }
  
    ngOnInit(): void {
      this.allProducts$ = this.store.select(selectProducts);
      this.allProducts$.pipe(take(1)).subscribe(products => {
        this.excludedProductsSubject.next(products);
      });
      this.adGroupNameForm = new FormGroup({
        "adGroupName": new FormControl(null, [Validators.required]),
      });
    }

    handleProductAdded(product: Product) {
      console.log("Product added:", product);
      
      const currentIncluded = this.includedProductsSubject.getValue();
      const currentExcluded = this.excludedProductsSubject.getValue();
    
      // Add product to includedProducts if not already there
      if (!currentIncluded.some(p => p.id === product.id)) {
        this.includedProductsSubject.next([...currentIncluded, product]);
      }
      
      // Remove product from excludedProducts if it exists there
      this.excludedProductsSubject.next(currentExcluded.filter(p => p.id !== product.id));
    }
    
    handleProductRemoved(product: Product) {
      console.log("Product removed:", product);
      
      const currentIncluded = this.includedProductsSubject.getValue();
      const currentExcluded = this.excludedProductsSubject.getValue();
    
      // Add product to excludedProducts if not already there
      if (!currentExcluded.some(p => p.id === product.id)) {
        this.excludedProductsSubject.next([...currentExcluded, product]);
      }
      
      // Remove product from includedProducts if it exists there
      this.includedProductsSubject.next(currentIncluded.filter(p => p.id !== product.id));
    }

    saveAdGroup() {
      console.log(this.includedProductsSubject.getValue());
      console.log(this.adGroupNameForm.value.adGroupName);
      this.store.dispatch(updateCampaignProducts({products: this.includedProductsSubject.getValue()}));
      this.store.dispatch(updateCampaignAdGroupName({adGroupName: this.adGroupNameForm.value.adGroupName}));
    }
    

   
    

}
