package com.example.movielibrary;

import com.example.movielibrary.model.Movie;
import com.example.movielibrary.repository.MovieRepository;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.util.StringUtils.capitalize;

@SpringBootApplication
public class MovieLibraryApplication implements CommandLineRunner {

    private static String filePath = "ratings.csv";

    public static void main(String[] args) {
        SpringApplication.run(MovieLibraryApplication.class, args);
    }

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public void run(String... args) throws Exception {
        List<List<String>> records = getMovies(this.filePath);
        for (List<String> row : records.subList(1, records.size())) {
            // String requestUrl = "https://api.themoviedb.org/3/movie/" + row.get(0) + "?api_key=84bd99d86a4aa0a3f23dd78ea80600bf"; // TMDb API
            String requestUrl = "https://www.omdbapi.com/?i=" + row.get(0) + "&apikey=d97902dd"; // OMDb API
            String imageUrl = "", runtime = "", country = "", language = "", awards = "",
                    productionCompanies = "", numVotes = "";
            HttpURLConnection conn = null;
            Gson gson = new Gson();
            try {
                URL url = new URL(requestUrl);
                conn = (HttpURLConnection)url.openConnection(); // this can give 401
                JsonReader reader = new JsonReader(new InputStreamReader(conn.getInputStream()));
                JsonObject response = gson.fromJson(reader, JsonObject.class);
                // imageUrl = "https://image.tmdb.org/t/p/w300" + response.get("poster_path"); // for TMDb API
                if (response.get("Poster") != null) {
                    imageUrl = response.get("Poster").getAsString(); // for OMDb API
                }
                if (response.get("Runtime") != null) {
                    runtime = response.get("Runtime").getAsString();
                }
                if (response.get("Country") != null) {
                    country = response.get("Country").getAsString();
                }
                if (response.get("Language") != null) {
                    language = response.get("Language").getAsString();
                }
                if (response.get("Awards") != null) {
                    awards = response.get("Awards").getAsString();
                }
                if (response.get("Production") != null) {
                    productionCompanies = response.get("Production").getAsString();
                    while (productionCompanies.length() >= 255) {
                        productionCompanies = productionCompanies.substring(0, productionCompanies.lastIndexOf(","));
                    }
                }
                if (response.get("imdbVotes") != null) {
                    numVotes = response.get("imdbVotes").getAsString();
                }
            } catch (Exception ex) {
                JsonReader reader = new JsonReader(new InputStreamReader(conn.getErrorStream()));
                JsonObject response = gson.fromJson(reader, JsonObject.class);
            }
            // imageUrl.replaceAll("\\\"", "") for TMDb API
            this.movieRepository.save(new Movie(row.get(3), row.get(8), capitalize(row.get(5)), row.get(12),
                    row.get(6), row.get(1) + ".0", row.get(2), imageUrl, row.get(9), numVotes, row.get(0), row.get(4),
                    runtime, country, language, awards, productionCompanies));
        }
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String loadCsv() {
        String filePath = "";
        return filePath;
    }

    public List<List<String>> getMovies(String filePath) {
        List<List<String>> records = new ArrayList<>();
        try (CSVReader csvReader = new CSVReader(new FileReader(filePath))) {
            String[] values = null;
            while ((values = csvReader.readNext()) != null) {
                records.add(Arrays.asList(values));
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            e.printStackTrace();
        }
        return records;
    }
}
