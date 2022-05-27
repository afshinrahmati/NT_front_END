import THREE from "./three.min";
var Colors = {
    red: 0xf25346,
    white: 0xd8d0d1,
    brown: 0x59332e,
    pink: 0xF5986E,
    brownDark: 0x23190f,
    blue: 0x609dc8
};

var matRed = new THREE.MeshPhongMaterial({
    color: Colors.red,
    shading: THREE.FlatShading
});
var matWhite = new THREE.MeshPhongMaterial({
    color: Colors.white,
    shading: THREE.FlatShading
});
var matBrown = new THREE.MeshPhongMaterial({
    color: Colors.brown,
    shading: THREE.FlatShading
});
var matBrownDark = new THREE.MeshPhongMaterial({
    color: Colors.brownDark,
    shading: THREE.FlatShading
});

var mousePos = { x: 0, y: 0 };

var sky, sea, airplane;

var hemisphereLight, shadowLight, ambientLight;

var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;

var Pilot = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = 'Pilot';
    this.angleHairs = 0;

    var bodyGeom = new THREE.BoxGeometry(15, 15, 15);
    var body = new THREE.Mesh(bodyGeom, matBrown);
    body.position.set(2, -12, 0);
    this.mesh.add(body);

    var faceGeom = new THREE.BoxGeometry(10, 10, 10);
    var faceMat = new THREE.MeshLambertMaterial({
        color: Colors.pink
    });
    var face = new THREE.Mesh(faceGeom, faceMat);
    this.mesh.add(face);

    var hairGeom = new THREE.BoxGeometry(4, 4, 4);
    var hairMat = new THREE.MeshLambertMaterial({
        color: Colors.brown
    });
    var hair = new THREE.Mesh(hairGeom, hairMat);
    hair.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2, 0));

    var hairs = new THREE.Object3D();
    this.hairsTop = new THREE.Object3D();

    for (var i = 0; i < 12; i++) {
        var h = hair.clone();
        var col = i % 3;
        var row = Math.floor(i / 3);
        var startPosZ = -4;
        var startPosX = -4;
        h.position.set(startPosX + row * 4, 0, startPosZ + col * 4);
        this.hairsTop.add(h);
    }
    hairs.add(this.hairsTop);

    var hairSideGeom = new THREE.BoxGeometry(12, 4, 2);
    hairSideGeom.applyMatrix(new THREE.Matrix4().makeTranslation(-6, 0, 0));
    var hairSideR = new THREE.Mesh(hairSideGeom, hairMat);
    var hairSideL = hairSideR.clone();
    hairSideR.position.set(8, -2, 6);
    hairSideL.position.set(8, -2, -6);
    hairs.add(hairSideR);
    hairs.add(hairSideL);

    var hairBackGeom = new THREE.BoxGeometry(2, 8, 10);
    var hairBack = new THREE.Mesh(hairBackGeom, hairMat);
    hairBack.position.set(-1, -4, 0);
    hairs.add(hairBack);
    hairs.position.set(-5, 5, 0);

    this.mesh.add(hairs);

    var glassGeom = new THREE.BoxGeometry(5, 5, 5);
    var glassMat = new THREE.MeshLambertMaterial({
        color: Colors.brown
    });
    var glassR = new THREE.Mesh(glassGeom, glassMat);
    glassR.position.set(6, 0, 3);
    var glassL = glassR.clone();
    glassL.position.set(6, 0, -3);

    var glassAGeom = new THREE.BoxGeometry(11, 1, 11);
    var glassA = new THREE.Mesh(glassGeom, glassMat);
    this.mesh.add(glassR);
    this.mesh.add(glassL);
    this.mesh.add(glassA);

    var earGeom = new THREE.BoxGeometry(2, 3, 2);
    var earR = new THREE.Mesh(earGeom, faceMat);
    earR.position.set(0, 0, 6);
    var earL = earR.clone();
    earL.position.set(0, 0, -6);

    this.mesh.add(earR);
    this.mesh.add(earL);
};

Pilot.prototype.updateHairs = function() {
    var hairs = this.hairsTop.children;
    var l = hairs.length;
    for (var i = 0; i < l; i++) {
        var h = hairs[i];
        h.scale.y = 0.75 + Math.cos(this.angleHairs + i / 3) * 0.25;
    }
    this.angleHairs += 0.16;
}

