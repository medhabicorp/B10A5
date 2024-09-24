// Function for Noakhali
document.getElementById('donateBtnNoakhali').addEventListener('click', function(event){
  event.preventDefault();
  
  // donate amount
  const donateMoneyAmount = getInputFieldValueById('inputDonationNoakhali');

  // default balance amount
  const balanceAmount = getTotalBalanceById('totalBalanceNoakhali')

  // remaining amount
  const remainingAmount = getRemainingBalanceById('remainingBalance');

  const currentTime = new Date().toString();
  
  // validation for number input
  if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
    alert("Please Enter a Valid Amount to Donate.");
    document.getElementById('inputDonationNoakhali').value = "";
    return;
  }

  // validation for if input is less than remaining amount
  else if(remainingAmount <= 0 || remainingAmount < donateMoneyAmount){
    alert ("You don't have enough money to donate.")
    document.getElementById('inputDonationNoakhali').value = "";
    return;
  }

  else{
    
    // total balance updated
  const balanceUpdated = balanceAmount+ donateMoneyAmount;
  document.getElementById('totalBalanceNoakhali').innerText = balanceUpdated;

    // Remaining Balance Updated
    const remainingBalanceUpdated = remainingAmount-donateMoneyAmount;

    document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

    // left the input field blank
    document.getElementById('inputDonationNoakhali').value = "";

     // add to history
     const noaDiv = document.createElement('div');
    noaDiv.classList.add('bg-btn-bg');
     noaDiv.innerHTML =`
    <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for Noakhali in Bangladesh </h3>
    <p>Date: ${currentTime} </p>`
          
    // should be a common function
    document.getElementById('historySection').prepend(noaDiv);
  }
  
})


// // Function for Feni

// document.getElementById('donateBtnFeni').addEventListener('click', function(event){
//   event.preventDefault();
  
//   // donate amount
//   const donateMoneyAmount = getInputFieldValueById('inputDonationFeni');

//   // default balance amount
//   const balanceAmount = getTotalBalanceById('totalBalanceFeni')

//   // remaining amount
//   const remainingAmount = getRemainingBalanceById('remainingBalance');
  
//   // validation for number input
//   if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
//     alert("Please Enter a Valid Amount to Donate.");
//     document.getElementById('inputDonationFeni').value = "";
//     return;
//   }

//   // validation for if input is less than remaining amount
//   else if(remainingAmount <= 0 || remainingAmount < donateMoneyAmount){
//     alert ("You don't have enough money to donate.")
//     document.getElementById('inputDonationFeni').value = "";
//     return;
//   }

//   else{
    
//     // total balance updated
//   const balanceUpdated = balanceAmount+ donateMoneyAmount;
//   document.getElementById('totalBalanceFeni').innerText = balanceUpdated;


//     // Remaining Balance Updated
//     const remainingBalanceUpdated = remainingAmount-donateMoneyAmount;

//     document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

//     // left the input field blank
//     document.getElementById('inputDonationFeni').value = "";


//          // add to history
//          const feniDiv = document.createElement('div');
//         feniDiv.classList.add('bg-gray-100');
//         feniDiv.innerHTML =`
//          <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for Noakhali in Bangladesh </h3>
//          <p>Date: ${currentTime} </p>`
               
//          // should be a common function
//          document.getElementById('historySection').prepend(feniDiv);
//   }
  
// })


// Function for Quota Movement

document.getElementById('donateBtnQm').addEventListener('click', function(event){
  event.preventDefault();
  
  // donate amount
  const donateMoneyAmount = getInputFieldValueById('inputDonationQm');

  // default balance amount
  const balanceAmount = getTotalBalanceById('totalBalanceQm')

  // remaining amount
  const remainingAmount = getRemainingBalanceById('remainingBalance');
  
  // validation for number input
  if (donateMoneyAmount <= 0 || isNaN(donateMoneyAmount)) {
    alert("Please Enter a Valid Amount to Donate.");
    document.getElementById('inputDonationQm').value = "";
    return;
  }

  // validation for if input is less than remaining amount
  else if(remainingAmount <= 0 || remainingAmount < donateMoneyAmount){
    alert ("You don't have enough money to donate.")
    document.getElementById('inputDonationQm').value = "";
    return;
  }

  else{
    
    // total balance updated
  const balanceUpdated = balanceAmount+ donateMoneyAmount;
  document.getElementById('totalBalanceQm').innerText = balanceUpdated;

    // Remaining Balance Updated
    const remainingBalanceUpdated = remainingAmount-donateMoneyAmount;

    document.getElementById('remainingBalance').innerText = remainingBalanceUpdated;

    // left the input field blank
    document.getElementById('inputDonationQm').value = "";


             // add to history
             const qmDiv = document.createElement('div');
             qmDiv.classList.add('bg-gray-100');
             qmDiv.innerHTML =`
              <h3 class="text-lg font-bold">${donateMoneyAmount} Taka is Donated for Noakhali in Bangladesh </h3>
              <p>Date: ${currentTime} </p>`
                    
              // should be a common function
              document.getElementById('historySection').prepend(qmDiv);
  }
  
})