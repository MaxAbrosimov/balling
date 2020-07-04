package com.balling.training.converters.training;

import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.core.convert.converter.Converter;

import java.sql.Timestamp;
import java.util.UUID;

@Component
public class TrainingFromDto implements Converter<TrainingDto, Training> {

    @Override
    public Training convert(TrainingDto dto) {
        Training training = new Training();
        if (StringUtils.isNotEmpty(dto.getId())) {
            training.setId(UUID.fromString(dto.getId()));
        }
        training.setName(dto.getName());
        training.setDate(dto.getDate());
        training.setTotal(dto.getTotal());
        training.setSuccess(dto.getSuccess());
        training.setFail(dto.getFail());
        return training;
    }
}
