class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; // duration in seconds
    }
    
    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
    
    // just Iam Add this Method to convert seconds to minutes and seconds format
    formatTime() {
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // just Iam Add this Method to get video info
    getInfo() {
        return `"${this.title}" by ${this.uploader} (${this.formatTime()})`;
    }
}

// Instantiate first Video instance
const video1 = new Video("JavaScript Basics", "CodeWithMosh", 1800);
console.log(video1.watch());

// Instantiate second Video instance with different values
const video2 = new Video("React Tutorial", "TraversyMedia", 2400);
console.log(video2.watch());

// Additional instances for demonstration
const video3 = new Video("CSS Grid Layout", "LayoutLand", 900);
console.log(video3.watch());

// ===== ADDITIONAL METHODS DEMONSTRATION =====

console.log("\n=== BONUS: ADDITIONAL METHODS ===");

console.log("Video Info:");
console.log(video1.getInfo());
console.log(video2.getInfo());
console.log(video3.getInfo());

console.log("\nFormatted Time:");
console.log(`${video1.title}: ${video1.formatTime()}`);
console.log(`${video2.title}: ${video2.formatTime()}`);
console.log(`${video3.title}: ${video3.formatTime()}`);

// ===== ARRAY OF VIDEO OBJECTS =====

console.log("\n=== ARRAY OF VIDEO OBJECTS ===");

const playlist = [
    new Video("HTML Fundamentals", "WebDevSimplified", 1200),
    new Video("Advanced JavaScript", "AcademindPro", 3600),
    new Video("Node.js Crash Course", "NetNinja", 2700),
    new Video("MongoDB Tutorial", "ProgrammingWithMosh", 1500)
];

// Display all videos in playlist
console.log("Playlist:");
playlist.forEach((video, index) => {
    console.log(`${index + 1}. ${video.getInfo()}`);
});

// Watch all videos
console.log("\nWatching all videos:");
playlist.forEach(video => {
    console.log(video.watch());
});

// Calculate total playlist duration
const totalDuration = playlist.reduce((total, video) => total + video.time, 0);
const totalMinutes = Math.floor(totalDuration / 60);
console.log(`\nTotal playlist duration: ${totalMinutes} minutes`);