package com.example.To_Do_List.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)

public class ResourcesNotFoundException extends RuntimeException {
    public ResourcesNotFoundException(String massage) {

        super(massage);
    }
}
