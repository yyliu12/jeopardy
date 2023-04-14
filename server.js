const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var game = `{"JArchiveID":"7788","showInfo":{"number":8837,"month":3,"day":28,"year":2023},"notes":"","contestants":{"right":{"JArchiveID":15479,"name":"Lisa Sriken","location":"New York, New York","from":0,"job":"lawyer"},"middle":{"JArchiveID":15480,"name":"Mara Lasko","location":"Washington, D","from":0,"job":"fundraiser"},"left":{"JArchiveID":15476,"name":"Nicole Rudolph","location":"Williston Park, New York","from":0,"job":"associate dean"}},"jeopardyBoard":{"0":{"name":"GEOMETRICAL GEOGRAPHY","details":"","clues":{"0":{"type":0,"value":200,"order":18,"text":"On Dec. 5, 1945 5 TBM Avenger torpedo bombers making up flight 19 vanished without a trace in the area called this","answer":"the Bermuda Triangle","right":"Mara","wrong":[],"transcript":""},"1":{"type":0,"value":400,"order":23,"text":"Part of the Kremlin, St. Nicholas, or Nikolskaya, Tower overlooks this square","answer":"the Red Square","right":"Mara","wrong":[],"transcript":""},"2":{"type":0,"value":600,"order":24,"text":"What's called this U.S. boundary was surveyed between 1763 &amp; 1767 by 2 imported Englishmen","answer":"the Mason-Dixon line","right":"Nicole","wrong":[],"transcript":""},"3":{"type":0,"value":800,"order":25,"text":"This not-quite-round 17-acre park area is just south of the White House","answer":"the Ellipse","right":"Mara","wrong":[],"transcript":""},"4":{"type":0,"value":1000,"order":26,"text":"This northernmost spot of Alaska was named for Sir John, a proponent of Arctic exploration","answer":"Point Barrow","right":null,"wrong":[],"transcript":""}}},"1":{"name":"FANCIFIED BEASTLY IDIOMS","details":"","clues":{"0":{"type":0,"value":200,"order":7,"text":"It's impossible to instruct the elder canine with state-of-the-art maneuvers","answer":"you can't teach an old dog new tricks","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":400,"order":8,"text":"Release one Persian from a sack","answer":"let the cat out of the bag","right":"Lisa","wrong":[],"transcript":""},"2":{"type":0,"value":600,"order":9,"text":"Up to the moment of the reappearance of bovines at their domicile","answer":"till the cows come home","right":"Lisa","wrong":[],"transcript":""},"3":{"type":0,"value":800,"order":13,"text":"In the manner of one flying fox leaving Pandemonium","answer":"like a bat out of hell","right":"Nicole","wrong":[],"transcript":""},"4":{"type":0,"value":1000,"order":14,"text":"The Appaloosa with alternate pigmentation","answer":"a horse of a different color","right":"Mara","wrong":[],"transcript":""}}},"2":{"name":"\\"M\\"USIC CLASS","details":"","clues":{"0":{"type":0,"value":200,"order":17,"text":"This mechanical device for establishing an exact tempo was based on a pendulum","answer":"a metronome","right":"Lisa","wrong":[],"transcript":""},"1":{"type":0,"value":400,"order":19,"text":"It's el type of musician seen <a href=\\"https://www.j-archive.com/media/2023-03-28_J_19.jpg\\" target=\\"_blank\\">here</a> playing the traditional 5-string vihuela","answer":"mariachi","right":"Mara","wrong":[],"transcript":""},"2":{"type":0,"value":600,"order":20,"text":"A bar, a section of musical score corresponding to a specific number of beats, is also called this","answer":"measure","right":"Mara","wrong":[],"transcript":""},"3":{"type":0,"value":800,"order":21,"text":"This plucked musical instrument has 8 strings tuned in pairs to the same 4 notes as a violin","answer":"a mandolin","right":"Nicole","wrong":[],"transcript":""},"4":{"type":0,"value":1000,"order":22,"text":"<a href=\\"https://www.j-archive.com/media/2023-03-28_J_22.mp3\\">This</a> Polish dance music in triple time originated in the 16th century &amp; uses heel-tapping accents","answer":"a mazurka","right":"Lisa","wrong":[],"transcript":""}}},"3":{"name":"'80s MOVIE COMEDIES","details":"","clues":{"0":{"type":0,"value":200,"order":6,"text":"In 1986 this title guy &amp; 2 friends had quite a day, hitting a museum &amp; doing some fine dining; he even caught a ball at a Cubs game","answer":"Ferris Bueller","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":400,"order":10,"text":"This character was the lifeless of the party when Andrew McCarthy &amp; Jonathan Silverman spent a \\"Weekend at\\" his place in 1989","answer":"Bernie","right":"Mara","wrong":[],"transcript":""},"2":{"type":0,"value":600,"order":11,"text":"Roger Murdock &amp; Captain Oveur, in this 1980 classic: \\"We have clearance, Clarence\\"; \\"Roger, Roger. what's our vector, Victor?\\"","answer":"<i>Airplane!</i>","right":"Lisa","wrong":[],"transcript":""},"3":{"type":0,"value":800,"order":12,"text":"Golfer Rodney Dangerfield, in this pic: \\"This is the worst lookin' hat I ever saw!\\" (sees Ted Knight) \\"It looks good on you, though\\"","answer":"<i>Caddyshack</i>","right":"Nicole","wrong":[],"transcript":""},"4":{"type":0,"value":1000,"order":16,"text":"In this holiday film Randy Quaid's Eddie used to have a metal plate in his head, but use of a microwave made him forget who he was","answer":"<i>Christmas Vacation</i>","right":"Nicole","wrong":[],"transcript":""}}},"4":{"name":"3 MEN","details":"","clues":{"0":{"type":0,"value":200,"order":15,"text":"Formed around 60 B.C., the First Roman Triumvirate was made up of Crassus, Pompey &amp; this guy","answer":"Julius Caesar","right":"Lisa","wrong":["Mara"],"transcript":"(Mara: Who is, um--oh, uh, Augustus?)"},"1":{"type":0,"value":400,"order":27,"text":"This biblical man had 3 sons; the oldest, Shem, gave us the word \\"Semitic\\"","answer":"Noah","right":"Nicole","wrong":["Lisa"],"transcript":"(Lisa: Who is Abraham?)"},"2":{"type":0,"value":600,"order":28,"text":"These 2 West Point alums filled out the Apollo 11 crew with Neil Armstrong","answer":"Collins &amp; Aldrin","right":"Lisa","wrong":["Mara"],"transcript":"(Mara: Who are Shepard & Collins?)"},"3":{"type":0,"value":800,"order":29,"text":"This classical trio whose name is French for \\"fine arts\\" lasted for 53 years with pianist Menahem Pressler joined by different musicians","answer":"Beaux Arts","right":"Nicole","wrong":[],"transcript":""},"4":{"type":0,"value":1000,"order":30,"text":"The 2022 Nobel econ prize went to 3 men who had researched financial crises; this winner had faced one IRL as Fed chair in 2007 &amp; '08","answer":"Ben Bernanke","right":null,"wrong":["Lisa"],"transcript":"(Lisa: Who is Greenspan?)"}}},"5":{"name":"A BABY","details":"","clues":{"0":{"type":0,"value":200,"order":1,"text":"parents.com recommends using a washcloth &amp; warm water vs. wipes to avoid baby getting this \\"rash\\"","answer":"diaper rash","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":400,"order":2,"text":"<a href=\\"https://www.j-archive.com/media/2023-03-28_J_02.jpg\\" target=\\"_blank\\">Birthmarks</a> that often with age are called \\"stork bites\\" &amp; these celestial beings \\"kisses\\" on the <a href=\\"https://www.j-archive.com/media/2023-03-28_J_02a.jpg\\" target=\\"_blank\\">forehead</a>","answer":"angel kisses","right":"Mara","wrong":[],"transcript":""},"2":{"type":0,"value":600,"order":3,"text":"3 common positions for a baby to whom you're doing this are over your shoulder, sitting on your lap &amp; facedown on your lap","answer":"burping","right":"Lisa","wrong":[],"transcript":""},"3":{"type":1,"value":1000,"order":4,"text":"The Apgar score is a 5-part test of appearance, pulse, grimace, activity &amp; this function","answer":"respiration","right":null,"wrong":["Lisa"],"transcript":"(Lisa: What is speech?)"},"4":{"type":0,"value":1000,"order":5,"text":"This yellow discoloration of a newborn's skin &amp; eyes is common in babies born before 38 weeks' gestation","answer":"jaundice","right":"Lisa","wrong":[],"transcript":""}}}},"doubleJeopardyBoard":{"0":{"name":"WHEN IN ROME","details":"","clues":{"0":{"type":0,"value":400,"order":1,"text":"Visit this monument, also called the Flavian Amphitheatre","answer":"the Colosseum","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":800,"order":19,"text":"Take a day trip to Pompeii &amp; visit the archaeological sites or hike up this volcano for the views","answer":"Vesuvius","right":"Mara","wrong":[],"transcript":""},"2":{"type":0,"value":1200,"order":20,"text":"Get a little cardio bounding up the 138 of these, which lead to the upper piazza &amp; the Trinita Dei Monti Church","answer":"(the) Spanish Steps","right":"Lisa","wrong":[],"transcript":"(Lisa: What are steps?)\\n(Ken: More specifically?)"},"3":{"type":1,"value":1800,"order":21,"text":"Explore these underground passages that were used as ancient cemeteries","answer":"catacombs","right":"Lisa","wrong":[],"transcript":""},"4":{"type":0,"value":2000,"order":22,"text":"Stop by the Borghese Gallery to see this sculptor architect's different take on \\"<a href=\\"https://www.j-archive.com/media/2023-03-28_DJ_22.jpg\\" target=\\"_blank\\">David</a>\\"","answer":"Bernini","right":null,"wrong":["Nicole","Lisa"],"transcript":"(Lisa: Who is Michelangelo?)\\n(Nicole: Who is Rodin?)"}}},"1":{"name":"WRITERS OF THE CLOTH","details":"","clues":{"0":{"type":0,"value":400,"order":5,"text":"Priest Andrew Greeley's first novel, about an archbishop with secrets such as a daughter, was called \\"The Cardinal\\" these","answer":"Sins","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":800,"order":17,"text":"This transcendentalist essayist &amp; poet was ordained a Unitarian minister in Boston in 1829, but resigned in 1832","answer":"Emerson","right":"Nicole","wrong":[],"transcript":""},"2":{"type":0,"value":1200,"order":18,"text":"Metaphysical poet John Donne was ordained a priest in 1615 &amp; became a dean at this London cathedral 6 years later","answer":"St. Paul's","right":"Lisa","wrong":[],"transcript":""},"3":{"type":0,"value":1600,"order":24,"text":"Rabbi Chaim Potok's novel \\"The Chosen\\" is a coming-of-age story within this Orthodox Jewish sect","answer":"the Hasidic Jews","right":"Mara","wrong":[],"transcript":""},"4":{"type":0,"value":2000,"order":25,"text":"An influential writer on spiritual themes, Thomas Merton was a member of this order known for emphasizing silence &amp; austerity","answer":"the Trappists","right":null,"wrong":["Mara"],"transcript":"(Mara: Who are the Franciscans?)\\n...\\n(Ken: Less than a minute, Mara.)"}}},"2":{"name":"TOUGH TOUGH-GUY TV","details":"","clues":{"0":{},"1":{"type":0,"value":800,"order":29,"text":"Too tough for a first name, Western hero Paladin had a business card that said these 2 words, \\"will travel\\"","answer":"Have gun","right":"Lisa","wrong":[],"transcript":"[The end-of-round signal sounds.]"},"2":{"type":0,"value":1200,"order":28,"text":"In the series this Michael Connelly hero: \\"Legacy\\", he's off the LAPD &amp; his daughter is on it","answer":"Bosch","right":null,"wrong":[],"transcript":""},"3":{"type":0,"value":1600,"order":27,"text":"Tough on the streets of Austin, tender with his boyfriend, officer Carlos Reyes is on this show with an emergency number in its title","answer":"<i>9-1-1: Lone Star</i>","right":null,"wrong":["Lisa"],"transcript":"(Lisa: What is Reno 911?)\\n...\\n(Ken: I do like that show, but this is [*], a very different vibe.)"},"4":{"type":0,"value":2000,"order":26,"text":"Tough cowboy Curly in \\"City Slickers\\", <a href=\\"https://www.j-archive.com/media/2023-03-28_DJ_26.jpg\\" target=\\"_blank\\">this</a> Western actor took a turn on TV as Bronk","answer":"Jack Palance","right":"Lisa","wrong":[],"transcript":""}}},"3":{"name":"WORDS FROM GREEK &amp; LATIN","details":"","clues":{"0":{"type":0,"value":400,"order":6,"text":"Latin for \\"to sew\\" gives us this medical word for a stitch","answer":"suture","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":800,"order":7,"text":"A fancy word for movies is related to this Greek-derived word for \\"exhibiting motion\\"","answer":"kinetic","right":null,"wrong":[],"transcript":""},"2":{"type":1,"value":3000,"order":8,"text":"A letter that the pope sends around, it's from the Greek for \\"circle\\"","answer":"encyclical","right":null,"wrong":["Nicole"],"transcript":"(Nicole: Uh...)\\n(Ken: Nicole?)\\n(Nicole: Um...)"},"3":{"type":0,"value":1600,"order":9,"text":"The opposite of an iamb, this word for a pattern of stressed-unstressed as in the word \\"rabbit\\" is from Greek for \\"run\\"","answer":"a trochee","right":null,"wrong":[],"transcript":"(Ken: Been too long since English?)\\n...\\n(Nicole: Let's get away from that.)"},"4":{"type":0,"value":2000,"order":23,"text":"From Greek for \\"sound\\", it's the term for the smallest meaningful unit of spoken sound; English has just over 40","answer":"a phoneme","right":"Nicole","wrong":[],"transcript":""}}},"4":{"name":"WORLD HISTORY","details":"","clues":{"0":{"type":0,"value":400,"order":10,"text":"The Thirty Years' War began in 1618 as a conflict between these 2 major religious groups","answer":"the Catholics &amp; the Protestants","right":"Mara","wrong":[],"transcript":""},"1":{"type":0,"value":800,"order":11,"text":"This good guy of Christmas carol fame was actually a duke of Bohemia; he was only declared a king (&amp; a saint) after his death","answer":"Wenceslas","right":"Lisa","wrong":[],"transcript":""},"2":{"type":0,"value":1200,"order":12,"text":"During the Mexican Revolution, U.S. Marines seized this \\"true cross\\" port &amp; occupied it for 7 months","answer":"Vera Cruz","right":null,"wrong":["Lisa"],"transcript":"(Lisa: What's the Alamo?)"},"3":{"type":0,"value":1600,"order":13,"text":"In 1884 Hilary Richard Wright Johnson became this African country's first native-born president","answer":"Liberia","right":"Nicole","wrong":[],"transcript":""},"4":{"type":0,"value":2000,"order":16,"text":"The French did not allow the Germans to pass in this 1916 battle that lasted 10 months","answer":"the Battle of Verdun","right":"Nicole","wrong":["Lisa"],"transcript":"(Lisa: What's the Somme?)"}}},"5":{"name":"BEFORE &amp; AFTER FEMALE DUOS","details":"","clues":{"0":{"type":0,"value":400,"order":2,"text":"Prolific British mystery author &amp; supermodel who's mom to Alexa","answer":"Agatha Christie Brinkley","right":"Nicole","wrong":[],"transcript":""},"1":{"type":0,"value":800,"order":3,"text":"Historical early 20th century disease carrier &amp; our 16th president's spouse","answer":"Typhoid Mary Todd Lincoln","right":"Nicole","wrong":[],"transcript":""},"2":{"type":0,"value":1200,"order":4,"text":"\\"GLOW\\" wrestler &amp; Captain Marvel portrayer","answer":"Alison Brie Larson","right":null,"wrong":[],"transcript":""},"3":{"type":0,"value":1600,"order":14,"text":"\\"Queen's Gambit\\" star &amp; co-host of \\"The View\\"","answer":"Anya Taylor Joy Behar","right":"Lisa","wrong":[],"transcript":""},"4":{"type":0,"value":2000,"order":15,"text":"Charlie Brown's \\"spicy\\" gal pal &amp; newly chosen President Pro Tempore of the Senate from Washington","answer":"Peppermint Patty Muray","right":null,"wrong":[],"transcript":""}}}},"finalJeopardy":{"category":"TRANSPORTATION USA","comments":"","text":"This public agency runs the USA's busiest bus terminal, opened in 1950 for commuters awed by its polished steel &amp; stone","type":2,"wrong":[{"player":"Nicole","response":"What is the MTA?","wager":1201}],"right":[{"player":"Mara","response":"What is port authority?","wager":4000},{"player":"Lisa","response":"What is the Port Authority? Please clap","wager":4201}],"answer":"the Port Authority (of New York and New Jersey)"},"finalScores":[{"player":"Nicole","score":8399,"remarks":"2nd place: $2,000"},{"player":"Mara","score":8200,"remarks":"3rd place: $1,000"},{"player":"Lisa","score":9601,"remarks":"New champion: $9,601"}]}`
gameData = JSON.parse(game);

