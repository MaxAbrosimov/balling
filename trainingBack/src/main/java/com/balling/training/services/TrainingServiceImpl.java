package com.balling.training.services;

import com.balling.training.converters.DtoToTraining;
import com.balling.domain.Training;
import com.balling.training.converters.TrainingToDto;
import com.balling.training.dto.TrainingDto;
import com.balling.training.repositories.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TrainingServiceImpl implements TrainingService {

    private TrainingRepository trainingRepository;
    private DtoToTraining dtoToTraining;
    private TrainingToDto trainingToDto;

    @Autowired
    public TrainingServiceImpl(TrainingRepository trainingRepository, DtoToTraining dtoToTraining, TrainingToDto trainingToDto) {
        this.trainingRepository = trainingRepository;
        this.dtoToTraining = dtoToTraining;
        this.trainingToDto = trainingToDto;
    }


    @Override
    public List<TrainingDto> listAll() {
        return StreamSupport.stream(trainingRepository.findAll().spliterator(), false)
                .map(training -> trainingToDto.convert(training))
                .collect(Collectors.toList());
    }

    @Override
    public Training getById(UUID id) {
        return trainingRepository.findById(id).orElse(null);
    }

    @Override
    public TrainingDto saveOrUpdate(TrainingDto dto) {
        Training training = trainingRepository.save(dtoToTraining.convert(dto));
        return trainingToDto.convert(training);
    }

    @Override
    public void delete(UUID id) {
        trainingRepository.deleteById(id);
    }
}
