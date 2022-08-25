import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardUserListComponent } from './views/dashboard-user-list/dashboard-user-list.component';
import { TableComponent } from './tools/table/table.component';
import { AddDashboardUserComponent } from './views/add-dashboard-user/add-dashboard-user.component';

import { AppRoutingModule , routingComponent  } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationComponent } from './authentification/authentification.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SidebarComponent,
    TransactionsComponent,
    DashboardUserListComponent,
    TableComponent,
    AddDashboardUserComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
