var select = document.getElementsByTagName('p');
const v = 10;

/* window.alert(select.length); */
/* window.alert(select[2].innerHTML); */
/* select[0].innerHTML = 'Manipulado via JS'; */

/* for (var i=0; i<select.length; i++){
    select[i].innerHTML = `Manipulado via JS - ${i}`;
} */

for (var i=0; i<v; i++){
    select[0].innerHTML = select[0].innerHTML + ' algo';
}