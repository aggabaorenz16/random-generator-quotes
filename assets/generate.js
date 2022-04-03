const qoutegen = document.getElementById("quotes");

const generate = () => {
    const qoutes = [
        "“The best way to predict your future is to create it” <br> - Abraham Lincoln",
        "“Success is the sum of efforts, repeated” <br> - R Collier",
        "“Teachers can open the door, but you must enter it yourself.” <br> — Chinese Proverb",
        "“The man who does not read books has no advantage over the one who cannot read them.” <br> — Mark Twain",
        "“The beautiful thing about learning is that no one can take it away from you.” <br> — B.B. King",
        "“Education is the most powerful weapon you can use to change the world.” <br> — BB King",
        "“The mind is not a vessel to be filled but a fire to be ignited.” <br> - Plutarch",
        "“Don't let what you cannot do interfere with what you can do.” <br> — John Wooden",
        "“A person who never made a mistake never tried anything new.” <br> - Albert Einstein",
        "“Learning is never done without errors and defeat.” <br> - Vladimir Lenin",
        "“Never let the fear of striking out stop you from playing the game.” <br> — Babe Ruth",
        "“Procrastination makes easy things hard and hard things harder.” <br> — Mason Cooley",
        "“You don't have to be great to start, but you have to start to be great.” <br> - Zig Ziglar",
        "“The expert in anything was once a beginner.” <br> - Helen Hayes",
        "“The way to get started is to quit talking and begin doing.” <br> - Walt Disney",
        "“There are no shortcuts to any place worth going.” <br> — Beverly Stills",
        "“I think it's possible to ordinary people to choose to be extraordinary.” <br> — Elon Musk",
        "“I find that the harder I work, the more luck I seem to have.” <br> - Thomas Jefferson",
        "“Motivation is what gets you started. Habit is what keeps you going.” <br> - Jim Ryun",
        "“Success is the sum of small efforts, repeated.” <br> — R Collier",
        "“Learn from yesterday. Live for today. Hope for tomorrow.” <br> - Albert Einstein",
        "“Today a reader. Tomorrow a leader.” <br> - Renz Aggabao",
        "“If you think education is expensive, try ignorance.” — Andy McIntyre",
      ];
      
      var Quotess = qoutes[Math.floor(Math.random()*qoutes.length)];
        qoutegen.innerHTML = Quotess;
        console.log(`${Quotess.length} Letters`)
}