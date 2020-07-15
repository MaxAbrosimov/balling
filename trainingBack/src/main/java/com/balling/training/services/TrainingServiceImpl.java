package com.balling.training.services;

import com.balling.domain.Exercise;
import com.balling.training.converters.exercise.ExerciseFromDto;
import com.balling.training.converters.exercise.ExerciseToDto;
import com.balling.training.converters.training.TrainingFromDto;
import com.balling.domain.Training;
import com.balling.training.converters.training.TrainingToDto;
import com.balling.training.dto.ExerciseDto;
import com.balling.training.dto.TrainingDto;
import com.balling.training.repositories.ExerciseRepository;
import com.balling.training.repositories.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class TrainingServiceImpl implements TrainingService {

    private TrainingRepository trainingRepository;
    private ExerciseRepository exerciseRepository;
    private TrainingFromDto trainingFromDto;
    private TrainingToDto trainingToDto;
    private ExerciseToDto exerciseToDto;
    private ExerciseFromDto exerciseFromDto;

    @Autowired
    public TrainingServiceImpl(TrainingRepository trainingRepository, ExerciseRepository exerciseRepository, TrainingFromDto trainingFromDto, TrainingToDto trainingToDto, ExerciseToDto exerciseToDto, ExerciseFromDto exerciseFromDto) {
        this.trainingRepository = trainingRepository;
        this.exerciseRepository = exerciseRepository;
        this.trainingFromDto = trainingFromDto;
        this.trainingToDto = trainingToDto;
        this.exerciseToDto = exerciseToDto;
        this.exerciseFromDto = exerciseFromDto;
    }

    @Override
    public List<TrainingDto> listAll() {
        return StreamSupport.stream(trainingRepository.findAll().spliterator(), false)
                .map(training -> {
                    TrainingDto trainingDto = trainingToDto.convert(training);
                    trainingDto.setExercises(getExercisesByTraining(training.getId()));
                    return trainingDto;
                }).collect(Collectors.toList());
    }

    @Override
    public TrainingDto getById(UUID id) {
        Optional<Training> training = trainingRepository.findById(id);
        if (training.isPresent()) {
            TrainingDto trainingDto = trainingToDto.convert(training.get());
            trainingDto.setExercises(getExercisesByTraining(training.get().getId()));
            return trainingDto;
        }
        return null;
    }

    @Override
    public TrainingDto saveOrUpdate(TrainingDto dto) {
        Training training = trainingRepository.save(trainingFromDto.convert(dto));
        TrainingDto result = trainingToDto.convert(training);
        if (!CollectionUtils.isEmpty(dto.getExercises())) {
            Iterable<Exercise> exercises = exerciseRepository.saveAll(exerciseFromDto.convertAll(dto.getExercises(), training.getId().toString()));
            result.setExercises(exerciseToDto.convert(exercises));
        }
        return result;
    }

    @Override
    public void delete(UUID id) {
        trainingRepository.deleteById(id);
    }

    private List<ExerciseDto> getExercisesByTraining(UUID trainingId) {
        return exerciseToDto.convert(exerciseRepository.findByKeyTrainingId(trainingId));
    }
}
