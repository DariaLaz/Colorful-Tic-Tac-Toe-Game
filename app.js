function onLoad(){
    let allCells = document.querySelectorAll('.cell')
    allCells.forEach(c => c.addEventListener('click', handleCellClick, {once: true}))
    let isRedsTurn = true;
    document.querySelector('#turn').textContent = `It is Red's turn`
    let restartBtn = document.querySelector('#restart');
    restartBtn.addEventListener('click',() => (location.reload()));
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],]
    function handleCellClick(e){
        let currentClass = isRedsTurn ? 'red' : 'blue';
        e.currentTarget.classList.add(currentClass);
        console.log(isWinner(currentClass))
        if(isWinner(currentClass)){
            document.querySelector('#winning').classList.add('show')
            document.querySelector('#message').textContent = `${isRedsTurn ? 'Red' : 'Blue'} Wins!`
        } else if(isDraw()){
            document.querySelector('#winning').classList.add('show')
            document.querySelector('#message').textContent = `There is not a winner!`
        }
    
        isRedsTurn = !isRedsTurn;
        document.querySelector('#turn').textContent = `It is ${isRedsTurn ? 'Red' : 'Blue'}'s turn`
    }
    function isWinner(currClass){
        return winningCombinations.some(combination => {
            return combination.every(i => {
                    return allCells[i].classList.contains(currClass)
                })
            });
    }
    function isDraw(){
        return [...allCells].every(x => x.classList.contains('red') || x.classList.contains('blue'))
    }
}





