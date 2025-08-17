export const devices = [
  // room001
  {
    _id: "dev001",
    roomId: "room001",
    name: "Đèn trần",
    type: "light",
    status: "on",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T07:50:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-100" }
  },
  {
    _id: "dev002",
    roomId: "room001",
    name: "Quạt trần",
    type: "fan",
    status: "off",
    defaultState: "off",
    controlMode: "auto",
    lastUpdated: "2025-08-10T07:55:00.000Z",
    meta: { manufacturer: "ABC", model: "FAN-200" }
  },

  // room002
  {
    _id: "dev003",
    roomId: "room002",
    name: "Đèn bàn",
    type: "light",
    status: "off",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:00:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-101" }
  },
  {
    _id: "dev004",
    roomId: "room002",//
    name: "Máy lạnh",//
    type: "ac",//
    status: "on",
    defaultState: "on",
    controlMode: "auto",//
    lastUpdated: "2025-08-10T08:05:00.000Z",
    meta: { manufacturer: "CoolTech", model: "AC-300" }//
  },

  // room003
  {
    _id: "dev005",
    roomId: "room003",
    name: "Camera an ninh",
    type: "camera",
    status: "on",
    defaultState: "on",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:10:00.000Z",
    meta: { manufacturer: "SecureCam", model: "SC-500" }
  },
  {
    _id: "dev006",
    roomId: "room003",
    name: "Cảm biến chuyển động",
    type: "sensor",
    status: "off",
    defaultState: "off",
    controlMode: "auto",
    lastUpdated: "2025-08-10T08:15:00.000Z",
    meta: { manufacturer: "SenseIt", model: "SEN-900" }
  },

  // room004
  {
    _id: "dev007",
    roomId: "room004",
    name: "Đèn ngủ",
    type: "light",
    status: "off",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:20:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-102" }
  },
  {
    _id: "dev008",
    roomId: "room004",
    name: "Máy lọc không khí",
    type: "air-purifier",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T08:25:00.000Z",
    meta: { manufacturer: "PureAir", model: "PA-400" }
  },

  // room005
  {
    _id: "dev009",
    roomId: "room005",
    name: "Loa thông minh",
    type: "speaker",
    status: "on",
    defaultState: "on",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:30:00.000Z",
    meta: { manufacturer: "SoundX", model: "SP-700" }
  },
  {
    _id: "dev010",
    roomId: "room005",
    name: "TV",
    type: "tv",
    status: "off",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:35:00.000Z",
    meta: { manufacturer: "ViewMax", model: "TV-800" }
  },

  // room006
  {
    _id: "dev011",
    roomId: "room006",
    name: "Đèn LED RGB",
    type: "light",
    status: "on",
    defaultState: "on",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:40:00.000Z",
    meta: { manufacturer: "GlowTech", model: "RGB-1000" }
  },
  {
    _id: "dev012",
    roomId: "room006",
    name: "Máy hút ẩm",
    type: "dehumidifier",
    status: "off",
    defaultState: "off",
    controlMode: "auto",
    lastUpdated: "2025-08-10T08:45:00.000Z",
    meta: { manufacturer: "DryAir", model: "DH-200" }
  },

  // room007
  {
    _id: "dev013",
    roomId: "room007",
    name: "Cảm biến nhiệt độ",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T08:50:00.000Z",
    meta: { manufacturer: "SenseIt", model: "TEMP-100" }
  },
  {
    _id: "dev014",
    roomId: "room007",
    name: "Đèn hành lang",
    type: "light",
    status: "off",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T08:55:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-103" }
  },

  // room008
  {
    _id: "dev015",
    roomId: "room008",
    name: "Máy pha cà phê",
    type: "coffee-maker",
    status: "off",
    defaultState: "off",
    controlMode: "manual",
    lastUpdated: "2025-08-10T09:00:00.000Z",
    meta: { manufacturer: "BrewMaster", model: "CM-600" }
  },
  {
    _id: "dev016",
    roomId: "room008",
    name: "Đèn bếp",
    type: "light",
    status: "on",
    defaultState: "on",
    controlMode: "manual",
    lastUpdated: "2025-08-10T09:05:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-104" }
  },

  // room009
  {
    _id: "dev017",
    roomId: "room009",
    name: "Máy giặt",
    type: "washing-machine",
    status: "off",
    defaultState: "off",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:10:00.000Z",
    meta: { manufacturer: "WashPro", model: "WM-900" }
  },
  {
    _id: "dev018",
    roomId: "room009",
    name: "Đèn ban công",
    type: "light",
    status: "on",
    defaultState: "on",
    controlMode: "manual",
    lastUpdated: "2025-08-10T09:15:00.000Z",
    meta: { manufacturer: "XYZ", model: "LT-105" }
  },
  {
    _id: "dev019",
    roomId: "room009",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev20",
    roomId: "room009",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev021",
    roomId: "room009",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev022",
    roomId: "room009",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev023",
    roomId: "room009",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev024",
    roomId: "room001",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  }
,
{
    _id: "dev025",
    roomId: "room001",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  }
,{
    _id: "dev026",
    roomId: "room001",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  },
  {
    _id: "dev027",
    roomId: "room001",
    name: "Cảm biến ánh sáng",
    type: "sensor",
    status: "on",
    defaultState: "on",
    controlMode: "auto",
    lastUpdated: "2025-08-10T09:20:00.000Z",
    meta: { manufacturer: "SenseIt", model: "LIGHT-300" }
  }
];

export default devices;