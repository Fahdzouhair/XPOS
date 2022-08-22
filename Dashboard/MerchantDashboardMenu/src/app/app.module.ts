import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';

import { AppRoutingModule , routingComponent  } from './app-routing/app-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { DashboardUserListComponent } from './views/dashboard-user-list/dashboard-user-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './tools/table/table.component';
import { AddDashboardUserComponent } from './views/add-dashboard-user/add-dashboard-user.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SidebarComponent,
    TransactionsComponent,
    DashboardUserListComponent,
    TableComponent,
    AddDashboardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
