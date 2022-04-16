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
const years = Object.keys(devoMusic);
const randomYear = years[Math.floor(Math.random()*years.length)];
const randomAlbum = devoMusic[randomYear].album;
let randomSong = "unknown";

// define a function to call  in order to select a random single from the randomly chosen year
const selectSong = album => {
    const songList = Object.keys(devoMusic[randomYear].singles);
    return songList[Math.floor(Math.random()*songList.length)];
}
randomSong = devoMusic[randomYear].singles[selectSong(devoMusic)];

// define string to hold band members names
const members = Object.keys(devoMembers);
const randomMember = members[Math.floor(Math.random()*members.length)];
const randomInstrument = devoMembers[randomMember].instrument;
const randomAge = devoMembers[randomMember].age;

//random description generator
const adverb = ['monumentus', 'exquisite', 'super-duper', 'fuzzy', 'jam-tastic', 'gnarly'];
const randomAdverb = adverb[Math.floor(Math.random()*adverb.length)];
const secondAdverb = adverb[Math.floor(Math.random()*adverb.length)];

// random reaction generator
const reaction = ['pissed their pants', 'blew chunks', 'cried tears of joy', 'lost all bowel control'];
const randomReaction = reaction[Math.floor(Math.random()*reaction.length)];

// print out paragraph with randomized facts about devo
console.log(`In the year ${randomYear}, DEVO released their ${randomAdverb} album "${randomAlbum}". It was ${devoMusic[randomYear].length} of pure ${secondAdverb} bliss.`);
console.log(`Once their song "${randomSong}" was unleashed onto the public, all who heard it ${randomReaction}.`);
console.log(`In honor of ${randomMember}'s superb ${devoMembers[randomMember].instrument} playing style, ${devoMembers[randomMember].born} was unanimously declaired a national holiday.`)
