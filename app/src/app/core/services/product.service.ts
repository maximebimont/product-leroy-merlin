import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { PostProduct, Product } from "../models/product.model";

@Injectable({ providedIn: "root" })
export class ProductService {

  private readonly URL: string = environment.apiUrl

  public constructor(
    private readonly http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  public postProduct(product: PostProduct): Observable<void> {
    return this.http.post<void>(this.URL, product);
  }

}