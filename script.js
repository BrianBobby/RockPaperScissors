let humanScore = 0, computerScore = 0;

        const container=document.querySelector("div .container1");
        const content=document.createElement("p");
        const final=document.createElement("p");
        const con=document.createElement("p");

        function getComputerChoice() {
            return Math.floor(Math.random() * 3) + 1;
        }

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                content.textContent="Tie";
                container.appendChild(content);
            }
            else if ((humanChoice === 1 && computerChoice === 2) || 
                       (humanChoice === 2 && computerChoice === 3) || 
                       (humanChoice === 3 && computerChoice === 1)) {
                content.textContent="You Lose this round.";
                container.appendChild(content);
                computerScore++;
            }
            else{
                content.textContent="You Win this round.";
                container.appendChild(content);
                humanScore++;
            }
            

            if (humanScore === 5) {
                container.removeChild(content);
                final.textContent="YOU WIN!!";
                container.appendChild(final);
            } else if (computerScore === 5) {
                final.textContent="YOU LOSE!!";
                container.removeChild(content);
                container.appendChild(final);
            }
            con.textContent=`Human: ${humanScore} - Computer: ${computerScore}`;
            container.appendChild(con);
        }

        document.querySelectorAll("button").forEach((button) => {
            button.addEventListener('click', () => {
                if (humanScore < 5 && computerScore < 5) {
                    const humanChoice = parseInt(button.value);
                    const computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                }
            });
        });

/*
rock=1
paper=2
scissors=3
*/