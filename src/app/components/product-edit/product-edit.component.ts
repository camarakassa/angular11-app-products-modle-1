import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId: number;
  submitted: boolean = false;

  productFormGroup?: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private toastrService:ToastrService) {
    this.productId = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product => {
        this.productFormGroup = this.formBuilder.group({
          id: [product.id],
          name: [product.name, [Validators.required, Validators.minLength(5)]],
          price: [product.price, [Validators.required, Validators.min(100)]],
          quantity: [product.quantity, [Validators.required, Validators.min(1)]],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required]
        });
      });
  }

  onUpdateProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) {
      return;
    }
    this.productService.updateProduct(this.productFormGroup?.value)
      .subscribe(data => {
          this.toastrService.warning('Le produit a été mise à jour avec succès !');
        },
        error => {
          console.log(error);
        });
  }
}
