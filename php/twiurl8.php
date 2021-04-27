<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[8]\n";
?>