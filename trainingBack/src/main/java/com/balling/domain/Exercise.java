package com.balling.domain;

import com.balling.primaryKeys.ExercisePrimaryKey;
import lombok.Data;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

@Table("exercise")
@Data
public class Exercise {

    @PrimaryKey
    private ExercisePrimaryKey key;

    private String type;

    private int total;

    private int success;

    private int fail;

    public Exercise() {
        ExercisePrimaryKey key = new ExercisePrimaryKey();
        key.setId(UUID.randomUUID());
    }

}
