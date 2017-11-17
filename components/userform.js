import React from 'react';

const UsersForm = props => (
  <div>
    <div>
      <span className="">{props.formLabel}</span>
    </div>

    <div>
      <label>User Name:</label>
      <input id="username"
      name="user_name"
      value={props.name}
      onChange={props.updateName}/>
    </div>

    <div>
      <label>User Email:</label>
      <input id="useremail"
      name="user_email"
      value={props.email}
      onChange={props.updateEmail}/>
    </div>

    <div>
      <label>User Password:</label>
      <input id="userpassword"
      name="user_password"
      value={props.password}
      onChange={props.updatePassword}/>
    </div>

    <div>
      <label>Account Id</label>
      <input id="useraccountId"
      name="user_accountid"
      value={props.account_id}
      onChange={props.updateAccountId}/>
    </div>
  </div>
);

export default UsersForm;
