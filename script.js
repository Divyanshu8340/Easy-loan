// script.js
const banks = [
  {
    name: "HDFC Bank",
    url: "https://www.hdfcbank.com/personal/borrow/popular-loans",
    category: ["home", "personal", "car"],
    offers: [
      "Balance Transfer @ 8.75%",
      "Instant Personal Loan approvals",
      "Car Loan up to ₹25 lakh"
    ]
  },
  {
    name: "State Bank of India",
    url: "https://www.sbi.co.in/web/personal-banking/loans",
    category: ["home", "education", "car"],
    offers: [
      "Home Loan from 8.70% p.a.",
      "Education Loan up to ₹7.5 lakh with no collateral",
      "Car Loan with 100% financing"
    ]
  },
  {
    name: "ICICI Bank",
    url: "https://www.icicibank.com/personal-banking/loans",
    category: ["home", "education", "business"],
    offers: [
      "Business Loans @ 10.5%",
      "Pre-approved Home Loan Top-Ups",
      "Education Loans with flexible EMI"
    ]
  },
  {
    name: "Axis Bank",
    url: "https://www.axisbank.com/retail/loans",
    category: ["home", "personal", "education"],
    offers: [
      "Personal Loans up to ₹40 lakh",
      "Home Loans with zero processing fee",
      "Education Loans with EMI holidays"
    ]
  },
  {
    name: "Punjab National Bank",
    url: "https://www.pnbindia.in/loans.html",
    category: ["home", "car", "education"],
    offers: [
      "Car Loans at 8.95%",
      "Home Loans with special rates for women",
      "Education Loans up to ₹20 lakh"
    ]
  },
  {
    name: "Bank of Baroda",
    url: "https://www.bankofbaroda.in/personal-banking/loans",
    category: ["home", "car", "personal"],
    offers: [
      "Baroda Home Loan @ 8.60%",
      "Vehicle Loans with 100% funding",
      "Pre-approved Personal Loans"
    ]
  },
  {
    name: "Canara Bank",
    url: "https://canarabank.com/english/loans/",
    category: ["home", "education", "personal"],
    offers: [
      "Education Loans with subsidy scheme",
      "Home Loan @ 8.75%",
      "Personal Loans for salaried professionals"
    ]
  },
  {
    name: "Kotak Mahindra Bank",
    url: "https://www.kotak.com/en/personal-banking/loans.html",
    category: ["home", "personal"],
    offers: [
      "Quick Personal Loans up to ₹25 lakh",
      "Affordable Home Loans for salaried",
      "Special Offers for Self-Employed"
    ]
  },
  {
    name: "Union Bank of India",
    url: "https://www.unionbankofindia.co.in/english/loan.aspx",
    category: ["home", "car", "education"],
    offers: [
      "Union Home Loan @ 8.55%",
      "Education Loan without margin up to ₹4 lakh",
      "Car Loans with extended tenure"
    ]
  },
  {
    name: "IDFC FIRST Bank",
    url: "https://www.idfcfirstbank.com/personal-banking/loans",
    category: ["home", "personal", "education"],
    offers: [
      "Instant Personal Loan Approvals",
      "Flexible Education Loan EMIs",
      "Pre-approved Home Loan Offers"
    ]
  },
  {
    name: "Yes Bank",
    url: "https://www.yesbank.in/personal-banking/loans",
    category: ["home", "personal"],
    offers: [
      "Personal Loans with flexible tenure",
      "Home Loans with low documentation",
      "Quick Approval within 24 hours"
    ]
  },
  {
    name: "IndusInd Bank",
    url: "https://www.indusind.com/in/en/personal/loans.html",
    category: ["personal", "car"],
    offers: [
      "Car Loans at competitive interest rates",
      "Pre-approved Personal Loans",
      "Digital Loan Processing"
    ]
  },
  {
    name: "Federal Bank",
    url: "https://www.federalbank.co.in/loans",
    category: ["home", "personal"],
    offers: [
      "Home Loan up to ₹10 crore",
      "Personal Loan with EMI holiday",
      "Top-Up Loans at low interest"
    ]
  },
  {
    name: "South Indian Bank",
    url: "https://www.southindianbank.com/content/personal-loans/",
    category: ["personal", "education"],
    offers: [
      "Education Loan with parental co-borrower",
      "Low-rate Personal Loans",
      "Easy Online Loan Application"
    ]
  },
  {
    name: "Indian Overseas Bank",
    url: "https://www.iob.in/loans",
    category: ["home", "car", "education"],
    offers: [
      "Home Loan interest starting @ 8.5%",
      "Education Loan with subsidy",
      "Car Loan with quick disbursal"
    ]
  },
  {
    name: "Bank of India",
    url: "https://bankofindia.co.in/Home/Loans",
    category: ["home", "car", "personal"],
    offers: [
      "Star Home Loan Scheme",
      "Vehicle Loan with low EMI",
      "Pre-approved Personal Loans"
    ]
  },
  {
    name: "UCO Bank",
    url: "https://www.ucobank.com/english/loans.aspx",
    category: ["home", "education"],
    offers: [
      "Home Loans @ 8.75%",
      "Education Loans with long repayment term",
      "Quick Sanction Process"
    ]
  },
  {
    name: "Central Bank of India",
    url: "https://www.centralbankofindia.co.in/en/loan",
    category: ["home", "education"],
    offers: [
      "Home Loans for senior citizens",
      "Education Loans with low margin",
      "Flexible repayment for salaried"
    ]
  },
  {
    name: "RBL Bank",
    url: "https://www.rblbank.com/personal/loans",
    category: ["personal"],
    offers: [
      "Instant Personal Loans up to ₹20 lakh",
      "Attractive interest rates",
      "EMI starts from ₹2,149/lakh"
    ]
  },
  {
    name: "DBS Bank",
    url: "https://www.dbs.com/in/treasures/personal/loans",
    category: ["personal", "car"],
    offers: [
      "Get Car Loans in 24 hours",
      "Personal Loans with paperless approval",
      "No hidden charges"
    ]
  }
];

function renderBanks(bankList) {
  const container = document.getElementById("bank-sections");
  container.innerHTML = "";

  bankList.forEach(bank => {
    const div = document.createElement("div");
    div.className = "bank";
    div.innerHTML = `
      <h2 class="bank-name"><a href="${bank.url}" target="_blank">${bank.name}</a></h2>
      <ul>
        ${bank.offers.map(o => `<li>${o} <a class="apply-btn" href="${bank.url}" target="_blank">Apply Now</a></li>`).join("")}
      </ul>
    `;
    container.appendChild(div);
  });
}

function filterByCategory(cat) {
  if (cat === 'all') {
    renderBanks(banks);
    return;
  }

  const filtered = banks.filter(b => b.category && b.category.includes(cat));
  renderBanks(filtered);
}

document.getElementById("search-input").addEventListener("input", function () {
  const search = this.value.toLowerCase();
  const filtered = banks.filter(bank =>
    bank.name.toLowerCase().includes(search) ||
    bank.offers.some(offer => offer.toLowerCase().includes(search))
  );
  renderBanks(filtered);
});

renderBanks(banks);
