import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { subscribe } from 'diagnostics_channel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class productcomponent{
  constructor(private api:ApiService){}
  products:any=""
  ngOnInit(){
    this.api.getproducts().subscribe((data:any)=>{this.products=data})
  }
  

}
