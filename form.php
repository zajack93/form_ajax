<?php

		$data["firstname"]=$_POST["fName"]; 
		$data["lastname"]=$_POST["lName"];
	

	//file_put_contents("filename.txt", $data["firstname"]." ".$data["lastname"]);

		$list = array();
		$list = $data;

		$file = fopen("names.csv","a+");

			foreach ($list as $line)
			  {
			  	fputcsv($file,explode(' ',$line));
			  }

		fclose($file);

		if(isset($data["firstname"]) && isset($data["lastname"])) 
		{
			echo'Witaj '.($data["firstname"])." ".($data["lastname"]);
		} 

	
?>