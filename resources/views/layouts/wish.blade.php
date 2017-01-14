<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Blow a Wish') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body ng-app="blowawish">

	
	@yield('content')


    <!-- Scripts -->
    <script src="{{url('/js/jquery-3.1.1.min.js')}}"></script>
	<script src="{{url('/js/angular.min.js')}}"></script>
	<script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
	<script src="{{url('/js/wish_angular.js')}}"></script>

		@yield('scripts')
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>