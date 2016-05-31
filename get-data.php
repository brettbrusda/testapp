<?php
header("Content-type: text/json");

echo file_get_contents('http://10.111.5.56:15021/wcftest/Service1.svc/Getcyclecounts/4/40');
