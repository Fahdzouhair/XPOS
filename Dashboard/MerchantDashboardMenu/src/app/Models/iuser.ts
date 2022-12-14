export interface IUser {
    [x: string]: any
    user_id ?: string,
    user_name : string,
    user_code : string,
    status : string,
    password : string,

    staff_indicateur ?: string,
    job_title ?: string,
    email ?: string,
    activ_email ?: string,
    employe_number ?: number,
    access_by ?: string,
    account_expiry_date ?: Date,
    account_start_date ?: Date,
    privilege_end_date ?: Date, 
    privilege_last_conexion_date ?: Date,
    acess_resriction ?: string,
    dis_notification_type ?: string,
    browser_disconnection ?: number,
    timer_browser_disconnection ?: number,
    pwc_disconnection ?: string,
    timer_pwc_disconnection ?: number,
    phone_numbre ?: string,
    profile_fk : string,
    country_fk ?: string,
    branch_fk ?: string,
    institution_fk ?: string,
    branch_group_fk ?: string,
    boss_fk ?: number,
    departement_fk ?: string,
    data_access_fk ?: number,
    sub_departement_fk ?: string,
    language_fk ?: string,
    connection_status ?: string,
    collection_process_privilege ?: string,
    collection_dipatch_privilege ?: string,
    user_collection_list ?: string,
    dba_privilege ?: string,
    start_date ?: Date,
    end_date ?: Date,
    last_db_connect ?: Date,
    bank_card_batch ?: string,
    current_card_batch ?: string,
    date_cur_card_batch ?: Date,
    ip_adress_access ?: string,
    bank_code_access_list ?: string,
    increase_limits_currency ?: string,
    increase_credit_limit_perc ?: number,
    increase_credit_limit_max ?: number
    increase_cash_limit_max ?: number,
    increase_loan_limit_perc ?: number,
    increase_loan_limit_max ?: number,
    balances_hidden_flag ?: string,                    
    screen_show_name ?: string,         
    screen_show_db ?: string,                               
    screen_show_db_connect ?: string,
    check_sum ?: string,
    forms_message_level ?: string,
    claims_grouping_index ?: string,
    user_terminal_group ?: string,
    date_blocking ?: Date,
    user_unblocking ?: string,
    date_unblocking ?: Date,
    /*** boolean instead of char(1) default N **/
    is_blocked ?: boolean,
    is_ldap_user ?: boolean,
    /*-----*/ 
    ldap_pattern ?: string,

    user_create ?: string,
    date_create ?: Date,
    
    user_modif ?: string,
    date_modif ?: Date                          
}
