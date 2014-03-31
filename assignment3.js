(function ( mythree , $, undefined) {

	mythree.init = function(hook) {

		// Create a renderer
		var WIDTH = 500;
		var HEIGHT = 500;
		var renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(WIDTH, HEIGHT);
		hook.append(renderer.domElement);

		// Create a camera
		// Camera variables
		var VIEW_ANGLE = 65;	// 65 FOV is most 'natural' FOV
		var ASPECT = WIDTH / HEIGHT;
		var NEAR = 0.1;			// these elements are needed for cameras to
		var FAR = 10000;			// partition space correctly
		
		var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
		camera.position.z = 500;
		
		// Create a controls Object
		var controls = new THREE.TrackballControls( camera );
		controls.target.set( 0, 0, 0 )
		
		// Create a scene
		var scene = new THREE.Scene();
		scene.add(camera);
				
		// Create the board
		var x_board = 300;
		var y_board = 300;
		var z_board = 25;
		var texturetop = new THREE.ImageUtils.loadTexture( 'img/checkerboard.jpg' );
		var material = new THREE.MeshBasicMaterial( { map: texturetop } );
		var geometry = new THREE.CubeGeometry(x_board, y_board, z_board, 8, 8, 1);
		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		// Create the border of the board
		var x_border1 = 325;
		var y_border1 = 25;
		var z_border1 = 25;
		var textureborder = new THREE.ImageUtils.loadTexture( 'img/border.jpg' );
		var material1 = new THREE.MeshBasicMaterial( { map: textureborder } );
		var geometry1 = new THREE.CubeGeometry(x_border1, y_border1, z_border1);
		// Side 1
		var border1 = new THREE.Mesh(geometry1, material1);
		border1.position.set(12.5, 162.5, 0);
		scene.add(border1);
		// Side 2
		var border2 = border1.clone();
		border2.position.set(-12.5, -162.5, 0);
		scene.add(border2);
		// Side 3
		var x_border2 = 25;
		var y_border2 = 325;
		var z_border2 = 25;
		var geometry2 = new THREE.CubeGeometry(x_border2, y_border2, z_border2);
		var border3 = new THREE.Mesh(geometry2, material1);
		border3.position.set(-162.5,12.5,0);
		scene.add(border3);
		// Side 4
		var border4 = border3.clone();
		border4.position.set(162.5, -12.5, 0);
		scene.add(border4);
		// Backside
		var x_back = 300;
		var y_back = 300;
		var z_back = 1;
		var geometry3 = new THREE.CubeGeometry(x_back, y_back, z_back);
		var backside = new THREE.Mesh(geometry3, material1);
		backside.position.set(0, 0, -12.5);
		scene.add(backside);
		
		// Array that will contain all the black positions
		var blacksquares = [];
		// Array that will contain all the white positions
		var whitesquares = [];
		
		// I create the 64 board positions
		var position1 = new THREE.Vector3(-131.25, -131.25, 15);
		var position2 = new THREE.Vector3(-93.75, -131.25, 15);
		var position3 = new THREE.Vector3(-56.25, -131.25, 15);
		var position4 = new THREE.Vector3(-18.75, -131.25, 15);
		var position5 = new THREE.Vector3(18.75, -131.25, 15);
		var position6 = new THREE.Vector3(56.25, -131.25, 15);
		var position7 = new THREE.Vector3(93.75, -131.25, 15);
		var position8 = new THREE.Vector3(131.25, -131.25, 15);
		var position9 = new THREE.Vector3(-131.25, -93.75, 15);
		var position10 = new THREE.Vector3(-93.75, -93.75, 15);
		var position11 = new THREE.Vector3(-56.25, -93.75, 15);
		var position12 = new THREE.Vector3(-18.75, -93.75, 15);
		var position13 = new THREE.Vector3(18.75, -93.75, 15);
		var position14 = new THREE.Vector3(56.25, -93.75, 15);
		var position15 = new THREE.Vector3(93.75, -93.75, 15);
		var position16 = new THREE.Vector3(131.25, -93.75, 15);
		var position17 = new THREE.Vector3(-131.25, -56.25, 15);
		var position18 = new THREE.Vector3(-93.75, -56.25, 15);
		var position19 = new THREE.Vector3(-56.25, -56.25, 15);
		var position20 = new THREE.Vector3(-18.75, -56.25, 15);
		var position21 = new THREE.Vector3(18.75, -56.25, 15);
		var position22 = new THREE.Vector3(56.25, -56.25, 15);
		var position23 = new THREE.Vector3(93.75, -56.25, 15);
		var position24 = new THREE.Vector3(131.25, -56.25, 15);
		var position25 = new THREE.Vector3(-131.25, -18.75, 15);
		var position26 = new THREE.Vector3(-93.75, -18.75, 15);
		var position27 = new THREE.Vector3(-56.25, -18.75, 15);
		var position28 = new THREE.Vector3(-18.75, -18.75, 15);
		var position29 = new THREE.Vector3(18.75, -18.75, 15);
		var position30 = new THREE.Vector3(56.25, -18.75, 15);
		var position31 = new THREE.Vector3(93.75, -18.75, 15);
		var position32 = new THREE.Vector3(131.25, -18.75, 15);
		var position33 = new THREE.Vector3(-131.25, 18.75, 15);
		var position34 = new THREE.Vector3(-93.75, 18.75, 15);
		var position35 = new THREE.Vector3(-56.25, 18.75, 15);
		var position36 = new THREE.Vector3(-18.75, 18.75, 15);
		var position37 = new THREE.Vector3(18.75, 18.75, 15);
		var position38 = new THREE.Vector3(56.25, 18.75, 15);
		var position39 = new THREE.Vector3(93.75, 18.75, 15);
		var position40 = new THREE.Vector3(131.25, 18.75, 15);
		var position41 = new THREE.Vector3(-131.25, 56.25, 15);
		var position42 = new THREE.Vector3(-93.75, 56.25, 15);
		var position43 = new THREE.Vector3(-56.25, 56.25, 15);
		var position44 = new THREE.Vector3(-18.75, 56.25, 15);
		var position45 = new THREE.Vector3(18.75, 56.25, 15);
		var position46 = new THREE.Vector3(56.25, 56.25, 15);
		var position47 = new THREE.Vector3(93.75, 56.25, 15);
		var position48 = new THREE.Vector3(131.25, 56.25, 15);
		var position49 = new THREE.Vector3(-131.25, 93.75, 15);
		var position50 = new THREE.Vector3(-93.75, 93.75, 15);
		var position51 = new THREE.Vector3(-56.25, 93.75, 15);
		var position52 = new THREE.Vector3(-18.75, 93.75, 15);
		var position53 = new THREE.Vector3(18.75, 93.75, 15);
		var position54 = new THREE.Vector3(56.25, 93.75, 15);
		var position55 = new THREE.Vector3(93.75, 93.75, 15);
		var position56 = new THREE.Vector3(131.25, 93.75, 15);
		var position57 = new THREE.Vector3(-131.25, 131.25, 15);
		var position58 = new THREE.Vector3(-93.75, 131.25, 15);
		var position59 = new THREE.Vector3(-56.25, 131.25, 15);
		var position60 = new THREE.Vector3(-18.75, 131.25, 15);
		var position61 = new THREE.Vector3(18.75, 131.25, 15);
		var position62 = new THREE.Vector3(56.25, 131.25, 15);
		var position63 = new THREE.Vector3(93.75, 131.25, 15);
		var position64 = new THREE.Vector3(131.25, 131.25, 15);
		
		// Fill the arrays
		blacksquares.push(position1);
		blacksquares.push(position3);
		blacksquares.push(position5);
		blacksquares.push(position7);
		blacksquares.push(position10);
		blacksquares.push(position12);
		blacksquares.push(position14);
		blacksquares.push(position16);
		blacksquares.push(position17);
		blacksquares.push(position19);
		blacksquares.push(position21);
		blacksquares.push(position23);
		blacksquares.push(position26);
		blacksquares.push(position28);
		blacksquares.push(position30);
		blacksquares.push(position32);
		blacksquares.push(position33);
		blacksquares.push(position35);
		blacksquares.push(position37);
		blacksquares.push(position39);
		blacksquares.push(position42);
		blacksquares.push(position44);
		blacksquares.push(position46);
		blacksquares.push(position48);
		blacksquares.push(position49);
		blacksquares.push(position51);
		blacksquares.push(position53);
		blacksquares.push(position55);
		blacksquares.push(position58);
		blacksquares.push(position60);
		blacksquares.push(position62);
		blacksquares.push(position64);
		
		whitesquares.push(position2);
		whitesquares.push(position4);
		whitesquares.push(position6);
		whitesquares.push(position8);
		whitesquares.push(position9);
		whitesquares.push(position11);
		whitesquares.push(position13);
		whitesquares.push(position15);
		whitesquares.push(position18);
		whitesquares.push(position20);
		whitesquares.push(position22);
		whitesquares.push(position24);
		whitesquares.push(position25);
		whitesquares.push(position27);
		whitesquares.push(position29);
		whitesquares.push(position31);
		whitesquares.push(position34);
		whitesquares.push(position36);
		whitesquares.push(position38);
		whitesquares.push(position40);
		whitesquares.push(position41);
		whitesquares.push(position43);
		whitesquares.push(position45);
		whitesquares.push(position47);
		whitesquares.push(position50);
		whitesquares.push(position52);
		whitesquares.push(position54);
		whitesquares.push(position56);
		whitesquares.push(position57);
		whitesquares.push(position59);
		whitesquares.push(position61);
		whitesquares.push(position63);
		
		
		
		var pieces = [];
		// Create the pieces
		var blackpiece = new THREE.ImageUtils.loadTexture( 'img/black.jpg' );
		var whitepiece = new THREE.ImageUtils.loadTexture( 'img/white.jpg' );
		var blackMaterial = new THREE.MeshBasicMaterial({ map: blackpiece });
		var whiteMaterial = new THREE.MeshBasicMaterial({ map: whitepiece });
		loader = new THREE.JSONLoader();
		loader.load( "data/piece.json", function( geometry ) {
			for (var i=1; i<=24; i++){
				if (i<=12) {
					pieces[i] = new THREE.Mesh( geometry, whiteMaterial );
					pieces[i].scale.set( 30, 30, 30 );
					pieces[i].rotation.x = Math.PI / 2;
					pieces[i].rotation.y = Math.PI / 2;
				}
				else {
					pieces[i] = new THREE.Mesh( geometry, blackMaterial );
					pieces[i].scale.set( 30, 30, 30 );
					pieces[i].rotation.x = Math.PI / 2;
					pieces[i].rotation.y = Math.PI / 2;
				}
				
				switch (true) {
					case ((i>=1)&&(i<=12)):
						pieces[i].position = blacksquares[i-1];
						break;
					case ((i>=13)&&(i<=24)):
						pieces[i].position = blacksquares[8 + i - 1];
						break;
				}
				scene.add(pieces[i]);
			}
		});
		
		
		// Create a light
		var pointLight = new THREE.PointLight(0xFFFFFF);
		pointLight.position = new THREE.Vector3(-500, -500, 500);
		scene.add(pointLight);
		
		
		$("<button type='button' id='randomize'>Randomize!</button>").insertAfter($("#hook"));
		$("<button type='button' id='changeTheme'>Change theme!</button>").insertAfter($("#randomize"));
		
		var tween = [];
		
		$("#randomize").on("click", function (){
			shuffle(whitesquares);
			shuffle(blacksquares);
			for (var i=1; i<=24; i++) {
				pieces[i].position = ({ x: pieces[i].position.x, y: pieces[i].position.y, z: pieces[i].position.z });	// Added to solve a relative/absolute position problem of Tween.js
				if (i <= 12){
					tween[i] = new TWEEN.Tween(pieces[i].position)
						.to(blacksquares[i], 2000)
						.easing(TWEEN.Easing.Elastic.InOut);
				}
				else {
					tween[i] = new TWEEN.Tween(pieces[i].position)
						.to(whitesquares[i-12], 2000)
						.easing(TWEEN.Easing.Elastic.InOut);
				}
				tween[i].start();
			}
		});
		
		// Definitions of materials for the other theme
		var boardGame2 = new THREE.ImageUtils.loadTexture( 'img/board2.jpg' );
		var blue = new THREE.ImageUtils.loadTexture( 'img/blue.jpg' );
		var yellow = new THREE.ImageUtils.loadTexture( 'img/yellow.jpg' );
		var materialTheme2 = new THREE.MeshBasicMaterial( { map: boardGame2 } );
		var pieceBlue = new THREE.MeshBasicMaterial( { map: blue } );
		var pieceYellow = new THREE.MeshBasicMaterial( { map: yellow } );
		var themeflag = 0;
		$("#changeTheme").on("click", function (){
			if (themeflag == 0 ){
				cube.material = materialTheme2;
					for (var i=1; i<=24; i++) {
						if (i <= 12){
							pieces[i].material = pieceYellow;
						}
						else {
							pieces[i].material = pieceBlue;
						}
					}
				themeflag = 1;
			}
			else if (themeflag == 1 ){
				cube.material = material;
					for (var i=1; i<=24; i++) {
						if (i <= 12){
							pieces[i].material = whiteMaterial;
						}
						else {
							pieces[i].material = blackMaterial;
						}
					}
				themeflag = 0;
			}
		});
		
		
		// From StackOverflow: http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
		function shuffle(o){ 
			for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		};
		
		
		// Tell Three to render
		function renderLoop() {
			renderer.render(scene, camera);
			controls.update();
			TWEEN.update();
			window.requestAnimationFrame(renderLoop);
		}
		
		window.requestAnimationFrame(renderLoop);
			
	}
	
})(window.mythree = window.mythree || {} , jQuery)
