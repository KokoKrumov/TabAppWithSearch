import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalDialogComponent} from '../modal-dialog/modal-dialog.component';
import {ListYTItem} from '../interfaces/list-ytitem';

@Component({
  selector: 'app-item-result-yt',
  templateUrl: './item-result-yt.component.html',
  styleUrls: ['./item-result-yt.component.scss']
})
export class ItemResultYtComponent implements OnInit {
  @Input() itemResult: ListYTItem;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '50%',
      data: {title: this.itemResult.snippet.title, video: this.itemResult.id}
    });
  }

  ngOnInit() {
  }

}
