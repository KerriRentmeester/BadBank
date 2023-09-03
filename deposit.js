// Bad Bank GitHub deposit.js
// needs to be fixed yet: ln 43 input type is wrong
// needs: deposit fnc4, heading39, *Balance total*, dep amt input field, dep btn49
// copied: Create Acct fnc, heading, Name, email addy, PW, create acct btn

function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [balance, setBalance]   = React.useState('');
    const [deposit, setDeposit]   = React.useState('');
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
      console.log(deposit);  // do I add balance to console.log?
      if (!validate(deposit, 'deposit')) return;
      ctx.users.push({deposit,balance:100});
      setShow(false);
    }

    function clearForm(){
      setDeposit('');
      setShow(true);
    }

    return (
      <Card
        bgcolor="success"
        header="Deposit"
        status={status}
        body={show ? (
                <>
                {/* Display the current balance */}
                Current Balance: $100 <br/>
                <input type="hidden" id="balance" value={balance} onChange={e => setBalance(e.currentTarget.value)}/><br/>
                {/* Deposit input field */}
                Deposit<br/>
                <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>  {/* value={props.deposit} onChange={e => props.setDeposit(e.currentTarget.value)} */}
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
              )}
      />
    )
  }