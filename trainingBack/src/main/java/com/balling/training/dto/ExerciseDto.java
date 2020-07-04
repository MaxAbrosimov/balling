package com.balling.training.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ExerciseDto {

    private String id;

    private String trainingId;

    private String type;

    private int total;

    private int success;

    private int fail;

}
