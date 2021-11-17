<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Tienda Online</title>
        <link rel="stylesheet" href="css/owl.carousel.min.css">
        <link rel="stylesheet" href="css/owl.theme.default.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/216ca488f9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body onload="refresh()">
        <?php
            require 'vendor/autoload.php';
            
            
            $uri = "mongodb://localhost";
            $client = new MongoDB\Client($uri);
        
            $collection = $client->test->test->find();
        ?>

        <h1>Bienvenidos a mi lista de hackeados</h1>
        <h3>Tarjetas</h3>
        <div class="container nt-5 nb-5">
            <div class="owl-carousel owl-theme">
                <?php
                    foreach($collection as $entry){
                        ?>
                        <a href="cat.php?key=<?php echo $entry['_id']->__toString()?>">
                            <div class='ml-2 mr-2'>
                                <div class='card' height='75%'>
                                    <div class='card-body'>
                                        <h5 class='card-title'><?php echo $entry['ip'] ?></h5>
                                        <p class="card-text"><?php echo $entry['so_type']?></p>
                                        <p class="card-text"><?php echo $entry['so_ver']?></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <?php
                    }
                ?>
            </div>
        </div>

        <script
            src="https://code.jquery.com/jquery-3.5.0.min.js"
            integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
            crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.mousewheel.min.js"></script>
    </body>
</html>