// Bad Bank GitHub login.js
// need: heading, email, PW, login btn
//copied: Create Acct heading, Name, email addy, PW, create acct btn

function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  {/* this validation solely checks for sumbitting empty fields. */}
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({email,password,balance:100});
    setShow(false);
  }

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={show ? (
              <> {/* empty tags differentiate between the 2 placeholders for the 2 forms */}
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
              </>
            ):(
              <> {/* 2nd form here */}
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}