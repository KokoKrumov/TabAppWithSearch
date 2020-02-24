import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {MatCheckboxModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ListComponent } from './list/list.component';
import { ItemResultComponent } from './item-result/item-result.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ListYtComponent } from './list-yt/list-yt.component';
import { ItemResultYtComponent } from './item-result-yt/item-result-yt.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchComponent,
    TabViewComponent,
    ListComponent,
    ItemResultComponent,
    ModalDialogComponent,
    ListYtComponent,
    ItemResultYtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  entryComponents: [
    ModalDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
