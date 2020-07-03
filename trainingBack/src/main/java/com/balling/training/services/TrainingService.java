package com.balling.training.services;


import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;

import java.util.List;
import java.util.UUID;

public interface TrainingService {

    List<TrainingDto> listAll();

    Training getById(UUID id);

    TrainingDto saveOrUpdate(TrainingDto trainingDto);

    void delete(UUID id);

}
