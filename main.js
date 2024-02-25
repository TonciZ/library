// Parent Class
class Media {
constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
}
// The getter for the title
get title() {
    return this._title;
}
// Getter for the checkout state
get isCheckedOut() {
    return this._isCheckedOut;
}
// Getter for the ratings
get ratings() {
    return this._ratings;
}
// Setter for the checkout state
set isCheckedOut(value) {
    this._isCheckedOut = value;
}
// Method to toggle the checkout state, when called it changed the value of isCheckedOut to the opposite of what it is currently set to
toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
}
// Method to get the average rating
getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this._ratings.length; // ratingsSum divided by the number of ratings
}
// Method to add a rating
addRating(value) {
    this._ratings.push(value);
}
}

// Subclass Book
class Book extends Media {
    constructor(author, title, pages) {
        super(title);// This needs to be called first before the subclass can access the properties of the parent class
        this._author = author; // This is unique to the Book subclass
        this._pages = pages; // This is unique to the Book subclass
    }
    // Getters for author and pages (unique to the Book subclass)
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
    // Methods get inherited from the parent class
}

// Subclass Movie
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director; // This is unique to the Movie subclass
        this._runTime = runTime; // This is unique to the Movie subclass
    }
    // Getters for director and runTime (unique to the Movie subclass)
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }

    // Methods get inherited from the parent class
}

// Subclass CD
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist; // This is unique to the CD subclass
        this._songs = songs; // This is unique to the CD subclass
    }
    // Getters for artist and songs (unique to the CD subclass)
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    // Methods get inherited from the parent class
}