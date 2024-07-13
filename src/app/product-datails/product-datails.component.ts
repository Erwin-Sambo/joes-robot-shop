import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.module';


@Component({
  selector: 'bot-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent {

  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  buyButtonClicked(product: IProduct){
    this.buy.emit();
  }

  getImageUrl(product:IProduct){
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct){
    if(product.discount > 0) return ['strikethrough'];
    else return ['',''];
  }


}
