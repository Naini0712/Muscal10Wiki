<?php
$command="python twitter.py ";
exec($command,$output);
print "$output[4]\n";
?>