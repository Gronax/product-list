import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Product } from 'src/app/interfaces/products';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})

export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'image', 'name', 'orderType', 'price', 'channel', 'availability'];
  dataSource = new MatTableDataSource < Product > ();
  selection = new SelectionModel < Product > (true, []);
  imageUrl: string;
  isHovering = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appService: AppService) {}

  ngOnInit() {
    /** Getting products from service. */
    this.appService.getProducts().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  mouseHover(imgUrl) {
      this.isHovering = true;
      this.imageUrl = imgUrl;
  }

  mouseLeft() {
      this.isHovering = false;
      this.imageUrl = null;
  }
}
