<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[9]\n";
?>