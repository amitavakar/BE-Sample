<?php
	//include('config.php');	
	//session_start();
?>
<!DOCTYPE html>
<html ng-app="myApp">

<head>
  <link rel="stylesheet" href="lib/css/bootstrap.min.css" />
  <script src="lib/js/angular.js"></script>
  <script src="lib/js/angular-sanitize.js"></script>
  <link rel="stylesheet" href="lib/css/angular-form-gen.min.css" />
  <script src="lib/js/angular-form-gen.min.js"></script> 
  <script src="lib/js/showdown.min.js"></script>
  <script src="lib/js/angular-markdown-text.min.js"></script>
  <link rel="stylesheet" href="css/style.css"/>
  <script src="form.js"></script>
</head>

<body>
<div ng-controller="MyController" class="container">

<form novalidate class="form-horizontal" name="previewForm" >

  <fieldset>

    <legend>
      <div class="row">
        <div class="col-sm-offset-3 col-sm-3">Example Form</div>
      </div>
    </legend>

    <!-- form generation starts here -->

    <div fg-form
         fg-form-data="myFormData"
         fg-schema="mySchema"> 
    </div>

    <!-- form generation ends here -->

  </fieldset>
    <!-- form status starts here -->
	<div class="form-group">
	  <label class="control-label col-sm-3">Form status</label>
	  <div class="col-sm-9">
		<div class="form-control-static">
		  <span ng-if="previewForm.$invalid" class="text-danger">Invalid <span class="glyphicon glyphicon-thumbs-down"></span></span>
		  <span ng-if="previewForm.$valid" class="text-success">Valid <span class="glyphicon glyphicon-thumbs-up"></span></span>
		</div>
	  </div>
	</div> 
	<!-- form status end here -->
	<!-- form button starts here -->
	<div class="col-sm-offset-2 col-sm-10">
	  <button class="btn btn-success right" type="button" ng-disabled="!previewForm.$valid" ng-click="formsubmit()" disabled="disabled">
	   Submit Form</button>
	  <button class="btn btn-danger right" type="button" ng-click="cancel()">Cancel</button>
	</div> 
	<!-- form button end here -->
	<pre>formdata={{myFormData | json}}</pre>
</form>
</div>
</body>

</html>
