// get input field value function
function getInputFieldValueById(id){
  const donateMoney=document.getElementById(id).value;
  const donateMoneyAmount=parseFloat(donateMoney);
  return donateMoneyAmount;
}

// get total balance function
function getTotalBalanceById(id){
  const balance = document.getElementById(id).innerText;
  const balanceAmount=parseFloat(balance);
  return balanceAmount;
}
// get remaining balance amount function 
function getRemainingBalanceById(id){
  const remainingBalance= document.getElementById(id).innerText;
  const remainingAmount=parseFloat(remainingBalance);
  return remainingAmount;
}

// show cart section 

function showSectionById(id){
  document.getElementById('donateCartSection').classList.add('hidden');
  document.getElementById('historySection').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
}

// show btn background color:
function showBgColorById(id){
  document.getElementById('show-donation-cart').classList.remove('bg-btn-bg');
  document.getElementById('show-history-cart').classList.remove('bg-btn-bg');

  document.getElementById(id).classList.add('bg-btn-bg');
}