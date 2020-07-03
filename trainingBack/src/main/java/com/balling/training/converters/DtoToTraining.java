package com.balling.training.converters;

import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.core.convert.converter.Converter;

@Component
public class DtoToTraining implements Converter<TrainingDto, Training> {

    @Override
    public Training convert(TrainingDto dto) {
        Training training = new Training();
        if (dto.getId() != null  && !StringUtils.isEmpty(dto.getId())) {
            training.setId(dto.getId());
        }
        training.setName(dto.getName());
        return training;
    }
}
