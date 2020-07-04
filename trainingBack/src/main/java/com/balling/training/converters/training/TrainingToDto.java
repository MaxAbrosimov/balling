package com.balling.training.converters.training;

import com.balling.domain.Exercise;
import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * Created by jt on 1/10/17.
 */
@Component
public class TrainingToDto implements Converter<Training, TrainingDto> {

    @Override
    public TrainingDto convert(Training training) {
        TrainingDto dto = new TrainingDto();
        dto.setId(training.getId().toString());
        dto.setName(training.getName());
        dto.setDate(training.getDate());
        dto.setTotal(training.getTotal());
        dto.setSuccess(training.getSuccess());
        dto.setFail(training.getFail());
        return dto;
    }
}
