<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[2]\n";
?>