<?php
$Array = array();

for($i = 0; $i < 5; $i++){
  for($j = 0; $j < 10; $j++){
    $Array[$i][$j] = rand(0, 99);
  }
}

echo '<table cellpadding="5" cellspacing="0" border="1">';
for($i = 0; $i < 5; $i++){
  echo "<tr>";
    for($j = 0; $j < 10; $j++){
      echo "<td>".$Array[$i][$j]."</td>";
    }
  echo "</tr>";
}
echo "</table>";