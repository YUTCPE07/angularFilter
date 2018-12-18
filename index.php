<?php 
function url(){
  return sprintf(
    "%s://%s%s",
    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
    $_SERVER['SERVER_NAME'],
    $_SERVER['REQUEST_URI']
  );
}

// echo url();
 ?>

<!doctype html>
<html lang="en">
<head>
  	<meta charset="utf-8">
  	<meta name="fragment" content="!">
  	<title>Angular filter</title>
  	<base href="<?php echo url() ?>">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="icon" type="image/png" href="favicon.png">

  	<link rel="stylesheet" href="<?php echo url() ?>pluging/bootstarp/bootstarp.min.css">
  	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  	<!-- <link rel="stylesheet" href="<?php //echo url() ?>pluging/jquery-nice-select/css/nice-select.css"> -->


  	<link rel="stylesheet" href="<?php echo url() ?>pluging/pretty-dropdown/dist/css/prettydropdowns.css">


  	<link rel="stylesheet" href="<?php echo url() ?>pluging/myCustom/varible.css">
  	<link rel="stylesheet" href="<?php echo url() ?>pluging/myCustom/prettydropdownsCustom.css">
  	<link rel="stylesheet" href="<?php echo url() ?>app/app.css">



    <script src="<?php echo url() ?>pluging/jquery/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>
  	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular-animate.min.js"></script> -->
  	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular-touch.min.js"></script> -->
  	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js"></script> -->
  	<script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>
  	<script src="//cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.4/angular-filter.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>


    <!-- <script src="<?php //echo url() ?>pluging/jquery-nice-select/js/jquery.nice-select.js"></script> -->
    <script src="<?php echo url() ?>pluging/pretty-dropdown/dist/js/jquery.prettydropdowns.js"></script>


    <script src="<?php echo url() ?>app/app.js"></script>
    <script src="<?php echo url() ?>app/controller/indexController.js"></script>

</head>
<body ng-app="app" ng-controller="indexController">


	<div class="container">
		<div>menu</div>
		<div class="d-flex justify-content-around" ng-init="checks = dataTypes" >
			<div ng-repeat="(key, value) in checks | groupBy:'pick'">
				<div class="bg-{{key}}" ng-click="selectCheckbox(key)">
					<div class="d-flex">
						<div><i name="checkBoxIs{{key}}" class="far fa-circle fa-fw"></i></div>	
						<div>{{key}}</div>	
					</div>
				</div>
			</div>
		</div>
	</div><hr>
	
	<div class="container">
		<div>ORDER BY</div>
		<select ng-model="selectDropDrowns" ng-options="item.name for item in dropDrowns" class=""></select>
		<hr>

		<select ng-model="selectDropDrowns" ng-options="item.name for item in dropDrowns" class="prettyDropdown"></select>
		<hr>
		
		<!-- <div class="d-flex">
	      	<select>
		        <option value="1">Some option</option>
		        <option value="2">Another option</option>
		        <option value="3">A disabled option</option>
		        <option value="4">Potato</option>
		     </select>
	    </div> -->
	  	<!-- <select ng-model="model.id" drop-drown class="decorated btn btn-primary">
		  	<option value="seq">เรียงตามลำดับ</option>
		  	<option value="-age">อายุมากไปน้อย</option>
		  	<option value="age">อายุน้อยไปมาก</option>
		  	<option value="first">เรียงตามชื่อ</option>
		</select> -->
		<!-- {{ model }} -->
		<!-- <div class="d-flex justify-content-around" ng-init="initSelectOrderBy()">
			<button class="btn btn-danger" ng-click="selectOderBy('-age')" ng-if="showBtnMoreToLessAge">AGE</button>
			<button class="btn btn-danger" ng-click="selectOderBy('age')" ng-if="!showBtnMoreToLessAge">AGE</button>
			<button class="btn btn-warning" ng-click="selectOderBy('-seq')" ng-if="showBtnMoreToLessAge">SEQ</button>
			<button class="btn btn-warning" ng-click="selectOderBy('seq')" ng-if="!showBtnMoreToLessAge">SEQ</button>
		</div> -->
	</div><hr>
	<!-- {{dropDrowns.value}} -->
	
  	
	<div class="container my-5" ng-init="items = data" >
		<div ng-repeat="item in items | filterMultiple:{pick:checkBoxCatagoryArr} | orderBy:selectDropDrowns.value ">
			<div class="row">
				<div class="col-2">{{item.seq}}</div>
				<div class="col-2">{{item.first}}</div>
				<div class="col-2">{{item.city}}</div>
				<div class="col-2">{{item.pick}}</div>
				<div class="col-2">{{item.age}}</div>
				<div class="col-2">{{item.dollar}}</div>
			</div>
		</div>
	</div>

</body>

<script type="text/javascript">
	$(document).ready(function() {
	  	$('select.prettyDropdown').prettyDropdown();
	});
	// $(document).ready(function() {
	//   	$("select[calss='niceSelect']").niceSelect();
	// });

	
</script>
</html>