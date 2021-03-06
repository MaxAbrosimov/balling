package com.balling.training.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class TrainingDto {

    private String id;

    private String name;

    private Long date;

    private int total;

    private int success;

    private int fail;

    private List<ExerciseDto> exercises;
}
