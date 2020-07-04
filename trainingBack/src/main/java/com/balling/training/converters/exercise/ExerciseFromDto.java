package com.balling.training.converters.exercise;

import com.balling.domain.Exercise;
import com.balling.training.dto.ExerciseDto;

import org.apache.commons.lang.StringUtils;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class ExerciseFromDto implements Converter<ExerciseDto, Exercise> {

    @Override
    public Exercise convert(ExerciseDto dto) {
        Exercise exercise = new Exercise();
        if (StringUtils.isNotEmpty(dto.getId())) {
            exercise.getKey().setId(UUID.fromString(dto.getId()));
        }
        exercise.getKey().setTrainingId(UUID.fromString(dto.getTrainingId()));
        exercise.setType(dto.getType());
        exercise.setTotal(dto.getTotal());
        exercise.setSuccess(dto.getSuccess());
        exercise.setFail(dto.getFail());
        return exercise;
    }

    public List<Exercise> convertAll(List<ExerciseDto> dtos, String trainingId) {
        return dtos.stream().map(e -> {
            e.setTrainingId(trainingId);
            return convert(e);
        }).collect(Collectors.toList());
    }

}
