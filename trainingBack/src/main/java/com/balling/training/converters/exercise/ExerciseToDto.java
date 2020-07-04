package com.balling.training.converters.exercise;

import com.balling.domain.Exercise;
import com.balling.training.dto.ExerciseDto;
import org.springframework.stereotype.Component;

import org.springframework.core.convert.converter.Converter;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class ExerciseToDto implements Converter<Exercise, ExerciseDto> {

    @Override
    public ExerciseDto convert(Exercise dto) {
        ExerciseDto exercise = new ExerciseDto();
        exercise.setId(dto.getKey().getId().toString());
        exercise.setTrainingId(dto.getKey().getTrainingId().toString());
        exercise.setType(dto.getType());
        exercise.setTotal(dto.getTotal());
        exercise.setSuccess(dto.getSuccess());
        exercise.setFail(dto.getFail());
        return exercise;
    }

    public List<ExerciseDto> convert(Iterable<Exercise> exercises) {
        return StreamSupport.stream(exercises.spliterator(), false).map(this::convert).collect(Collectors.toList());
    }

}
