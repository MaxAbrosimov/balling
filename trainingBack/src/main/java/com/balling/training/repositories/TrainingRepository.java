package com.balling.training.repositories;

import com.balling.domain.Training;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

/**
 * Created by jt on 1/10/17.
 */
public interface TrainingRepository extends CrudRepository<Training, UUID> {
}