class GameServer {
    constructor() {
        this.games = {};
    }
}


class Player {
    constructor(game, socket, name) {
        this.game = game;
        this.socket = socket;
        this.score = 0;
        this.name = name;
    }
}

class Game {
    constructor(id) {
        this.id = id;
        this.players = {};
        this.picked = [];
        /* 
            armed
            not-armed
            buzzed
        */
        this.buzzState = "not-armed";
        this.buzzedPlayer = null;
        this.clueValue = 0;
    }

    setup(socket) {

    }

    setupPlayer(socket) {
        let game = this;
        socket.join("player" + this.id);
        socket.join("game" + this.id);

        socket.on("name", (data) => {
            var player = new Player(game, socket, data.name);
            // generate random 5 letter string
            var id = Math.random().toString(36).substring(2, 7);
            this.players[id] = player;
            socket.data = {};
            socket.data.id = id;

            game.sendScores();
        });

        // on socket disconnect
        socket.on("disconnect", () => {
            delete this.players[socket.data.id];
            game.sendScores();
        });

        socket.on("buzz", (data) => {
            if (this.buzzState == "armed" && this.buzzedPlayer == null) {
                this.buzzState = "buzzed";
                this.buzzedPlayer = socket.data.id;
                this.sendBuzzerState();
            }
        });

    }

