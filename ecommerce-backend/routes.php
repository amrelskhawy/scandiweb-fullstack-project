<?php


$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
	'/api/products' => '/api/products.php',
];

if (array_key_exists($uri, $routes)) {
	require($routes[$uri]);
} else {
//	require('views/404.php');
	die();
}


