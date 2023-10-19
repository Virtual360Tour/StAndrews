var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3520267508532342,
        "pitch": -0.0650679479261349,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 1.5087489819972575,
          "pitch": -0.0664664043158325,
          "rotation": 0,
          "target": "1-welcome-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-welcome-area",
      "name": "Welcome Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2660598584973037,
        "pitch": 0.017250460289268688,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 2.021875380864757,
          "pitch": -0.03104469306818558,
          "rotation": 4.71238898038469,
          "target": "2-corridor"
        },
        {
          "yaw": 2.973902147190941,
          "pitch": 0.04905713432630421,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6423818132500703,
        "pitch": -0.054095461322337,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -2.7050130673840798,
          "pitch": -0.05538873733866723,
          "rotation": 0.7853981633974483,
          "target": "5-balcony"
        },
        {
          "yaw": 1.8664247972090964,
          "pitch": 0.09398657529778731,
          "rotation": 0,
          "target": "3-sanctuary-a"
        },
        {
          "yaw": -0.8659557351677911,
          "pitch": -0.0015406233544013048,
          "rotation": 0,
          "target": "1-welcome-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sanctuary-a",
      "name": "Sanctuary A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.211337378629903,
        "pitch": -0.04920852654841035,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -2.3473465190819116,
          "pitch": 0.09542982630347296,
          "rotation": 0,
          "target": "4-sanctuary-b"
        },
        {
          "yaw": 0.8240020957939151,
          "pitch": 0.005102925093957822,
          "rotation": 0,
          "target": "2-corridor"
        },
        {
          "yaw": 0.7499423645957677,
          "pitch": -0.653226208592594,
          "rotation": 0,
          "target": "5-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sanctuary-b",
      "name": "Sanctuary B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7546724401025635,
        "pitch": 0.013303561280228138,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 0.917544856290224,
          "pitch": 0.008745161403348689,
          "rotation": 4.71238898038469,
          "target": "2-corridor"
        },
        {
          "yaw": 0.8434695489635367,
          "pitch": 0.1797963937730831,
          "rotation": 0,
          "target": "3-sanctuary-a"
        },
        {
          "yaw": 0.7126243988756631,
          "pitch": -0.2007995403072922,
          "rotation": 1.5707963267948966,
          "target": "5-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.12218453906729465,
        "pitch": 0.43835826638262,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 1.2706732549893687,
          "pitch": 0.34894984232711224,
          "rotation": 4.71238898038469,
          "target": "2-corridor"
        },
        {
          "yaw": -0.21257207903598108,
          "pitch": 0.9533946597457295,
          "rotation": 6.283185307179586,
          "target": "3-sanctuary-a"
        },
        {
          "yaw": -0.5817729588779734,
          "pitch": 0.35752426214760114,
          "rotation": 0,
          "target": "4-sanctuary-b"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "St Andrews URC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
