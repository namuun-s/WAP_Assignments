package edu.miu.cs.cs472.model;

public class Account {
	String accountNo;
	String customerName;
	String accountType;
	
	public Account(String an, String cn, String at) {
		this.accountNo = an;
		this.customerName = cn;
		this.accountType = at;
	}

	public String getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	
	@Override
	public String toString() {
		return "New Account info: " + this.accountNo + ", Customer name: "+ this.customerName + ", Account type: " + this.accountType;
	}
	
	
}
