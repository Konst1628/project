const task = +prompt('Сколько убито врагов?', '');
switch (task) {
    case 1:
        alert('Вам начислено 100 очков опыта');
        break;
    case 3:
        alert('Вам начислено 400 очков опыта');
        break;
    case 5:
        alert('Вам начислено 700 очков опыта');
    case 10:
        alert('Вам начислено 100 очков опыта');
        break;
    //default: alert('Начислено очков '+task*100+' опыта');
    default: alert(`Вам начислено ${task * 100} очков опыта`);

}