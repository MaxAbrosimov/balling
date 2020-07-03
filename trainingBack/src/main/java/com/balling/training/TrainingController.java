package com.balling.training;

import com.balling.domain.Training;
import com.balling.training.dto.TrainingDto;
import com.balling.training.services.TrainingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/api/training")
public class TrainingController {

    private final TrainingService trainingService;

    public TrainingController(TrainingService trainingService) {
        this.trainingService = trainingService;
    }

    @PostMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<TrainingDto> save(@RequestBody TrainingDto trainingDto) {
        return new ResponseEntity<>(trainingService.saveOrUpdate(trainingDto), OK);
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<List<TrainingDto>> list() {
        return new ResponseEntity<>(trainingService.listAll(), OK);
    }

    @GetMapping(value = "/{pid}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Training> load(@PathVariable String pid) {
        return new ResponseEntity<>(trainingService.getById(UUID.fromString(pid)), OK);
    }

    @DeleteMapping(value = "{pid}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity delete(@PathVariable String pid) {
        trainingService.delete(UUID.fromString(pid));
        return new ResponseEntity(OK);
    }

}
