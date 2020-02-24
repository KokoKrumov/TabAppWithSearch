import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {ListGItem} from '../interfaces/list-gitem';

@Component({
  selector: 'app-item-result',
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss']
})

export class ItemResultComponent implements OnInit {
  @Input() itemResult: ListGItem;


  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '30%',
      data: {title: this.itemResult.title, description: this.itemResult.snippet}
    });
  }

  ngOnInit() {
  }

}
