package com.haaris.CollegeAdmissionPortal.Service;


import com.haaris.CollegeAdmissionPortal.Entity.Users;

public interface UsersInterface {

	public Users saveUser(Users user);
	
	public String deleteUser(int id);
	
	public String login(String username,String password);
	
	public boolean isUserExist(String username);

	public boolean isUserIdExist(int id);
}

