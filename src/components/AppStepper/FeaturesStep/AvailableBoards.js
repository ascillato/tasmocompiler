const availableBoards = [
  {
    name: 'esp8266',
    description: 'Generic ESP8266',
    default: true,
    show: true,
    platformio_entries: {},
    tooltip: 'stepFeaturesBoard8266Tooltip',
    include_features: [],
    exclude_features: [],
    defines: {},
  },
  {
    name: 'esp82664M',
    description: 'Wemos/NodeMCU',
    default: true,
    show: true,
    platformio_entries: {
      'board_build.ldscript': 'eagle.flash.4m2m.ld',
    },
    tooltip: 'stepFeaturesBoard82664MTooltip',
    include_features: ['ufilesys'],
    exclude_features: [],
    defines: {},
  },
  // zbbridge
  {
    name: 'zbbridge',
    description: 'SonOff Zigbee Bridge',
    default: false,
    show: true,
    platformio_entries: {
      'board_build.ldscript': 'eagle.flash.2m256.ld',
      'board_build.f_cpu': '160000000L',
    },
    tooltip: '',
    include_features: ['USE_ADC_VCC'],
    exclude_features: [],
    defines: {
      MODULE: 'SONOFF_ZB_BRIDGE',
      FALLBACK_MODULE: 'SONOFF_ZB_BRIDGE',
      SERIAL_LOG_LEVEL: 'LOG_LEVEL_NONE',
      USE_ARDUINO_OTA: false,
      UPGRADE_V8_MIN: true,
      USE_ZBBRIDGE_TLS: true,
      USE_ENHANCED_GUI_WIFI_SCAN: false,
      USE_ZIGBEE: true,
      USE_ZIGBEE_ZNP: false,
      USE_ZIGBEE_EZSP: true,
      USE_TCP_BRIDGE: true,
      USE_ZIGBEE_CHANNEL: 11,
      USE_ZIGBEE_COALESCE_ATTR_TIMER: 350,
    },
  },
  // esp32
  {
    name: 'esp32',
    description: 'Generic ESP32',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
    },
    tooltip: '',
    include_features: [],
    exclude_features: [],
    defines: {},
  },
  // esp32webcam
  {
    name: 'esp32webcam',
    description: 'ESP32 webcam',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'esp32cam',
      'board_build.f_cpu': '240000000L',
    },
    tooltip: '',
    include_features: ['ufilesys'],
    exclude_features: [],
    defines: { USE_WEBCAM: true },
  },
  // esp32odroid-go
  {
    name: 'esp32odroid-go',
    description: 'ESP32 odroid-go',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'odroid_esp32',
      'board_build.f_cpu': '240000000L',
      'board_build.partitions': 'esp32_partition_app1984k_spiffs12M.csv',
      build_flags:
        // eslint-disable-next-line
        '${common32.build_flags} -DBOARD_HAS_PSRAM -mfix-esp32-psram-cache-issue -lc-psram-workaround -lm-psram-workaround',
    },
    tooltip: '',
    include_features: ['displays', 'ufilesys', 'bluetooth', 'berry'],
    exclude_features: [],
    defines: {
      MODULE: 'ODROID_GO',
      FALLBACK_MODULE: 'ODROID_GO',
      USE_ODROID_GO: true,
      USE_ADC: true,
    },
  },
  // esp32m5
  {
    name: 'esp32m5',
    description: 'ESP32 M5Stack Core2',
    default: false,
    show: true,
    platformio_entries: {
      extends: 'env:tasmota32',
      board: 'odroid_esp32',
      'board_build.f_cpu': '240000000L',
      'board_build.partitions': 'esp32_partition_app1984k_spiffs12M.csv',
      build_flags:
        // eslint-disable-next-line
        '${common32.build_flags} -DDBOARD_HAS_PSRAM -mfix-esp32-psram-cache-issue -lc-psram-workaround -lm-psram-workaround',
    },
    tooltip: '',
    include_features: ['displays', 'ufilesys', 'berry'],
    exclude_features: [],
    defines: {
      MODULE: 'M5STACK_CORE2',
      FALLBACK_MODULE: 'M5STACK_CORE2',
      USE_M5STACK_CORE2: true,
      SAY_TIME: true, // this should be deleted in the future
      USE_SAY_TIME: true, // new changed name
      USE_WEBRADIO: true, // this should be deleted in the future
      USE_I2S_WEBRADIO: true, // new changed name
      USE_MPU6886: true,
      USE_BMA423: true,
      JPEG_PICTS: true,
      USE_FT5206: true,
      USE_TOUCH_BUTTONS: true,
      MAX_TOUCH_BUTTONS: 16,
      USE_SENDMAIL: true,
      USE_ESP32MAIL: true,
    },
  },
];

export default availableBoards;
