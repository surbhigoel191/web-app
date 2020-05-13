/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { OrganizationComponent } from './organization.component';
import { LoanProvisioningCriteriaComponent } from './loan-provisioning-criteria/loan-provisioning-criteria.component';
import { OfficesComponent } from './offices/offices.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { SmsCampaignsComponent } from './sms-campaigns/sms-campaigns.component';
import { AdhocQueryComponent } from './adhoc-query/adhoc-query.component';
import { ViewAdhocQueryComponent } from './adhoc-query/view-adhoc-query/view-adhoc-query.component';
import { TellersComponent } from './tellers/tellers.component';
import { ViewTellerComponent } from './tellers/view-teller/view-teller.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { EditPaymentTypeComponent } from './payment-types/edit-payment-type/edit-payment-type.component';
import { PasswordPreferencesComponent } from './password-preferences/password-preferences.component';
import { EntityDataTableChecksComponent } from './entity-data-table-checks/entity-data-table-checks.component';
import { WorkingDaysComponent } from './working-days/working-days.component';
import { CreateOfficeComponent } from './offices/create-office/create-office.component';
import { CreatePaymentTypeComponent } from './payment-types/create-payment-type/create-payment-type.component';
import { CreateAdhocQueryComponent } from './adhoc-query/create-adhoc-query/create-adhoc-query.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

/** Custom Resolvers */
import { LoanProvisioningCriteriaResolver } from './loan-provisioning-criteria/loan-provisioning-criteria.resolver';
import { OfficesResolver } from './offices/offices.resolver';
import { EmployeesResolver } from './employees/employees.resolver';
import { EmployeeResolver } from './employees/employee.resolver';
import { EditEmployeeResolver } from './employees/edit-employee.resolver';
import { CurrenciesResolver } from './currencies/currencies.resolver';
import { SmsCampaignsResolver } from './sms-campaigns/sms-campaigns.resolver';
import { AdhocQueriesResolver } from './adhoc-query/adhoc-queries.resolver';
import { AdhocQueryResolver } from './adhoc-query/adhoc-query.resolver';
import { TellersResolver } from './tellers/tellers.resolver';
import { TellerResolver } from './tellers/teller.resolver';
import { PaymentTypesResolver } from './payment-types/payment-types.resolver';
import { PaymentTypeResolver } from './payment-types/payment-type.resolver';
import { PasswordPreferencesTemplateResolver } from './password-preferences/password-preferences-template.resolver';
import { EntityDataTableChecksResolver } from './entity-data-table-checks/entity-data-table-checks.resolver';
import { WorkingDaysResolver } from './working-days/working-days.resolver';
import { EditOfficeResolver } from './offices/edit-office/edit-office.resolver';
import { EditOfficeComponent } from './offices/edit-office/edit-office.component';
import { AdhocQueryTemplateResolver } from './adhoc-query/adhoc-query-template.resolver';

