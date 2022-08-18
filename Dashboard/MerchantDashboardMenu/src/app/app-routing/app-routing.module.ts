import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { AnalyticsComponent } from '../views/analytics/analytics.component';
import { DashboardUserListComponent } from '../views/dashboard-user-list/dashboard-user-list.component';
import { TransactionsComponent } from '../views/transactions/transactions.component';


const routes: Routes = [

 
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
  {
    
    path: 'dashboard-user-list',
    component: DashboardUserListComponent,
  },
 
  /*
  {
    path: '',
    component: Transactions,
  },
  {
    path: '',
    component: DashboardUserList,
  },
  {
    path: '',
    component: AddDashboardUser,
  },
  {
    path: '',
    component: BlockedMobileUsers,
  },
  {
    path: '',
    component: VoidTransaction,
  },
  {
    path: '',
    component: TransactionReport,
  },
  {
    path: '',
    component: SMSPayTransaction,
  },
  */
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent = [
  DashboardComponent,
  AnalyticsComponent,
  TransactionsComponent,
  DashboardUserListComponent
];

