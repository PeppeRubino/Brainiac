import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = document.getElementById("loader");
//Loader layout
function hideLoader() {
  loader.style.display = 'none';
}

function showLoader() {
  loader.style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', function () {
// Canvas Div References
const containerModel = document.getElementById('containerModel');
  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0xdddddd);
  document.body.appendChild(renderer.domElement);
  // Canvas Div References
  const canvasContainer = document.createElement('div');
  canvasContainer.id = 'canvas-container';
  canvasContainer.appendChild(renderer.domElement);
  containerModel.appendChild(canvasContainer);
  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  window.addEventListener('resize', onWindowResize);
  // Camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 10000);
  camera.position.set(0, 20, 70);
  // Window resize event handler
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  // Orbit Controls
  const orbit = new OrbitControls(camera, renderer.domElement);
  // Axes Helper
  const axesHelper = new THREE.AxesHelper(50);
  scene.add(axesHelper);

  orbit.update();
  // Ambient Light
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);
  // Directional Light
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  directionalLight.position.copy(camera.position);

  // Light Target
  const lightTarget = new THREE.Object3D();
  scene.add(lightTarget);
  directionalLight.target = lightTarget;
  // Group of Objects
  const group = new THREE.Group();
  scene.add(group);
  // Add event listeners for left and right arrow buttons
  const sxArrow = document.getElementById('sx_arrow');
  const rxArrow = document.getElementById('rx_arrow');
  rxArrow.onclick = function () {
    console.log(currentScreen);
    console.log(current);
    console.log(currentModel);
  };
  const arrows = {
    sxArrow: sxArrow,
    rxArrow: rxArrow
  };
  sxArrow.onclick = cleanLayout;
  rxArrow.onclick = cleanLayout;

  sxArrow.addEventListener('click', function () {
    changeMenuAndTitle('left');
  });
  rxArrow.addEventListener('click', function () {
    changeMenuAndTitle('right');
  });
