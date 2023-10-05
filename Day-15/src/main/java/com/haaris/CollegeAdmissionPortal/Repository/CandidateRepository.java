package com.haaris.CollegeAdmissionPortal.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haaris.CollegeAdmissionPortal.Entity.Candidate;


public interface CandidateRepository extends JpaRepository<Candidate,Long>{

}