    setupHost(socket) {
        let gameId = this.id;
        let game = this;
        socket.emit("game", gameData.jeopardyBoard);
        socket.join("host" + this.id);
        socket.join("game" + this.id);
        
        socket.on("clueselected", (data) => {
            io.to("board" + this.id).emit("clue", 
                {
                    text: gameData.jeopardyBoard[data.k1].clues[data.k2].text,
                    k1: data.k1,
                    k2: data.k2
                }
            );

            io.to("host" + this.id).emit("clue",
                {
                    text: gameData.jeopardyBoard[data.k1].clues[data.k2].text,
                    answer: gameData.jeopardyBoard[data.k1].clues[data.k2].answer,
                }
            );

            this.addPicked(data.k1, data.k2);
            this.clueValue = gameData.jeopardyBoard[data.k1].clues[data.k2].value;
        });

        socket.on("removeplayer", (data) => {
            game.players[data.id].socket.disconnect();
            game.sendScores();
        });

        socket.on("setscore", (data) => {
            game.players[data.id].score = data.amount;
            game.sendScores();
        });

        socket.on("modifyscore", (data) => {
            game.players[data.id].score += data.amount;
            game.sendScores();
        });

        socket.on("clearclue", (data) => {
            io.to("game" + this.id).emit("clearclue");
        });

        socket.on("buzzerstate", (data) => {
            this.buzzState = data.state;
            this.buzzedPlayer = null;
            this.sendBuzzerState();
        });

        socket.on("adjudicate", (data) => {
            if (data.right) {
                this.players[this.buzzedPlayer].score += this.clueValue;
            } else {
                this.players[this.buzzedPlayer].score -= this.clueValue;
            }

            this.sendScores();
        });


        game.sendScores();
        game.sendBuzzerState();
        game.sendPicked();
    }

