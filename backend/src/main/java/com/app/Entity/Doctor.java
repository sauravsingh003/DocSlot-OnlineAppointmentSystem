package com.app.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
@Entity
public class Doctor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String phone;
	private String degree;
	private double amount;
	private String email;
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role; //  DOCTOR
	
	
	@Lob
	@Column(columnDefinition = "LONGBLOB") // To store image as BLOB
	private byte[] doctorimage;

	@ManyToOne
	@JoinColumn(name = "specialization_id")
	private Specialization specialization;

	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Appointment> appointments;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public Specialization getSpecialization() {
		return specialization;
	}

	public void setSpecialization(Specialization specialization) {
		this.specialization = specialization;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public byte[] getDoctorimage() {
		return doctorimage;
	}

	public void setDoctorimage(byte[] doctorimage) {
		this.doctorimage = doctorimage;
	}

	public double getAmount() {
	    return amount;
	}

	public void setAmount(double amount) {
	    this.amount = amount;
	}

	public String getEmail() {
	    return email;
	}

	public void setEmail(String email) {
	    this.email = email;
	}

	public String getPassword() {
	    return password;
	}

	public void setPassword(String password) {
	    this.password = password;
	}

	public Role getRole() {
	    return role;
	}

	public void setRole(Role role) {
	    this.role = role;
	}

	

}
