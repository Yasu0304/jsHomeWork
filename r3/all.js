let renderer, scene, camera
class r3 {
    "metadata": {
        "version": 4.6,
        "type": "Object",
        "generator": "Object3D.toJSON"
    },
    "geometries": [
        {
            "uuid": "60924edc-6160-4ed6-87a2-444997d74d54",
            "type": "CapsuleGeometry",
            "radius": 1,
            "length": 1,
            "capSegments": 4,
            "radialSegments": 8
        },
        {
            "uuid": "d86adee7-aac5-4b74-9275-f45a52733187",
            "type": "CylinderGeometry",
            "radiusTop": 1,
            "radiusBottom": 1,
            "height": 1,
            "radialSegments": 32,
            "heightSegments": 1,
            "openEnded": false,
            "thetaStart": 0,
            "thetaLength": 6.283185307179586
        },
        {
            "uuid": "98dd3fe9-e46b-46ee-a9d2-1f1328de11e9",
            "type": "SphereGeometry",
            "radius": 1,
            "widthSegments": 32,
            "heightSegments": 16,
            "phiStart": 0,
            "phiLength": 6.283185307179586,
            "thetaStart": 0,
            "thetaLength": 3.141592653589793
        }],
    "materials": [
        {
            "uuid": "76933cdb-e174-4aa4-a9ca-f92b71e48ab6",
            "type": "MeshNormalMaterial",
            "blendColor": 0
        },
        {
            "uuid": "ff87da97-bc9b-4a5e-b29b-6e308c3764a8",
            "type": "MeshNormalMaterial",
            "blendColor": 0
        },
        {
            "uuid": "21fad351-566b-40f8-baa4-c3946b3d4ada",
            "type": "MeshNormalMaterial",
            "blendColor": 0
        },
        {
            "uuid": "e7de1fec-4816-4160-88a4-568837314074",
            "type": "MeshNormalMaterial",
            "blendColor": 0
        }],
    "object": {
        "uuid": "5eeeed9a-e948-4a67-81dd-cb3cf59a5021",
        "type": "Scene",
        "name": "r3",
        "layers": 1,
        "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        "up": [0, 1, 0],
        "children": [
            {
                "uuid": "d4418c37-2baa-42a6-ba88-64cc79dae357",
                "type": "Mesh",
                "name": "body",
                "layers": 1,
                "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.1008944594980897, 2.295990763166964, -0.48925776250096437, 1],
                "up": [0, 1, 0],
                "geometry": "60924edc-6160-4ed6-87a2-444997d74d54",
                "material": "76933cdb-e174-4aa4-a9ca-f92b71e48ab6"
            },
            {
                "uuid": "9336b549-c456-469a-bc0e-ebcd21b6ed46",
                "type": "Mesh",
                "name": "hand-l",
                "layers": 1,
                "matrix": [-0.02878084193854719, -0.03641612008954446, 0.35832661242934266, 0, 1.5328170964779417, -0.9645643112892912, 0.025089056934635593, 0, -0.08435693914838345, -0.13458606266021175, -0.020453311861417106, 0, 1.0714152525260132, 2.585479462096419, -0.518801344318224, 1],
                "up": [0, 1, 0],
                "geometry": "d86adee7-aac5-4b74-9275-f45a52733187",
                "material": "ff87da97-bc9b-4a5e-b29b-6e308c3764a8"
            },
            {
                "uuid": "f540213e-321d-459e-8960-e6c570dd84e3",
                "type": "Mesh",
                "name": "hand-r",
                "layers": 1,
                "matrix": [0.01988336663574822, -0.04194189309385271, 0.35832661242934266, 0, 1.5441193512620608, 0.9463656750569955, 0.025089056934635996, 0, 0.08324223248079463, -0.13527835073091277, -0.020453311861417106, 0, -1.2382482590604564, 2.585479462096419, -0.518801344318224, 1],
                "up": [0, 1, 0],
                "geometry": "d86adee7-aac5-4b74-9275-f45a52733187",
                "material": "21fad351-566b-40f8-baa4-c3946b3d4ada"
            },
            {
                "uuid": "785d5cca-38db-4bd4-936f-2ad76f98ab3b",
                "type": "Mesh",
                "name": "Sphere",
                "layers": 1,
                "matrix": [0.33734468605172263, 0, 0, 0, 0, 0.31563361375470766, 0, 0, 0, 0, 0.33194914388328334, 0, -0.0781757585087898, 0.39410517472953854, -0.5141855274063386, 1],
                "up": [0, 1, 0],
                "geometry": "98dd3fe9-e46b-46ee-a9d2-1f1328de11e9",
                "material": "e7de1fec-4816-4160-88a4-568837314074"
            }],
        "backgroundRotation": [0, 0, 0,
            "XYZ"],
        "environmentRotation": [0, 0, 0,
            "XYZ"]
    }
}

function creatR3() {
    const r3Obj = new r3()
    scene.add(r3Obj.r3)
}

function init() {
    scene = new THREE.Scene()

    // 相機設定與 OrbitControls
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.set(30, 30, 30)
    camera.lookAt(scene.position)

    // 三軸座標輔助
    let axes = new THREE.AxesHelper(20)
    scene.add(axes)

    // 渲染器設定
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 簡單的地板
    const planeGeometry = new THREE.PlaneGeometry(60, 60)
    const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    let plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(0, -7, 0)
    scene.add(plane)
    creatR3()
    // 簡單的 spotlight 照亮物體
    let spotLight = new THREE.SpotLight(0xffffff)
    spotLight.position.set(-10, 40, 30)
    scene.add(spotLight)
    // let spotHelper = new THREE.SpotLightHelper(spotLight)
    // scene.add(spotHelper)

    // 將渲染出來的畫面放到網頁上的 DOM
    document.body.appendChild(renderer.domElement)
}

function render() {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

init()
render()
