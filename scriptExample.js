function openProject(number){
    document.getElementById('proj-1--button').classList.remove('button-clicked');
    document.getElementById('proj-2--button').classList.remove('button-clicked');
    document.getElementById('proj-3--button').classList.remove('button-clicked');   
    document.getElementById('proj-1--display').classList.remove('proj-show');
    document.getElementById('proj-2--display').classList.remove('proj-show');
    document.getElementById('proj-3--display').classList.remove('proj-show');   

 

    document.getElementById('proj-' + number + '--button').classList.add('button-clicked');   
    document.getElementById('proj-' + number + '--display').classList.add('proj-show');   
    //  if(document.getElementById('proj-' + number + '--button').classList.contains('button-clicked')  ){
    //      window.open('/Project' + number + '.html');
    //      alert('dfg')
    //   }
}