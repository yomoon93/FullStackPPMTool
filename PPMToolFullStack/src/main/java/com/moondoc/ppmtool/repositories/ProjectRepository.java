package com.moondoc.ppmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.moondoc.ppmtool.domain.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

//	@Override
//	Iterable<Project> findAllById(Iterable<Long> iterable);
		
	Project findByProjectIdentifier(String projectId);	
	

}
