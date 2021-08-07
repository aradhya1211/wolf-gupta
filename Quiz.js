class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
     //write code to change the background color here
     background("YELLOW");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    fill("black");
    text("Result of the Quiz but who cares",400,50);
    text("_________________________________",380,60);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();


    if(allContestants !== undefined){
      debugger;
      var display_answer = 220;
      fill("green");
      textSize(20);
      text("SUCHNA:green highlited one is correct now get lost",130,230);
      

    
    //write condition to check if contestantInfor is not undefined


    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      debugger;
      var ans = "2";
      if(ans === allContestants[plr].answer)
        fill("green")
      else        fill("red");
   
      display_answer+=30;
      textSize(20)
      text(allContestants[plr].name+","+allContestants[plr].answer,200,display_answer);

    }
    
  }

  }
}
