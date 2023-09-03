// Bad Bank GitHub withdraw.js
// needs to be fixed yet: ln 43 input type is wrong

function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState('');
  const [withdraw, setWithdraw]   = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(balance,withdraw);  // do I add balance to console.log?
    if (!validate(withdraw, 'withdraw')) return;
    ctx.users.push({withdraw,balance:100});
    setShow(false);
  }

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={show ? (
              <>
              {/* Display the current balance */}
              Current Balance: $100<br/>
              <input type="hidden" id="balance" value={balance} onChange={e => setBalance(e.currentTarget.value)}/><br/>
              {/* Deposit input field */}
              Withdraw<br/>
              <input type="number" className="form-control" id="withdraw" placeholder="Enter withdrawal amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>  {/* value={props.deposit} onChange={e => props.setDeposit(e.currentTarget.value)} */}
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}