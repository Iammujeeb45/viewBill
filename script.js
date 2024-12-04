let grandTotal = 0;
let invoicegrandTotal = 0;
let details = [];
const myDiv = document.getElementById("myDiv");

// TO view add item table
function litsenToClick(e) {
  e.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const itemPrice = parseFloat(document.getElementById("itemPrice").value);
  if (!itemName || !itemPrice || itemPrice <= 0) {
    alert("PLEASE ENTER VALID ITEMANME AND ITEMPRICE");
    return;
  }

  const gst = itemPrice * 0.18;
  const subTotal = itemPrice + gst;
  grandTotal += subTotal;
  invoicegrandTotal += subTotal;

  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="px-6 py-4 text-black">${itemName}</td>
    <td class="px-6 py-4 text-black">₹${itemPrice.toFixed(2)}</td>
    <td class="px-6 py-4 text-black">₹${subTotal.toFixed(2)}</td>
  `;
  tableBody.appendChild(newRow);

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";

  document.getElementById(
    "mTotal"
  ).innerText = `GrandTotal : ₹${grandTotal.toFixed(2)}`;

  details.push({ itemName, itemPrice, subTotal, grandTotal });
  return;
}
document.getElementById("addItem").addEventListener("click", litsenToClick);

// TO view viewInovice table data
function viewInvoice(e) {
  e.preventDefault();

  const tableBody = document.getElementById("invoiceDisplay");
  tableBody.innerHTML = "";
  invoiceDetails = details;

  invoiceDetails.forEach((product, index) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td class="px-6 py-4 text-black">${index + 1}</td>
      <td class="px-6 py-4 text-black">${product.itemName}</td>
      <td class="px-6 py-4 text-black">₹${product.itemPrice.toFixed(2)}</td>
      <td class="px-6 py-4 text-black">₹${product.subTotal}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById(
      "gTotal"
    ).innerText = `Grand Total : ₹${product.grandTotal.toFixed(2)}`;
  });
}

document.getElementById("viewInvoice").addEventListener("click", viewInvoice);
// TO view reset All Table Data
function resetInvoice(e) {
  e.preventDefault();

  document.getElementById("itemName").value = "";
  document.getElementById("itemPrice").value = "";
  document.querySelector("tbody").innerHTML = "";
  document.getElementById("mTotal").innerText = "Grand Total : ₹0.00";

  document.getElementById("invoiceDisplay").innerHTML = "";

  document.getElementById("gTotal").innerText = "Grand Total : ₹0.00";
  details = [];
  grandTotal = 0;
  invoicegrandTotal = 0;
  invoiceDetails = [];

  myDiv.style.display = "none";
}
document.getElementById("resetBtn").addEventListener("click", resetInvoice);

// To display bill by clickinng on viewBILL button
function viewBill() {
  if (myDiv.style.display === "none" || myDiv.style.display === "") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
}
document.getElementById("viewInvoice").addEventListener("click", viewBill);
