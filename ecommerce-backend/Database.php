<?php

class Database
{
	private $connection = null;
	// Connect to Database
	public function __construct($config, $username = 'root', $password = '')
	{
		$dsn = "mysql:". http_build_query($config, '', ';');

		$this->connection = new PDO($dsn, $username, $password, [
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		]);
	}

	public function query($sql, $params = []) {
		$stmt = $this->connection->prepare($sql);
		$stmt->execute($params);
		return $stmt->fetchAll();
	}

}