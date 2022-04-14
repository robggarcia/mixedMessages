/* 
Rob Garcia
Codecademy
April 13, 2022
Mixed Messages: The goal of this project is to build a message generator program using Javascript
Every time a user runs the program, they will get a new, randomized output.
The message it outputs will be made up of at least three different pieces of data.
*/

// create objects that containes all of the data related to DEVO
const devoMusic = {
    1978: {
        album: "Q: Are We Not Men? A: We Are Devo!",
        singles: ["(I Can't Get No) Satisfaction", "Jocko Homo", "Come Back Jonee"],
        length: "34 minutes and 24 seconds"
    },
    1979: {
        album: "Duty Now for the Future",
        singles: ["The Day My Baby Gave Me a Surprize", "Secret Agent Man"],
        length: "38 minutes and 56 seconds"
    },
    1980: {
        album: "Freedom of Chocie",
        singles: ["Girl U Want", "Whip It", "Gates of Steel", "Freedom of Choice"],
        length: "32 minutes and 14 seconds"
    },
    1981: {
        album: "New Traditionalists",
        singles: ["Through Being Cool", "Love Without Anger", "Beautiful World"],
        length: "33 minutes and 28 seconds"
    },
    1982: {
        album: "Oh, No! It's Devo",
        singles: ["Peek-a-Boo!", "That's Good"],
        length: "32 minutes and 14 seconds"
    }
};

const devoMembers = {
    Mark: {
        name: "Mark Mothersbaugh",
        instrument: "synth",
        born: "May 18, 1950"
    },
    Alan: {
        name: "Alan Myers",
        instrument: "drums",
        born: "December 29, 1954"
    },
    Bob: {
        name: "Bob Mothersbaugh",
        instrument: "guitar",
        born: "August 11, 1952"
    },
    Bob2: {
        name: "Bob Casale",
        instrument: "synth",
        born: "July 14, 1952"
    },
    Gerald: {
        name: "Jerry Casale",
        instrument: "base",
        born: "July 28, 1948"
    }
};


// define strins to hold the year each album was released
const releaseYears = Object.keys(devoMusic);
console.log(releaseYears);

// define string to hold band members names
const memberNames = Object.keys(devoMembers);
console.log(memberNames);

// create a function that will randomly select a year, album, and song
const musicSelection = () => {
    for (let i = 0; i < releaseYears.length; i++) {
        
    }
}