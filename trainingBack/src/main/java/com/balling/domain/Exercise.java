package com.balling.domain;

import com.balling.primaryKeys.ExcersicePrimaryKey;
import lombok.Data;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table("exercise")
@Data
public class Exercise {

    @PrimaryKey
    private ExcersicePrimaryKey key;

    private String type;

    private int total;

    private int success;

    private int fail;

    public Exercise() {
        this.key = new ExcersicePrimaryKey();
    }

}