var AirPlane = function() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = 'airPlane';
    //cockpit
    var geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1);
    geomCockpit.vertices[4].y -= 10;
    geomCockpit.vertices[4].z += 20;
    geomCockpit.vertices[5].y -= 10;
    geomCockpit.vertices[5].z -= 20;
    geomCockpit.vertices[6].y += 30;
    geomCockpit.vertices[6].z += 20;
    geomCockpit.vertices[7].y += 30;
    geomCockpit.vertices[7].z -= 20;
    var cockpit = new THREE.Mesh(geomCockpit, matRed);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    //engine
    var geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1);
    var engine = new THREE.Mesh(geomEngine, matWhite);
    engine.position.x = 50;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);

    //tail
    var geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1);
    var tailPlane = new THREE.Mesh(geomTailPlane, matRed);
    tailPlane.position.set(-40, 25, 0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);

    //wings
    var geomSideWing = new THREE.BoxGeometry(30, 5, 120, 1, 1, 1);
    var sideWing = new THREE.Mesh(geomSideWing, matRed);
    sideWing.position.set(0, 15, 0);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;
    this.mesh.add(sideWing);

    //windshield
    var geomWindShield = new THREE.BoxGeometry(3, 15, 20, 1, 1, 1);
    var matWindShield = new THREE.MeshPhongMaterial({
        color: Colors.white,
        transparent: true,
        opacity: 0.3,
        shading: THREE.FlatShading
    });
    var windshield = new THREE.Mesh(geomWindShield, matWhite);
    windshield.position.set(5, 27, 0);
    windshield.castShadow = true;
    windshield.receiveShadow = true;
    this.mesh.add(windshield);

    //propeller
    var geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1);
    geomPropeller.vertices[4].y -= 5;
    geomPropeller.vertices[4].z += 5;
    geomPropeller.vertices[5].y -= 5;
    geomPropeller.vertices[5].z -= 5;
    geomPropeller.vertices[6].y += 5;
    geomPropeller.vertices[6].z += 5;
    geomPropeller.vertices[7].y += 5;
    geomPropeller.vertices[7].z -= 5;

    this.propeller = new THREE.Mesh(geomPropeller, matBrown);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    //blades
    var geomBlade = new THREE.BoxGeometry(1, 80, 10, 1, 1, 1);
    var blade1 = new THREE.Mesh(geomBlade, matBrownDark);
    blade1.position.set(8, 0, 0);
    blade1.castShadow = true;
    blade1.receiveShadow = true;

    var blade2 = blade1.clone();
    blade2.rotation.x = Math.PI / 2;
    blade2.castShadow = true;
    blade2.receiveShadow = true;

    this.propeller.add(blade1);
    this.propeller.add(blade2);
    this.propeller.position.set(60, 0, 0);
    this.mesh.add(this.propeller);

    //wheels
    var wheelProtecGeom = new THREE.BoxGeometry(30, 15, 10, 1, 1, 1);
    var wheelProtecR = new THREE.Mesh(wheelProtecGeom, matRed);
    wheelProtecR.position.set(25, -20, 25);
    this.mesh.add(wheelProtecR);

    var wheelProtecL = wheelProtecR.clone();
    wheelProtecL.position.z = -wheelProtecR.position.z;
    this.mesh.add(wheelProtecL);

    var wheelGeom = new THREE.BoxGeometry(24, 24, 4);
    var wheelR = new THREE.Mesh(wheelGeom, matBrownDark);
    wheelR.position.set(25, -28, 25);

    var wheelAxisGeom = new THREE.BoxGeometry(10, 10, 6);
    var wheelAxis = new THREE.Mesh(wheelAxisGeom, matBrown);
    wheelR.add(wheelAxis);
    this.mesh.add(wheelR);

    var wheelL = wheelR.clone();
    wheelL.position.z = -wheelR.position.z;
    this.mesh.add(wheelL);

    var wheelB = wheelR.clone();
    wheelB.scale.set(0.5, 0.5, 0.5);
    wheelB.position.set(-35, -5, 0);
    this.mesh.add(wheelB);

    var suspensionGeom = new THREE.BoxGeometry(4, 20, 4);
    suspensionGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 10, 0));
    var suspension = new THREE.Mesh(suspensionGeom, matRed);
    suspension.position.set(-35, -5, 0);
    suspension.rotation.z = -0.3;
    this.mesh.add(suspension);

    this.pilot = new Pilot();
    this.pilot.mesh.position.set(-10, 27, 0);
    this.mesh.add(this.pilot.mesh);

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
};

