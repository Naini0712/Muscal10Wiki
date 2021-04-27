<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[6]\n";
?>