package com.app.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Role;
import com.app.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	boolean existsByEmail(String email);

	 List<User> findByRole(Role role);

	Optional<User> findByEmail(String email);

}
