(function(mifosX) {
  var defineRoutes = function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/home', {
        templateUrl: 'views/home.html'
      })
      .when('/products', {
        templateUrl: 'views/products/products.html'
      })
      .when('/admin/roles', {
        templateUrl: 'views/administration/roles.html'
      })
      .when('/admin/users', {
        templateUrl: 'views/administration/users.html'
      })
      .when('/clients', {
        templateUrl: 'views/clients/clients.html'  
      })
      .when('/createclient', {
        templateUrl: 'views/clients/createclient.html'  
      })
      .when('/editclient/:id', {
        templateUrl : 'views/clients/editclient.html'
      })
      .when('/viewclient/:id', {
        templateUrl: 'views/clients/viewclient.html'
      })
      .when('/newloanaccount/:id', {
          templateUrl: 'views/clients/clientnewloanaccount.html'
      })
      .when('/viewloanaccount/:id', {
        templateUrl: 'views/clients/viewclientloanaccountdetails.html'
      })
      .when('/loanaccount/:id/:action', {
        templateUrl: 'views/clients/clientloanaccountactions.html'
      })
      .when('/editloanaccount/:id', {
        templateUrl: 'views/clients/editclientloanaccount.html'
      })
      .when('/addloancharge/:id', {
        templateUrl: 'views/clients/addloancharge.html'
      })
      .when('/addcollateral/:id', {
        templateUrl: 'views/clients/addloancollateral.html'
      })
      .when('/loan/:loanId/editcollateral/:id', {
        templateUrl: 'views/clients/editloancollateral.html'
      })
      .when('/loan/:loanId/viewcollateral/:id', {
        templateUrl: 'views/clients/viewloancollateral.html'
      })
      .when('/loan/:loanId/viewcharge/:id', {
        templateUrl: 'views/clients/viewloancharge.html'
      })
      .when('/loan/:loanId/editcharge/:id', {
        templateUrl: 'views/clients/editloancharge.html'
      })
      .when('/assignloanofficer/:id', {
        templateUrl: 'views/clients/assignloanofficer.html'
      })
      .when('/organization', {
        templateUrl: 'views/administration/organization.html'  
      })
      .when('/system', {
        templateUrl: 'views/administration/system.html'  
      })
      .when('/loanproducts', {
        templateUrl: 'views/products/loanproducts.html'
      })
      .when('/charges', {
        templateUrl: 'views/products/charges.html'
      })
      .when('/viewcharge/:id', {
        templateUrl: 'views/products/viewcharge.html'
      })
      .when('/savingproducts', {
        templateUrl: 'views/products/savingproducts.html'
      })
      .when('/viewsavingproduct/:id', {
        templateUrl: 'views/products/viewsavingproduct.html'
      })
      .when('/offices', {
        templateUrl: 'views/organization/offices.html'
      })
      .when('/createoffice', {
        templateUrl: 'views/organization/createoffice.html'
      })
      .when('/viewoffice/:id', {
        templateUrl: 'views/organization/viewoffice.html'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html'
      })
      .when('/currconfig', {
        templateUrl: 'views/organization/currencyconfig.html'
      })
      .when('/search/:query', {
        templateUrl: 'views/search/glresults.html'
      })  
      .when('/viewloanproduct/:id', {
        templateUrl: 'views/products/viewloanproduct.html'
      })
      .when('/usersetting', {
        templateUrl: 'views/administration/usersettings.html'
      })
      .when('/users/', {
        templateUrl: 'views/administration/userslist.html'
      })
      .when('/createuser/', {
        templateUrl: 'views/administration/createuser.html'
      })
      .when('/viewuser/:id', {
        templateUrl: 'views/administration/viewuser.html'
      })
      .when('/edituser/:id', {
        templateUrl: 'views/administration/edituser.html'
      })
      .when('/employees', {
        templateUrl: 'views/organization/employees.html'
      })
      .when('/viewemployee/:id', {
        templateUrl: 'views/organization/viewemployee.html'
      })
      .when('/editemployee/:id', {
        templateUrl: 'views/organization/editemployee.html'
      })
      .when('/createemployee/', {
        templateUrl: 'views/organization/createemployee.html'
      })
      .when('/managefunds/', {
        templateUrl: 'views/organization/managefunds.html'
      })
      .when('/nav/offices', {
        templateUrl: 'views/navigation/offices.html'
      })
      .when('/accounting', {
        templateUrl: 'views/accounting/accounting.html'
      })
      .when('/accounting_coa', {
        templateUrl: 'views/accounting/accounting_coa.html'
      })
      .when('/createglaccount', {
        templateUrl: 'views/accounting/createglaccounting.html'
      })
      .when('/viewglaccount/:id', {
        templateUrl: 'views/accounting/viewglaccounting.html'
      })
      .when('/editglaccount/:id', {
        templateUrl: 'views/accounting/editglaccounting.html'
      })
      .when('/freqposting', {
        templateUrl: 'views/accounting/freqposting.html'
      })
      .when('/viewtransactions/:transactionId', {
        templateUrl: 'views/accounting/view_transactions.html'
      })
      .when('/journalentry', {
        templateUrl: 'views/accounting/journalentry_posting.html'
      })
      .when('/searchtransaction', {
        templateUrl: 'views/accounting/search_transaction.html'
      })
      .when('/accounts_closure', {
        templateUrl: 'views/accounting/accounts_closure.html'
      })
      .when('/closedaccountingDetails/:officeId', {
        templateUrl: 'views/accounting/view_close_accounting.html'
      })
      .when('/accounting_rules', {
        templateUrl: 'views/accounting/accounting_rules.html'
      })
      .when('/viewaccrule/:id', {
        templateUrl: 'views/accounting/view_acc_rule.html'
      })
      .when('/add_accrule', {
        templateUrl: 'views/accounting/add_acc_rule.html'
      })
      .when('/editaccrule/:id', {
        templateUrl: 'views/accounting/edit_acc_rule.html'
      })
      .when('/viewcode/:id', {
          templateUrl: 'views/system/viewcode.html'
      })
      .when('/datatables', {
          templateUrl: 'views/system/datatables.html'
      })
      .when('/viewdatatable/:tableName', {
        templateUrl: 'views/system/viewdatatable.html'
      })
      .when('/addcode', {
          templateUrl: 'views/system/addcode.html'
      })
      .when('/codes', {
          templateUrl: 'views/system/codes.html'
      })
      .when('/editcode/:id', {
          templateUrl: 'views/system/editcode.html'
      })
      .when('/holidays', {
          templateUrl: 'views/organization/holidays.html'
      })
      .when('/createholiday', {
          templateUrl: 'views/organization/createholiday.html'
      })
      .when('/viewholiday/:id', {
          templateUrl: 'views/organization/viewholiday.html'
      })
      .when('/reports/:type', {
        templateUrl: 'views/reports/view_reports.html'
      })
      .when('/run_report/:name', {
        templateUrl: 'views/reports/run_reports.html'
      })
      .when('/new_client_saving_application/:clientId', {
        templateUrl: 'views/savings/new_saving_account_application.html'
      })
      .when('/new_group_saving_application/:groupId', {
        templateUrl: 'views/savings/new_saving_account_application.html'
      })
      .when('/new_jlg_saving_application/:groupId/:clientId', {
        templateUrl: 'views/savings/new_saving_account_application.html'
      })
      .when('/viewsavingaccount/:id', {
        templateUrl: 'views/savings/view_saving_account_details.html'
      })
      .when('/groups', {
        templateUrl: 'views/groups/groups.html'
      })
      .when('/creategroup', {
        templateUrl: 'views/groups/creategroup.html'
      })
      .when('/attachmeeting/:id/:entityType', {
        templateUrl: 'views/groups/attachmeeting.html'
      })
      .when('/editsavingaccount/:id', {
        templateUrl: 'views/savings/edit_saving_account_application.html'
      })
      .when('/savingaccount/:id/:action', {
        templateUrl: 'views/savings/saving_account_actions.html'
      })
      .when('/viewaccounttransfers/:id', {
        templateUrl: 'views/accounttransfers/view_accounttransfer.html'
      })
      .when('/accounttransfers/:accountType/:accountId', {
        templateUrl: 'views/accounttransfers/make_accounttransfer.html'
      })
      .when('/viewsavingtrxn/:accountId/trxnId/:id', {
        templateUrl: 'views/savings/view_saving_transaction.html'
      })
      .when('/viewgroup/:id', {
        templateUrl: 'views/groups/viewgroup.html'
      })
      .when('/editgroup/:id', {
        templateUrl: 'views/groups/editgroup.html'
      })
      .when('/addmember', {
        templateUrl: 'views/groups/addmember.html'
      })
      .when('/groupattendance', {
        templateUrl: 'views/groups/groupattendance.html'
      })
      .when('/closegroup/:id', {
        templateUrl: 'views/groups/closegroup.html'
      })
      .when('/addrole/:id', {
        templateUrl: 'views/groups/addrole.html'
      })
      .when('/membermanage/:id', {
        templateUrl: 'views/groups/membermanage.html'
      })
      .when('/transferclients/:id', {
        templateUrl: 'views/groups/transferclients.html'
      });
    $locationProvider.html5Mode(false);
  };
  mifosX.ng.application.config(defineRoutes).run(function($log) {
    $log.info("Routes definition completed");
  });
}(mifosX || {}));