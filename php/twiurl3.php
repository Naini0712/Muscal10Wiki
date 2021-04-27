<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[3]\n";
?>