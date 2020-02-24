import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  ytLink = 'https://www.youtube.com/embed/';
  embedVideo: any;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title?: string; description?: string; video?: string }) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.embedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.ytLink + this.data.video);
  }

}
