package com.example.movielibrary.controller;

import com.example.movielibrary.model.Movie;
import com.example.movielibrary.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false")
@RestController
@RequestMapping("api/")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("movies")
    public List<Movie> getMovies() {
        return this.movieRepository.findAll();
    }

}
