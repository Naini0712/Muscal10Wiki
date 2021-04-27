<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[5]\n";
?>