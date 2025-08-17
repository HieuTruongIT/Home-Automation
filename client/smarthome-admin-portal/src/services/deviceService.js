import { devices } from "@/fakedata";


/**
 * Lấy tất cả thiết bị theo roomId
 * @param {string} roomId
 * @returns {Array} danh sách thiết bị thuộc phòng
 */
export function getDevicesByRoom(roomId) {
  return devices.filter(dev => dev.roomId === roomId);
}
export function getDevicesByType(type) {
  return devices.filter(dev => dev.type === type);
}

/**
 * Lấy defaultState của tất cả thiết bị trong phòng
 * @param {string} roomId
 * @returns {Object} key = deviceId, value = true/false
 */
export function getDefaultStates(roomId) {
  const devicesInRoom = getDevicesByRoom(roomId);

  return devicesInRoom.reduce((acc, dev) => {
    acc[dev._id] = dev.defaultState === "on"; // true = on, false = off
    return acc;
  }, {});
}
