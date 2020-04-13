package edu.miu.cs.cs472.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.miu.cs.cs472.model.Account;

/**
 * Servlet implementation class NewAccountCreationServlet
 */
@WebServlet(description = "This is a contact servlet", urlPatterns = { "/new-account"})
public class NewAccountCreationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	HashMap<String, Account> accountMap = new HashMap<>();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NewAccountCreationServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Account newAccount = new Account(request.getParameter("accountNo"), request.getParameter("customerName"), request.getParameter("accountType"));
		System.out.println("New Account Info: ");
		System.out.println(newAccount);
		
		accountMap.put(request.getParameter("accountNo"), newAccount);		
		System.out.println("\nAccount List HashMap:");
		accountMap.forEach((k,v) -> {
			System.out.println("Account " + k + ": ");
			System.out.println(v);
		});
				 
        PrintWriter out = response.getWriter();
        out.print("Account Created");
        out.flush();   
	}

}
