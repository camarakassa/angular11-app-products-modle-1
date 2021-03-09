import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [0, Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) {
      return;
    }
    this.productService.save(this.productFormGroup?.value)
      .subscribe(data => {
          alert('Insertion réussie!');
        },
        error => {
          console.log(error);
        });
  }
}
