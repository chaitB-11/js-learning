function Player(fullName,totalRuns){

this.fullName= fullName;
this.totalRuns=totalRuns;
}

const kohli=new Player("Virat Kohli,45000");

const Rohit=new Player("Rohit Sharma,45000");
Player.prototype.country="India";
console.log(`${kohli.fullName},${kohli.totalRuns},${kohli.country}`);
console.log(`${Rohit.fullName},${Rohit.totalRuns},${Rohit.country}`);























