const calculateTax = (
	grossSalary,
	relief,
	allowances,
	deductions,
	rentrcvd,
	paidlocaltax,
	othersources,
	financialYear,
	deductions80c = 0,
) => {
	// Parse all inputs to ensure they are numbers
	const parsedGrossSalary = Number.parseFloat(grossSalary) || 0;
	const parsedRelief = Number.parseFloat(relief) || 0;
	const parsedAllowances = Number.parseFloat(allowances) || 0;
	const parsedDeductions = Number.parseFloat(deductions) || 0;
	const parsedRentRcvd = Number.parseFloat(rentrcvd) || 0;
	const parsedPaidLocalTax = Number.parseFloat(paidlocaltax) || 0;
	const parsedOtherSources = Number.parseFloat(othersources) || 0;
	const parsedDeductions80c = Number.parseFloat(deductions80c) || 0;

	const netSalary =
		parsedGrossSalary - (parsedRelief + parsedAllowances + parsedDeductions);
	const houseTax = parsedRentRcvd - parsedPaidLocalTax;
	const qualifiedTIncome = netSalary + houseTax + parsedOtherSources;
	const qualifiedTaxIncome = qualifiedTIncome - parsedDeductions80c;

	console.log("Parsed Inputs:", {
		parsedGrossSalary,
		parsedRelief,
		parsedAllowances,
		parsedDeductions,
		parsedRentRcvd,
		parsedPaidLocalTax,
		parsedOtherSources,
		parsedDeductions80c,
	});
	console.log("Net Salary:", netSalary);
	console.log("House Tax:", houseTax);
	console.log("Qualified T Income:", qualifiedTIncome);
	console.log("Qualified Tax Income:", qualifiedTaxIncome);

	if (qualifiedTaxIncome <= 300000) {
		return [0, parseFloat(qualifiedTaxIncome), parsedDeductions80c];
	} else {
		let tax = 0;
		console.log("Qualified Tax Income: ", qualifiedTaxIncome);
		const calculateTaxForBracket = (income, lowerLimit, upperLimit, rate) => {
			if (income > lowerLimit) {
				const taxableIncome = Math.min(income, upperLimit) - lowerLimit;
				console.log(
					`Bracket: ${lowerLimit}-${upperLimit} | Taxable Income: ${taxableIncome} | Rate: ${rate}`,
				);
				return taxableIncome * rate;
			}
			return 0;
		};

		if (financialYear === "2023-24") {
			console.log("Calculating for financial year 2023-24");
			if (qualifiedTaxIncome > 300000) {
				tax += calculateTaxForBracket(qualifiedTaxIncome, 300000, 600000, 0.05);
			}
			if (qualifiedTaxIncome > 600000) {
				tax += calculateTaxForBracket(qualifiedTaxIncome, 600000, 900000, 0.1);
			}
			if (qualifiedTaxIncome > 900000) {
				tax += calculateTaxForBracket(
					qualifiedTaxIncome,
					900000,
					1200000,
					0.15,
				);
			}
			if (qualifiedTaxIncome > 1200000) {
				tax += calculateTaxForBracket(
					qualifiedTaxIncome,
					1200000,
					1500000,
					0.2,
				);
			}
			if (qualifiedTaxIncome > 1500000) {
				tax += (qualifiedTaxIncome - 1500000) * 0.3;
			}
		} else if (financialYear === "2024-25") {
			console.log("Calculating for financial year 2024-25");
			if (qualifiedTaxIncome > 300000) {
				tax += calculateTaxForBracket(qualifiedTaxIncome, 300000, 700000, 0.05);
			}
			if (qualifiedTaxIncome > 700000) {
				tax += calculateTaxForBracket(qualifiedTaxIncome, 700000, 1000000, 0.1);
			}
			if (qualifiedTaxIncome > 1000000) {
				tax += calculateTaxForBracket(
					qualifiedTaxIncome,
					1000000,
					1200000,
					0.15,
				);
			}
			if (qualifiedTaxIncome > 1200000) {
				tax += calculateTaxForBracket(
					qualifiedTaxIncome,
					1200000,
					1500000,
					0.2,
				);
			}
			if (qualifiedTaxIncome > 1500000) {
				tax += (qualifiedTaxIncome - 1500000) * 0.3;
			}
		}

		let hec = (4 / 100) * tax;
		let finalTax = tax + hec;
		finalTax = finalTax.toFixed(2);
		const ft = finalTax.toLocaleString("en-IN");
		let qual = qualifiedTaxIncome.toFixed(2);
		qual = qual.toLocaleString("en-IN");
		return [ft, qual];
	}
};

export default calculateTax;
