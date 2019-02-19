var weight_table = ['deck','grog','grog','grog','grog','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild','wild',];

function random_table() {
  return weight_table[Math.floor(Math.random() * weight_table.length)];
}

function table_based_effect() {
  var chosen_table = random_table();
  if(chosen_table == 'deck') {
    return 'deck : ' + deck_of_many_things_table[Math.floor(Math.random() * deck_of_many_things_table.length)];
  }
  else if (chosen_table == 'grog') {
    return 'grog : ' + grog_of_substantial_whimsey_table[Math.floor(Math.random() * grog_of_substantial_whimsey_table.length)];
  }
  else if (chosen_table == 'wild' ) {
    return 'wild magic : ' + wild_magic_table[Math.floor(Math.random() * wild_magic_table.length)];
  }
}

$('document').ready(function() {
  $(".generate-button").click(function() {
    $('.description').html(table_based_effect());
  });
});