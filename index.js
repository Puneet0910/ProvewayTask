document.addEventListener("DOMContentLoaded", function () {
  const bundles = document.querySelectorAll(".bundle");

  function updateSelectedBundle(selectedBundle) {
    // Hide all hidden elements
    bundles.forEach((b) => {
      b.querySelectorAll(".hidden").forEach(
        (el) => (el.style.display = "none")
      );
    });

    // Show hidden elements in selected bundle
    selectedBundle
      .querySelectorAll(".hidden")
      .forEach((el) => (el.style.display = "block"));

    // Extract and log amount
    const amountText = selectedBundle.querySelector(".amount").textContent;
    const amount = parseFloat(amountText);
    console.log("Selected amount:", amount);

    // Optional: Update visible UI
    const amountDisplay = document.getElementById("selected-amount");
    if (amountDisplay) {
      amountDisplay.textContent = `Selected Price: DKK ${amount}`;
    }
  }

  bundles.forEach((bundle) => {
    const radio = bundle.querySelector('input[type="radio"]');
    radio.addEventListener("change", () => updateSelectedBundle(bundle));

    if (radio.checked) {
      updateSelectedBundle(bundle);
    }
  });
});
function addToCart(event){
  alert("Added to cart successfully");
  location.reload();
}