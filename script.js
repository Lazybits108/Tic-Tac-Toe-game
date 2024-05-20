let btnarr=document.querySelectorAll(".btnclass");
let resetgame=document.querySelector(".resetgame");
const winnerpos=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
turn0=true;
let cnt=0;
btnarr.forEach((box)=>{box.addEventListener("click",()=>{
    if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        cnt++;  
        if(cnt===9)
            {
                let win=document.querySelector(".winner");
                win.innerHTML="DRAW!!";
                cnt=0;
                disablebuttons();
            }          
    });
    });
    const checkwinner=()=>{
        for(let i=0;i<winnerpos.length;i++)
            {
            let pos1=winnerpos[i][0];
            let pos2=winnerpos[i][1];
            let pos3=winnerpos[i][2];
            if((btnarr[pos1].innerText===btnarr[pos2].innerText)&&(btnarr[pos2].innerText===btnarr[pos3].innerText)&&(btnarr[pos1].innerText!=""))
                {
                    console.log(`Congratulations,Winner is ${btnarr[pos1].innerText}`);
                    let win=document.querySelector(".winner");
                    win.innerHTML=`Congratulations,Winner is ${btnarr[pos1].innerText}!!`;
                    cnt=0;
                    disablebuttons();
                }
            }
    };
    const disablebuttons=()=>{
        for(let i=0;i<btnarr.length;i++)
            btnarr[i].disabled=true;
     }
     const enablebuttons=()=>{
        for(let i=0;i<btnarr.length;i++)
            btnarr[i].disabled=false;
     }
     const clear=()=>{
        for(let i=0;i<btnarr.length;i++)
            btnarr[i].innerText="";
     }
     resetgame.addEventListener("click",()=>{
            enablebuttons();
            clear();
            let win=document.querySelector(".winner");
            win.innerHTML="";
            turn0=true;
            cnt=0;
      });