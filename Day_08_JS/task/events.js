let counter=1,imgCount=8,slideFlag=0,interval=0;

window.addEventListener("load",function()
    {
        let img=document.images[0];
        let nextButton=document.querySelector("button[name='next']");
        nextButton.onclick=function()
        {
            counter=(counter+1)%imgCount;
            if(counter<=0)
            {
                counter=1;
            }
            img.src=`./../demoes/Images/${counter}.jpg`;
        }
/******************************************************************************* */
        let prevButton=document.querySelector("button[name='previous']");
        prevButton.onclick=function()
        {
            counter--;
            if(counter<=0)
            {
                counter=1;
            }
            img.src=`./../demoes/Images/${counter}.jpg`;
        }
/********************************************************************************* */
        let slideButton=document.querySelector("button[name='slide']");
        slideButton.onclick=function()
        {
            slideFlag++;
            if(slideFlag>1)
            {
                slideFlag=1;
                return;
            }
            interval=setInterval(() => {
                counter=(counter+1)%imgCount;
                if(counter<=0)
                {
                    counter=1;
                }
                img.src=`./../demoes/Images/${counter}.jpg`;
                console.log(counter);
            }, 1000);
        }
/********************************************************************************** */
        let stopButton=document.querySelector("button[name='stop']");
        stopButton.onclick=function()
        {
            if(slideFlag==1)
            {
                clearInterval(interval);
                slideFlag=0;
            }
            else
            {
                alert("There's no slide running");
            }
        }
    });