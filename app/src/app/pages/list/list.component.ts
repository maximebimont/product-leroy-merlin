import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) public sort!: MatSort;
  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  protected products!: Product[];
  protected _products!: Subscription
  protected dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  protected displayedColumns: string[] = ['id','name','price'];

  public constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this._products = this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.dataSource.data = products;
    })
  }

  ngOnDestroy(): void {
    this._products.unsubscribe();
  }

}
