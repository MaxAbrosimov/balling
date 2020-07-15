package com.balling.training.repositories;

import com.balling.domain.Exercise;
import com.balling.primaryKeys.ExercisePrimaryKey;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface ExerciseRepository extends CrudRepository<Exercise, ExercisePrimaryKey> {

    List<Exercise> findByKeyTrainingId(UUID trainingId);

}
