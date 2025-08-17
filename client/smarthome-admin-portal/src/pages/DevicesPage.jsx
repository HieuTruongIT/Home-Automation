import React, { useState, useEffect } from "react";
import { StatisticsCard, ScrollableTabs } from "@/components";
import { ActiveTabProvider , useActiveTab} from "@/store";
import { devices } from "@/fakedata";
import { getDevicesByType, getDefaultStates } from "@/services/deviceService";
import { Light  } from "@mui/icons-material";
import { Switch } from "@material-tailwind/react";

function DeviceSwitches() {
  const { activeTab } = useActiveTab();
  const [deviceStates, setDeviceStates] = useState({});

  useEffect(() => {
    const defaultStates = getDefaultStates(activeTab._id);
    setDeviceStates(defaultStates);
    console.log("Default states for room:", activeTab, defaultStates);
  }, [activeTab]);

  const handleToggle = (deviceId) => {
    setDeviceStates((prev) => {
      const newStates = {
        ...prev,
        [deviceId]: !prev[deviceId],
      };
      console.log("Toggled device:", deviceId, "->", newStates[deviceId]);
      console.log("All deviceStates:", newStates);
      return newStates;
    });
  };

const devicesInRoom = getDevicesByType(activeTab.type);

console.log("Devices with same type:", activeTab.type, devicesInRoom);
  console.log("Devices in room:", activeTab, devicesInRoom);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {devicesInRoom.map((device) => (
          <StatisticsCard
            key={device._id}
            title={device.name}
            icon={<Light className="w-6 h-6 text-white" />}
            value={device.controlMode}
            footer={
              <div className="flex items-center gap-4">
                <Switch
                  id={`toggle-${device._id}`}
                  checked={deviceStates[device._id] || false}
                  onChange={() => handleToggle(device._id)}
                  color="black"
                />
                <span>{deviceStates[device._id] ? "ON" : "OFF"}</span>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}


export function Devices() {
  return (
    <div className="mt-12">
      <ActiveTabProvider listTab={devices}> {/* Nếu ActiveTabProvider cần rooms, hãy đổi tên devices thành rooms */}
        <ScrollableTabs listTab={devices} displayKey="type" />
        <DeviceSwitches />
      </ActiveTabProvider>
    </div>
  );
}

export default Devices;
