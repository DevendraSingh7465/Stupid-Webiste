var a = 0;
function ChangePosition(){
    const nobtn = document.querySelector('.no');
    var minleftrandompx = Math.ceil(0);
    var maxleftrandompx = Math.ceil(99);
    var mintoprandompx = Math.ceil(0);
    var maxtoprandompx = Math.ceil(99);

    var left = Math.floor(Math.random() * (maxleftrandompx - minleftrandompx + 1)) + minleftrandompx;
    var top = Math.floor(Math.random() * (maxtoprandompx - mintoprandompx + 1)) + mintoprandompx;

    nobtn.style.marginLeft = left+'px';
    nobtn.style.marginTop = top+'px';  
}

