function moyenne(tab) {
  if ((tab.length = 0)) {
    return 0;
  }
  let somme = 0;
  let i;
  for (i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return (somme /= tab.length);
}
tab[(16, 3.2, 2.3, 6, 5, 0.1, 19)];
console.log(moyenne(tab));

function max(tab) {
  let max;
  let i;
  for (i = 0; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
    return max;
  }
}
tab[(16, 3.2, 2.3, 6, 5, 0.1, 19)];
console.log(max(tab));
