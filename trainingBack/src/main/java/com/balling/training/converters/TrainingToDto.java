package com.balling.training.converters;

import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Created by jt on 1/10/17.
 */
@Component
public class TrainingToDto implements Converter<Training, TrainingDto> {
    @Override
    public TrainingDto convert(Training training) {
        TrainingDto dto = new TrainingDto();
        dto.setId(training.getId());
        dto.setName(training.getName());
        return dto;
    }
}