/** Organization Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'organization',
      data: { title: extract('Organization'), breadcrumb: 'Organization' },
      children: [
        {
          path: '',
          component: OrganizationComponent
        },
        {
          path: 'provisioning-criteria',
          component: LoanProvisioningCriteriaComponent,
          data: { title: extract('Provisioning Criteria'), breadcrumb: 'Provisioning Criteria' },
          resolve: {
            loanProvisioningCriteria: LoanProvisioningCriteriaResolver
          }
        },
        {
          path: 'offices',
          data: { title: extract('Manage Offices'), breadcrumb: 'Manage Offices' },
          children: [
            {
              path: '',
              component: OfficesComponent,
              resolve: {
              offices: OfficesResolver
              }
            },
            {
              path: 'create',
              component: CreateOfficeComponent,
              data: { title: extract('Create Office'), breadcrumb: 'Create Office' },
              resolve: {
                offices: OfficesResolver,
              }
            },
            {
              path: ':id',
              data: { title: extract('View Office'), routeParamBreadcrumb: 'id' },
              children: [
                {
                  path: 'edit',
                  component: EditOfficeComponent,
                  data: { title: extract('Edit Office'), breadcrumb: 'Edit', routeParamBreadcrumb: false },
                  resolve: {
                    officeTemplate: EditOfficeResolver
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'employees',
          data: { title: extract('Manage Employees'), breadcrumb: 'Manage Employees' },
          children: [
            {
              path: '',
              component: EmployeesComponent,
              resolve: {
                employees: EmployeesResolver
              }
            },
            {
              path: 'create',
              component: CreateEmployeeComponent,
              data: { title: extract('Create Employee'), breadcrumb: 'Create Employee' },
              resolve: {
                offices: OfficesResolver
              }
            },
            {
              path: ':id',
              data: { title: extract('View Employee'), routeParamBreadcrumb: 'id' },
              children: [
                {
                  path: '',
                  component: ViewEmployeeComponent,
                  resolve: {
                    employee: EmployeeResolver,
                  }
                },
                {
                  path: 'edit',
                  component: EditEmployeeComponent,
                  data: { title: extract('Edit Employee'), breadcrumb: 'Edit', routeParamBreadcrumb: false },
                  resolve: {
                    employee: EditEmployeeResolver
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'currencies',
          component: CurrenciesComponent,
          data: { title: extract('Currency Configuration'), breadcrumb: 'Currency Configuration' },
          resolve: {
            currencies: CurrenciesResolver
          }
        },
        {
          path: 'sms-campaigns',
          component: SmsCampaignsComponent,
          data: { title: extract('SMS Campaigns'), breadcrumb: 'SMS Campaigns' },
          resolve: {
            smsCampaigns: SmsCampaignsResolver
          }
        },
        {
          path: 'adhoc-query',
          data: { title: extract('Adhoc Query'), breadcrumb: 'Adhoc Query' },
          children: [
            {
              path: '',
              component: AdhocQueryComponent,
              resolve: {
                adhocQueries: AdhocQueriesResolver
              }
            },
            {
              path: 'create',
              component: CreateAdhocQueryComponent,
              data: { title: extract('Create Adhoc Query'), breadcrumb: 'Create' },
              resolve: {
                adhocQueryTemplate: AdhocQueryTemplateResolver
              }
            },
            {
              path: ':id',
              component: ViewAdhocQueryComponent,
              data: { title: extract('View Adhoc Query'), routeResolveBreadcrumb: ['adhocQuery', 'name']},
              resolve: {
                adhocQuery: AdhocQueryResolver
              }
            }
          ]
        },
        {
          path: 'tellers',
          data: { title: extract('Tellers'), breadcrumb: 'Tellers' },
          children: [
            {
              path: '',
              component: TellersComponent,
              resolve: {
                tellers: TellersResolver
              }
            },
            {
              path: ':id',
              component: ViewTellerComponent,
              data: { title: extract('View Teller'), routeResolveBreadcrumb: ['teller', 'name'] },
              resolve: {
                teller: TellerResolver
              }
            }
          ]
        },
        {
          path: 'payment-types',
          data: { title: extract('Payment Types'), breadcrumb: 'Payment Types' },
          children: [
            {
              path: '',
              component: PaymentTypesComponent,
              resolve: {
                paymentTypes: PaymentTypesResolver
              }
            },
            {
              path: 'create',
              component: CreatePaymentTypeComponent,
              data: { title: extract('Create Payment Type'), breadcrumb: 'Create Payment Type'}
            },
            {
              path: ':id',
              data: { routeParamBreadcrumb: 'id', addBreadcrumbLink: false },
              children: [
                {
                  path: 'edit',
                  component: EditPaymentTypeComponent,
                  data: { title: extract('Edit Payment Type'), breadcrumb: 'Edit', routeParamBreadcrumb: false },
                  resolve: {
                    paymentType: PaymentTypeResolver
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'password-preferences',
          component: PasswordPreferencesComponent,
          data: { title: extract('Password Preferences'), breadcrumb: 'Password Preferences' },
          resolve: {
            passwordPreferencesTemplate: PasswordPreferencesTemplateResolver
          }
        },
        {
          path: 'entity-data-table-checks',
          component: EntityDataTableChecksComponent,
          data: { title: extract('Entity Data Table Checks'), breadcrumb: 'Entity Data Table Checks' },
          resolve: {
            entityDataTableChecks: EntityDataTableChecksResolver
          }
        },
        {
          path: 'working-days',
          component: WorkingDaysComponent,
          data: { title: extract('Working Days'), breadcrumb: 'Working Days' },
          resolve: {
            workingDays: WorkingDaysResolver
          }
        },
        {
          path: 'bulk-import',
          loadChildren: '../bulk-import/bulk-import.module#BulkImportModule'
        },
        {
          path: 'holidays',
          component: HolidaysComponent,
          data: { title: extract('Manage Holidays'), breadcrumb: 'Manage Holidays' },
          resolve: {
            offices: OfficesResolver
          }
        }
      ]
    }
  ])
];

/**
 * Organization Routing Module
 *
 * Configures the organization routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LoanProvisioningCriteriaResolver,
    OfficesResolver,
    EmployeesResolver,
    EmployeeResolver,
    EditEmployeeResolver,
    CurrenciesResolver,
    SmsCampaignsResolver,
    AdhocQueriesResolver,
    AdhocQueryResolver,
    TellersResolver,
    TellerResolver,
    PaymentTypesResolver,
    PaymentTypeResolver,
    PasswordPreferencesTemplateResolver,
    EntityDataTableChecksResolver,
    WorkingDaysResolver,
    EditOfficeResolver,
    AdhocQueryTemplateResolver
  ]
})
export class OrganizationRoutingModule { }