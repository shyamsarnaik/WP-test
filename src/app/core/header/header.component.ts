import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { favouriteProductDialogComponent } from 'src/app/features/favourite-product-dialog/favourite-product-dialog.component';

@Component({
    selector: 'app-header',
    template: `<mat-toolbar >
                <span>Wallapop</span>
                <span class="spacer"></span>
                <button mat-button (click)="openFavDialog()"> 
                    <mat-icon>favorite</mat-icon>  Favourite Products
                </button>
            </mat-toolbar>`
})
export class HeaderComponent {

    constructor(public dialog: MatDialog) { }

    openFavDialog() {
        const dialogRef = this.dialog.open(favouriteProductDialogComponent, { width: '90vw' });
    }
}
