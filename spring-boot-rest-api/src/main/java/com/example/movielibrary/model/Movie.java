package com.example.movielibrary.model;

import javax.persistence.*;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String year;
    private String titleType;
    private String director;
    private String imdbRating;
    private String yourRating;
    private String dateWatched;
    private String imageUrl;
    private String genres;
    private String numVotes;
    private String imdbId;
    private String imdbUrl;
    private String runtime;
    private String country;
    private String language;
    private String awards;
    private String productionCompanies;

    public Movie() {

    }

    public Movie(String name, String year, String titleType, String director, String imdbRating, String yourRating, String dateWatched, String imageUrl, String genres, String numVotes, String imdbId, String imdbUrl, String runtime, String country, String language, String awards, String productionCompanies) {
        this.name = name;
        this.year = year;
        this.titleType = titleType;
        this.director = director;
        this.imdbRating = imdbRating;
        this.yourRating = yourRating;
        this.dateWatched = dateWatched;
        this.imageUrl = imageUrl;
        this.genres = genres;
        this.numVotes = numVotes;
        this.imdbId = imdbId;
        this.imdbUrl = imdbUrl;
        this.runtime = runtime;
        this.country = country;
        this.language = language;
        this.awards = awards;
        this.productionCompanies = productionCompanies;
    }

    public Movie(long id, String name, String year, String titleType, String director, String imdbRating, String yourRating, String dateWatched, String imageUrl, String genres, String numVotes, String imdbId, String imdbUrl, String runtime, String country, String language, String awards, String productionCompanies) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.titleType = titleType;
        this.director = director;
        this.imdbRating = imdbRating;
        this.yourRating = yourRating;
        this.dateWatched = dateWatched;
        this.imageUrl = imageUrl;
        this.genres = genres;
        this.numVotes = numVotes;
        this.imdbId = imdbId;
        this.imdbUrl = imdbUrl;
        this.runtime = runtime;
        this.country = country;
        this.language = language;
        this.awards = awards;
        this.productionCompanies = productionCompanies;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getTitleType() {
        return titleType;
    }

    public void setTitleType(String titleType) {
        this.titleType = titleType;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(String imdbRating) {
        this.imdbRating = imdbRating;
    }

    public String getYourRating() {
        return yourRating;
    }

    public void setYourRating(String imdbRating) {
        this.yourRating = yourRating;
    }


    public String getDateWatched() {
        return dateWatched;
    }

    public void setDateWatched(String dateWatched) {
        this.dateWatched = dateWatched;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getNumVotes() {
        return numVotes;
    }

    public void setNumVotes(String numVotes) {
        this.numVotes = numVotes;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getImdbUrl() {
        return imdbUrl;
    }

    public void setImdbUrl(String imdbUrl) {
        this.imdbUrl = imdbUrl;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getAwards() {
        return awards;
    }

    public void setAwards(String awards) {
        this.awards = awards;
    }

    public String getProductionCompanies() {
        return productionCompanies;
    }

    public void setProductionCompanies(String productionCompanies) {
        this.productionCompanies = productionCompanies;
    }
}