// Define menu and title elements
const menuLobes1 = document.getElementById('menuLobes1');
const menuLobes2 = document.getElementById('menuLobes2');
const menuLobes3 = document.getElementById('menuLobes3');
const menuSection = document.getElementById('menuSection');
const menuaNumb = document.getElementById('menuaNumb');
const lobesTitle = document.getElementById('lobesTitle');
const sectionPlaneTitle = document.getElementById('sectionPlaneTitle');
const aNumbTitle = document.getElementById('aNumbTitle');
 // Set initial variables
  let current = 1;
  let currentScreen = 'menuLobes';
  let isMenuOpen = false;
  let varToggleMenu = document.getElementById('toggleMenu');
  let imgToggleMenu = document.getElementById('imgToggleMenu');

  menuLobes1.style.display = 'none';
  menuLobes2.style.display = 'none';
  menuLobes3.style.display = 'none';
  menuSection.style.display = 'none';
  menuaNumb.style.display = 'none';
  lobesTitle.style.display = 'none';
  sectionPlaneTitle.style.display = 'none';
  aNumbTitle.style.display = 'none';

  // Function to toggle the menu open/close
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      imgToggleMenu.style.transform = 'scale(0.1) rotate(180deg)';

      // Show the current menu and title
      if (current === 1) {
        if (currentModel === 1) {
          menuLobes1.style.display = 'block';
          menuLobes2.style.display = 'none';
          menuLobes3.style.display = 'none';
          lobesTitle.style.display = 'block';
        } else if (currentModel === 2) {
          menuLobes1.style.display = 'none';
          menuLobes2.style.display = 'block';
          menuLobes3.style.display = 'none';
          lobesTitle.style.display = 'block';
        } else if (currentModel === 3) {
          menuLobes1.style.display = 'none';
          menuLobes2.style.display = 'none';
          menuLobes3.style.display = 'block';
          lobesTitle.style.display = 'block';
        }
        menuSection.style.display = 'none';
        sectionPlaneTitle.style.display = 'none';
        menuaNumb.style.display = 'none';
        aNumbTitle.style.display = 'none';
      } else if (current === 2) {
        menuLobes1.style.display = 'none';
        menuLobes2.style.display = 'none';
        menuLobes3.style.display = 'none';
        lobesTitle.style.display = 'none';
        menuSection.style.display = 'block';
        sectionPlaneTitle.style.display = 'block';
        menuaNumb.style.display = 'none';
        aNumbTitle.style.display = 'none';
      } else if (current === 3) {
        menuLobes1.style.display = 'none';
        menuLobes2.style.display = 'none';
        menuLobes3.style.display = 'none';
        lobesTitle.style.display = 'none';
        menuSection.style.display = 'none';
        sectionPlaneTitle.style.display = 'none';
        menuaNumb.style.display = 'block';
        aNumbTitle.style.display = 'block';
      }
    } else {
      // Hide all menus and titles
      imgToggleMenu.style.transform = 'scale(0.1) rotate(0deg)';
      menuLobes1.style.display = 'none';
      menuLobes2.style.display = 'none';
      menuLobes3.style.display = 'none';
      menuSection.style.display = 'none';
      menuaNumb.style.display = 'none';
      lobesTitle.style.display = 'none';
      sectionPlaneTitle.style.display = 'none';
      aNumbTitle.style.display = 'none';
    }
  };

  // Event listener for the toggle menu element
  varToggleMenu.addEventListener('click', toggleMenu);


  // Change menu and title based on direction
  function changeMenuAndTitle(direction) {
  // Update current value based on direction
    if (direction === 'left') {
      current = current === 1 ? 3 : current - 1;
    } else if (direction === 'right') {
      current = current === 3 ? 1 : current + 1;
    }
   // Update currentScreen based on current menu
    if (current === 3) {
      currentScreen = 'menuLobes';
    } else if (current === 1) {
      currentScreen = 'menuSection';
    } else if (current === 2) {
      currentScreen = 'menuaNumb';
    }
   // Hide all menus and titles
    menuLobes1.style.display = 'none';
    menuLobes2.style.display = 'none';
    menuLobes3.style.display = 'none';
    lobesTitle.style.display = 'none';
    menuSection.style.display = 'none';
    sectionPlaneTitle.style.display = 'none';
    menuaNumb.style.display = 'none';
    aNumbTitle.style.display = 'none';
   // Show the corresponding menu and title based on the new position
    if (current === 1) {
      if (currentModel === 1) {
        menuLobes1.style.display = 'block';
      } else if (currentModel === 2) {
        menuLobes2.style.display = 'block';
      } else if (currentModel === 3) {
        menuLobes3.style.display = 'block';
      }
      lobesTitle.style.display = 'block';
    } else if (current === 2) {
      menuSection.style.display = 'block';
      sectionPlaneTitle.style.display = 'block';
    } else if (current === 3) {
      menuaNumb.style.display = 'block';
      aNumbTitle.style.display = 'block';
    }
  }
 // Section Planes Array
  const sectionPlanes = [
    { name: 'sagittale', position: new THREE.Vector3(0, 2, 0), rotation: new THREE.Euler(0, -Math.PI / 2, 0) },
    { name: 'orizzontale', position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(Math.PI / 2, 0, 0) },
    { name: 'verticale', position: new THREE.Vector3(0, 2, 0), rotation: new THREE.Euler(0, 0, 0) },
    { name: 'trasversale', position: new THREE.Vector3(0, 2, 0), rotation: new THREE.Euler(-Math.PI / 4, 0, 0) }
  ];
  // Create a group to hold the sections
  const sectionGroup = new THREE.Group();
  scene.add(sectionGroup);
  let activeSection = null; // Variable to store the active section
  let currentSectionObject = null; // Global variable to store the current section object
  let sectionName = '';
 // Show Sections Function
  function showSections(sectionName) {
    // Check if the selected section is already active
    if (activeSection && activeSection.name === sectionName) {
      // Hide the active section if it's already active
      activeSection.visible = false;
      group.remove(activeSection);
      activeSection = null;
      currentSectionObject = null; // Reset the current section object
      return;
    }
    // Retrieve the reference section from the array by name
    const section = sectionPlanes.find(section => section.name === sectionName);
    // Check if the section already exists in the group
    let sectionObject = sectionGroup.getObjectByName(sectionName);
    // If the section object doesn't exist, create it
    if (!sectionObject) {
      // Create the plane for the reference section
      const planeGeometry = new THREE.PlaneGeometry(30, 30);
      const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaafff3, side: THREE.DoubleSide });
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      planeMesh.receiveShadow = true;
      // Create a group object for the reference section
      sectionObject = new THREE.Group();
      sectionObject.name = section.name;
      sectionObject.position.copy(section.position);
      sectionObject.rotation.copy(section.rotation);
      sectionObject.add(planeMesh);
      // Add the reference section to the section group
      sectionGroup.add(sectionObject);
    }
    // Hide the active section if it exists
    if (activeSection) {
      activeSection.visible = false;
      group.remove(activeSection);
    }
    // Show the selected section
    sectionObject.visible = true;
    activeSection = sectionObject;
    group.add(sectionObject);

    // Update the current section object
    currentSectionObject = sectionObject;
  }
 // Use the showSections function
  showSections(sectionName);
  // Add event listeners for section buttons
  const sagittaleBtn = document.getElementById('sagittale');
  const orizzontaleBtn = document.getElementById('orizzontale');
  const verticaleBtn = document.getElementById('verticale');
  const trasversaleBtn = document.getElementById('trasversale');
  sagittaleBtn.addEventListener('click', function () {
    showSections('sagittale');
  });
  orizzontaleBtn.addEventListener('click', function () {
    showSections('orizzontale');
  });
  verticaleBtn.addEventListener('click', function () {
    showSections('verticale');
  });
  trasversaleBtn.addEventListener('click', function () {
    showSections('trasversale');
  });
  // Model
  const brain1Url = new URL('../media/img/Brain1.glb', import.meta.url);
  const brain2Url = new URL('../media/img/Brain2.glb', import.meta.url);
  const brain3Url = new URL('../media/img/Brain3.glb', import.meta.url);

  let model;
  let currentModel = 1;
  const partIds = {};
  const partObjects = {};
  const modelMeshes = [];
  const originalMaterial = new THREE.MeshStandardMaterial({ color: 0xdecfd7 });
  const assetLoader = new GLTFLoader();
  assetLoader.responseType = 'arraybuffer';

  function loadModel(modelUrl) {
    showLoader();
    assetLoader.load(modelUrl.href, function (gltf) {
      if (model) {
        scene.remove(model);
        group.remove(model);
      }

      model = gltf.scene;
      model.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.material = originalMaterial;
          const partId = child.uuid;
          child.userData.partId = partId;
          partIds[partId] = partId;
          partObjects[partId] = child;
          modelMeshes.push(child);
        }
      });
      model.castShadow = true;
      // Imposta posizioni e scale per ogni modello
      if (currentModel === 1) {
        model.position.set(0, 0, -10);
        model.scale.set(0.7, 0.7, 0.7);
        model.rotation.y = -Math.PI / 2;
      } else if (currentModel === 2) {
        model.position.set(0, -35, 1);
        model.scale.set(140, 140, 140);

      } else if (currentModel === 3) {
        model.position.set(0, -33, 3);
        model.scale.set(150, 150, 150);
      }

      scene.add(model);
      group.add(model);
      hideLoader();
    });
  }
  loadModel(brain1Url);
  loader.style.opacity = '0.99';
  changeMenuAndTitle();

  const changeModelBtn = document.getElementById('changeModel');
  changeModelBtn.addEventListener('click', changeModel);
  changeModelBtn.addEventListener('click', changeMenuAndTitle);

  function changeModel() {
    let newModelUrl;

    if (currentModel === 1) {
      currentModel = 2;
      newModelUrl = brain2Url;
    } else if (currentModel === 2) {
      currentModel = 3;
      newModelUrl = brain3Url;
    } else {
      currentModel = 1;
      newModelUrl = brain1Url;
    }

    loadModel(newModelUrl);
  }



  // Point References
  function controllaInput() {
    scene.remove(points)
    var input = document.getElementById('numberBroadmann').value;
    var error = document.getElementById('error');

    if (input === '' || isNaN(input) || parseInt(input) > 52) {
      error.classList.remove('hidden');
      error.classList.add('block');
    } else {
      error.classList.add('hidden');
      // Aggiungi qui il codice per gestire l'animazione associata al numero inserito
    }
  }

  document.getElementById('sendNumb').addEventListener('click', controllaInput);

  // Array delle posizioni dei punti 3D (aggiungi le posizioni desiderate)
  const pointPositions = [
    [6, 10, 1.5],    // 1
    [7, 9, 1.7],    // 2
    [5, 11, 1.2],    // 3
    [5, 11, 3.5],    // 4
    [3, 12, -0.8],     // 5
    [5, 11, 4],   // 6
    [5, 10.5, -1.5],   // 7
    [3, 12, 6],    // 8
    [2, 11, 11],     // 9
    [1.3, 7, 14],  // 10
    [1.7, 3, 14],    // 11
    [1.3, 3, 11],    // 12
    [0, 0, 0],    // Posizione del punto 13
    [0, 0, 0],    // Posizione del punto 14
    [0, 0, 0],   // Posizione del punto 15
    [0, 0, 0],   // Posizione del punto 16
    [2.2, -1, -10],   // 17
    [2.2, 3, -10],    // 18
    [2.2, 6, -9],   // 19
    [9, 0, 4],    // 20
    [10, 1, 2],   // 21
    [10, 2, 4],   // 22
    [1, 6, -2.2],   // 23
    [1.7, 5, 6],    // 24
    [0, 0, 0],    // Posizione del punto 25
    [1, 4.7, -3.2],   // 26
    [1, 3.8, -2.6],   // 27
    [1, 3.5, -2],     // 28
    [0, 0, 0],  // Posizione del punto 29
    [1, 4.5, -3.5], // 30
    [1, 7, -2.4],    // 31
    [1.3, 4.5, 10],   // 32
    [0, 0, 0],   // Posizione del punto 33
    [1, 4, -2.6],   // 34
    [1, 3.6, -2.6],    // 35
    [1, 3, -2],     // 36
    [10, 2, -3],    // 37
    [8, 2, 8],   // 38
    [10, 4, -2.2],  // 39
    [10, 5.4, -1.2],  // 40
    [10, 3.3, 1],  // 41
    [10, 3.8, 1.3], // 42
    [10, 4.6, -1.2],// 43
    [8, 5.6, 10],  // 44
    [7, 5, 12],    // 45
    [5, 6.5, 12],  // 46
    [7, 3, 12],    // 47
    [0, 0, 0],   // Posizione del punto 48
    [0, 0, 0],    // Posizione del punto 49
    [0, 0, 0],    // Posizione del punto 50
    [0, 0, 0],   // Posizione del punto 51
    [9, 3, 7],     // 52
  ];


  // Array dei punti 3D
  const points = [];
  const pointGroup = new THREE.Group(); // Gruppo per i punti 3D
  scene.add(pointGroup);
  // Aggiungi 52 punti con posizioni precise
  for (let i = 0; i < 52; i++) {
    const point = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    const position = pointPositions[i];

    point.position.set(position[0], position[1], position[2]);
    point.visible = false; // Nascondi tutti i punti all'inizio
    pointGroup.add(point);
    points.push(point);
  }

  // Funzione per gestire l'input numerico
  function controllaInput() {
    const input = document.getElementById('numberBroadmann').value;
    const error = document.getElementById('error');

    if (input === '' || isNaN(input) || parseInt(input) > 52) {
      error.classList.remove('hidden')
      error.classList.add('block')
    } else {
      error.classList.add('hidden')

      // Rimuovi il puntino corrente dal pointGroup
      pointGroup.remove(...pointGroup.children);

      const selectedNumber = parseInt(input);
      const pointIndex = selectedNumber - 1;

      // Mostra il puntino corrispondente al numero selezionato
      if (selectedNumber >= 1 && selectedNumber <= 52) {
        const point = points[pointIndex];
        point.visible = true;
        pointGroup.add(point);
        group.add(pointGroup);
      }
    }
  }

  document.getElementById('sendNumb').addEventListener('click', controllaInput);

  // Animation
  toggleMenu();
  let isMouseOverModel = false;
  let animationPaused = false;
  let pause = document.getElementById('pause');
  let play = document.getElementById('play');
  function animation() {
    if (!animationPaused) {
      if (model && !isMouseOverModel) {
        directionalLight.position.copy(camera.position);
        lightTarget.position.copy(camera.position);
        lightTarget.position.add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(100));
        scene.add(directionalLight);
        group.rotation.y -= 0.01;
      }
      renderer.render(scene, camera);
    }
  }
  function stopAnimation() {
    isMouseOverModel = true;
    group.rotation.y -= 0.00;
    pause.classList.add('hidden');
    play.classList.remove('hidden');
  }
  pause.addEventListener('click', stopAnimation);
  function resumeAnimation() {
    isMouseOverModel = false;
    group.rotation.y -= 0.01;
    pause.classList.remove('hidden');
    play.classList.add('hidden');
  }
  play.addEventListener('click', resumeAnimation);
  // Color of Lobes
  function colorObjectById(id, color) {
    if (partObjects.hasOwnProperty(id)) {
      const object = partObjects[id];
      const tempMaterial = new THREE.MeshStandardMaterial({ color: color });
      object.material = tempMaterial;
      return { id: id, object: object };
    }
    return null;
  }
  function resetColor() {
    for (const id in partObjects) {
      const object = partObjects[id];
      object.material = originalMaterial;
    }
  }
  
  window.addEventListener('dblclick', resetColor);
  // Map between section names and corresponding part names
  const sectionToPartMap = {
    'frontale': 'frontal_01_-_Default_0',
    'parietale': 'pariet_01_-_Default_0',
    'temporale': 'temp_01_-_Default_0',
    'occipitale': 'occipit_01_-_Default_0',
    'cervelletto': 'cereb_01_-_Default_0',
    'tronco': 'stem_01_-_Default_0',
    'pineale': 'pitua_01_-_Default_0',
    'putamen': 'Putamen.r.002_Putamen.r.001',
    'nucleoCaudato': 'Caudate_nucleus.r.002_Caudate_nucleus.r.001',
    'talamo': 'Thalamus.r.001',
    'chiasmoOttico': 'Optical_chiasm.l.001',
    'capsulaInterna': 'Internal_capsule.r.002_Internal_capsule.r.001',
    'ippocampo': 'Hippocampus.r.002_Hippocampus.r.001',
    'amigdala': 'Amygdaloid_body.r.002_Amygdaloid_body.r.001',
    'corpoCalloso': 'Corpus_callosum',
    'ventricoloLaterale': 'Lateral_ventricle.r.001',
    'septalNuclei': 'Septal_nuclei',
    'collicoloSuperiore': 'Superior_colliculus.r.002_Superior_colliculus.r.001',
    'collicoloInferiore': 'Inferior_colliculus.r.002_Inferior_colliculus.r.001',
    'midolloAllungato': 'Medulla_oblongata.r.002_Medulla_oblongata.r.001',
    'ponteVarolio': 'Pons.r.002_Pons.r.001',
    'peduncoloSuperiore': 'Superior_cerebellar_peduncle.r.002_Superior_cerebellar_peduncle.r.001',
  };

  // Set event listeners for header sections
  const sections = document.querySelectorAll('.sectionMenu');
  sections.forEach(section => {
    section.addEventListener('click', () => {
      const sectionId = section.id;
      const partName = sectionToPartMap[sectionId];
      let color;

      switch (sectionId) {
        case 'frontale':
          color = 0xffff00;
          break;
        case 'parietale':
          color = 0x00ff00;
          break;
        case 'temporale':
          color = 0xff0000;
          break;
        case 'occipitale':
          color = 0x0000ff;
          break;
        case 'cervelletto':
          color = 0xFfa500;
          break;
        case 'tronco':
          color = 0xff00fb;
          break;
        case 'pineale':
          color = 0x54aedb;
          break;
        default:
          color = 0xff0000; // Rosso come fallback
          break;
      }

      colorObjectByName(partName, color);
    });
  });

  function colorObjectByName(partName, color) {
    console.log('Clicked Section:', partName);
    for (const id in partObjects) {
      const object = partObjects[id];
      if (object.userData.name === partName) {
        const tempMaterial = new THREE.MeshStandardMaterial({ color: color });
        object.material = tempMaterial;
      }
    }
  }

  // Raycaster
  const raycaster = new THREE.Raycaster();
  const mousePosition = new THREE.Vector2();

  renderer.domElement.addEventListener('click', function (e) {
    mousePosition.x = (e.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycast();
  });

  function raycast() {
    raycaster.setFromCamera(mousePosition, camera);
    raycaster.near = 0.1;
    raycaster.recursive = true; // Abilita l'intersezione ricorsiva

    scene.traverse(function (object) {
      if (object.isMesh) {
        object.renderOrder = 1; // Ordina gli oggetti per la profondità
      }
    });

    const intersects = raycaster.intersectObjects(modelMeshes, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      const partId = clickedObject.userData.partId;
      colorObjectById(partId, 0xff0000);
      console.log(clickedObject);
    }
  }


  let windowInfoBroadmann = document.getElementById('containerTexts');
  function cleanLayout() {
    if (currentScreen === 'menuLobes') {
      windowInfoBroadmann.classList.add('hidden');
      currentSectionObject.visible = false;
      pointGroup.remove(...pointGroup.children);
    }
    if (currentScreen === 'menuSections') {
      windowInfoBroadmann.classList.add('hidden');
      currentSectionObject.visible = true;
    }
    if (currentScreen === 'menuaNumb') {
      windowInfoBroadmann.classList.add('hidden');
      currentSectionObject.visible = false;
      pointGroup.remove(...pointGroup.children);
    }
  };
  renderer.setAnimationLoop(animation);
});