    setupBoard(socket, id) {
        socket.join("board" + this.id);
        socket.join("game" + this.id);
        socket.emit("game", gameData.jeopardyBoard);
    }

    addPicked(k1, k2) {
        this.picked.push([k1, k2]);
        this.sendPicked();
    }

    sendPicked() {
        io.to("board" + this.id).emit("picked", this.picked);
        io.to("host" + this.id).emit("picked", this.picked);
    }

    sendScores() {
        var scores = [];
        for (var id in this.players) {
            scores.push({
                name: this.players[id].name,
                score: this.players[id].score,
                id: id
            });
        }
        io.to("game" + this.id).emit("scores", scores);
    }

    sendBuzzerState() {
        
        io.to("host" + this.id).emit("buzzerstate", {
            state: this.buzzState,
            player: this.players[this.buzzedPlayer] ? this.players[this.buzzedPlayer].name : "No player has buzzed"
        });
    }
}


gameServer = new GameServer();

app.get("/createRoom", (req, res) => {
    // get id from url and create room
    var id = req.query.id;
    gameServer.games[id] = new Game(id);
    res.send("done");
});


app.get('/player', (req, res) => {
    res.sendFile(__dirname + '/player.html');
});

app.get('/host', (req, res) => {
    res.sendFile(__dirname + '/host.html');
});

app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/board.html');
});

io.on('connection', (socket) => {
    
    socket.on("setup", (data) => {
        var roomid = data.roomid;
        if (!(roomid in gameServer.games)) {
            socket.disconnect();
            return;
        }
        var game = gameServer.games[roomid];
        var type = data.type;

        if (type == "player") {
            game.setupPlayer(socket);
        }
        if (type == "host") {
            game.setupHost(socket);
        }
        if (type == "board") {
            game.setupBoard(socket);
        }
    });
});

// expose public/ directory
app.use(express.static('public'));

server.listen(3000, () => {
    console.log('listening on *:3000');
});