var Cloud = function() {
    this.mesh = new THREE.Object3D();
    var geom = new THREE.BoxGeometry(20, 20, 20);
    var mat = new THREE.MeshPhongMaterial({
        color: Colors.white
    });

    var nBlocs = 3 + Math.floor(Math.random() * 3);
    for (var i = 0; i < nBlocs; i++) {
        var m = new THREE.Mesh(geom, mat);

        var s = 0.1 + Math.random() * 0.9;

        m.position.x = i * 15;
        m.position.y = Math.random() * 10;
        m.position.z = -5 + Math.random() * 5;

        m.rotation.z = Math.random() * Math.PI * 2;
        m.rotation.y = Math.random() * Math.PI * 2;

        m.scale.set(s, s, s);
        m.castShadow = true;
        m.receiveShadow = true;

        this.mesh.add(m);
    }
};

var Sky = function() {
    this.mesh = new THREE.Object3D();
    this.nClouds = 20;
    var stepAngle = Math.PI * 2 / this.nClouds;

    for (var i = 0; i < this.nClouds; i++) {
        var c = new Cloud();
        var a = stepAngle * i;
        var h = 750 + Math.random() * 200;
        var s = 1 + Math.random() * 2;

        c.mesh.position.y = Math.sin(a) * h;
        c.mesh.position.x = Math.cos(a) * h;
        c.mesh.position.z = -400 - Math.random() * 300;

        c.mesh.rotation.z = a + Math.PI / 2;

        c.mesh.scale.set(s, s, s);

        this.mesh.add(c.mesh);
    }
};

var Sea = function() {
    var geom = new THREE.SphereGeometry(700, 50, 50);

    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    geom.mergeVertices();

    var l = geom.vertices.length;
    this.waves = [];

    for (var i = 0; i < l; i++) {
        var v = geom.vertices[i];
        this.waves.push({
            x: v.x,
            y: v.y,
            z: v.z,
            ang: Math.random() * Math.PI * 2,
            amp: 5 + Math.random() * 15,
            speed: 0.016 + Math.random() * 0.032
        });
    }

    var mat = new THREE.MeshLambertMaterial({
        color: Colors.blue,
        shading: THREE.FlatShading,
        transparent: true,
        opacity: 0.8
    });

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.receiveShadow = true;
};

Sea.prototype.moveWaves = function() {
    var verts = this.mesh.geometry.vertices;
    var l = verts.length;

    for (var i = 0; i < l; i++) {
        var v = verts[i];
        var vprops = this.waves[i];

        v.x = vprops.x + Math.cos(vprops.ang) * vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp;

        vprops.ang += vprops.speed;
    }

    this.mesh.geometry.verticesNeedUpdate = true;
    sea.mesh.rotation.z += 0.005;
}

function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + (pc * dt);
    return tv;
}

function createPlane() {
    airplane = new AirPlane();
    airplane.mesh.scale.set(0.25, 0.25, 0.25);
    airplane.mesh.position.y = -100;
    scene.add(airplane.mesh);
}

function updatePlane() {
    var targetX = normalize(mousePos.x, -1, 1, -100, 100);
    var targetY = normalize(mousePos.y, -1, 1, 25, 175);

    airplane.mesh.position.y += (targetY - airplane.mesh.position.y) * 0.1;

    airplane.mesh.rotation.x = (airplane.mesh.position.y - targetY) * 0.0064;
    airplane.mesh.rotation.z = (targetY - airplane.mesh.position.y) * 0.0128;
    airplane.propeller.rotation.x += 0.3;
}

function createSky() {
    sky = new Sky();
    sky.mesh.position.y = -600;
    sky.mesh.position.z = 400;
    scene.add(sky.mesh);
}

function createSea() {
    sea = new Sea();
    sea.mesh.position.y = -700;
    sea.mesh.position.z = -300;
    scene.add(sea.mesh);
}

function createLights() {
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);

    ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);

    shadowLight = new THREE.DirectionalLight(0xffffff, 0.9);

    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    scene.add(hemisphereLight);
    scene.add(ambientLight);
    scene.add(shadowLight);
}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function handleMouseMove(e) {
    var tx = -1 + (e.clientX / WIDTH) * 2;
    var ty = 1 - (e.clientY / HEIGHT) * 2;
    mousePos = { x: tx, y: ty };
}

function createScene() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xc9c9b0, 100, 950);

    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 65;
    nearPlane = 0.1;
    farPlane = 10000;

    camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
    );
    camera.position.x = 0;
    camera.position.y = 100;
    camera.position.z = 170;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;

    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', handleWindowResize, false);
}

function loop() {
    airplane.pilot.updateHairs();
    sea.moveWaves();
    sky.mesh.rotation.z += 0.005;
    updatePlane();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

function init() {
    createScene();
    createLights();
    createPlane();
    createSea();
    createSky();
    document.addEventListener('mousemove', handleMouseMove, false);
    loop();
}

window.addEventListener('load', init, false);

// for scroll