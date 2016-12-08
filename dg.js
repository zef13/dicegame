function getNum() {
  for (var i = 1; i <= 6; i++) {
    var roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('d' + i).innerHTML = '<img src="./' + roll + '.jpg"><br>';
  }
}
