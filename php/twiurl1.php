<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[1]\n";
?>