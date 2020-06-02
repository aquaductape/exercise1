const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const cost = document.querySelector(".cost-s");
const amount = document.querySelector(".amount-s");
const modal = document.getElementById("modal");

const forms = document.getElementsByClassName("needs-validation");

const priceOf777x = 410200000;
const appState = { cost: priceOf777x, amount: 1 };

btnIncrease.addEventListener("click", () => {
  appState.cost += priceOf777x;
  appState.amount += 1;
  cost.innerHTML = numberWithCommas(parseFloat(appState.cost.toFixed(2)));
  amount.innerHTML = appState.amount;
});
btnDecrease.addEventListener("click", () => {
  if (appState.amount === 1) return;

  appState.cost -= priceOf777x;
  appState.amount -= 1;
  cost.innerHTML = numberWithCommas(parseFloat(appState.cost.toFixed(2)));
  amount.innerHTML = appState.amount;
});
btnReset.addEventListener("click", () => {
  appState.cost = priceOf777x;
  appState.amount = 1;
  cost.innerHTML = parseFloat(appState.cost.toFixed(2));
  amount.innerHTML = appState.amount;
});

// Iterate over each one
for (let form of forms) {
  // Add a 'submit' event listener on each one
  form.addEventListener("submit", async (evt) => {
    // check if the form input elements have the 'required' attribute
    if (!form.checkValidity()) {
      evt.preventDefault();
      evt.stopPropagation();
      console.log("Bootstrap will handle incomplete form fields");
    } else {
      // Since form is now valid, prevent default behavior..
      evt.preventDefault();
      $("#modal").modal("show");
      const email = form.email.value;
      const company = form.company.value;
      const address = form.address.value;
      const address2 = form.address2.value;
      console.log({ address2 });
      const city = form.city.value;
      const state = form.state.value;
      const zipCode = form.zip.value;
      const { amount, cost } = appState;
      const body = JSON.stringify({
        email,
        company,
        address,
        address2,
        city,
        state,
        zipCode,
        amount,
        cost,
      });

      const res = await fetch("https://tranquil-island-89942.herokuapp.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      $(".circle-loader").toggleClass("load-complete");
      $(".checkmark").toggle();
      console.info("All form fields are now valid...");
    }

    console.log(form.email);
    form.classList.add("was-validated");
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
