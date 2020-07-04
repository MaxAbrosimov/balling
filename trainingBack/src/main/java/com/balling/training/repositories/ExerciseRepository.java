package com.balling.training.repositories;

import com.balling.domain.Exercise;
import com.balling.primaryKeys.ExcersicePrimaryKey;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ExerciseRepository extends CrudRepository<Exercise, ExcersicePrimaryKey> {
}
