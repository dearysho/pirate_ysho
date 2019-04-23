<?php
    ob_start();
    session_start();
    unset($_SESSION['managerAcc']);
    header('location:backLogin.html');
?>