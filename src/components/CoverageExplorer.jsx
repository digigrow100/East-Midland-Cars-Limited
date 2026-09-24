"use client";

import { useState } from "react";

const TABS = [
  {
    id: "engine",
    label: "Engine & Drivetrain",
    icon: "minor_crash",
    items: [
      { icon: "settings", title: "Cylinder Block & Heads", body: "Pistons, rings, gudgeon pins, crankshaft, main bearings, camshafts, followers, and cylinder head casting." },
      { icon: "speed", title: "Turbocharger & Supercharger", body: "Factory-fitted turbo turbines, wastegates, intercooler, and actuator controls (Included under Gold & Platinum tiers)." },
      { icon: "sync", title: "Timing Belts & Chains", body: "Timing chain, tensioners, guide rails, and timing belt failure protection subject to manufacturer service schedule evidence." },
    ],
  },
  {
    id: "electrical",
    label: "Electrical & Technology",
    icon: "bolt",
    items: [
      { icon: "memory", title: "Engine ECU & Control Modules", body: "Engine Management Computer, body control unit, transmission control unit, and immobilizer circuitry." },
      { icon: "display_settings", title: "Infotainment & Digital Dash", body: "Factory navigation screen, multimedia processing modules, and virtual cockpit digital instrument clusters." },
      { icon: "electric_bolt", title: "Alternator & Starter", body: "Alternator rectifier, internal regulator, high-torque starter motor, and steering lock solenoids." },
    ],
  },
  {
    id: "steering",
    label: "Steering & Suspension",
    icon: "alt_route",
    items: [
      { icon: "sports_motorsports", title: "Steering Rack & Pump", body: "Power steering hydraulic rack, electronic steering motor, column linkages, and steering angle sensors." },
      { icon: "tune", title: "Suspension Dampers & Arms", body: "Control wishbones, ball joints, suspension coil springs, and active adaptive damper actuators." },
      { icon: "filter_drama", title: "Air Suspension Compressors", body: "Air compressor unit, level sensors, and central pneumatic valve blocks on executive chassis." },
    ],
  },
  {
    id: "cooling",
    label: "Cooling & Fuel System",
    icon: "ac_unit",
    items: [
      { icon: "water_drop", title: "Radiator & Water Pump", body: "Engine cooling radiator, auxiliary water pump, thermostat housing, and viscous fan couplings." },
      { icon: "local_gas_station", title: "High-Pressure Fuel Injection", body: "High-pressure diesel and petrol common rail fuel pumps, mechanical injectors, and tank senders." },
      { icon: "air", title: "Air Conditioning Compressor", body: "A/C clutch pulley, compressor assembly, condenser core, and internal expansion valves." },
    ],
  },
  {
    id: "braking",
    label: "Braking & Transmission",
    icon: "tire_repair",
    items: [
      { icon: "safety_check", title: "ABS Modulator & Pump", body: "Electronic ABS controller, wheel speed pulse sensors, master brake cylinder, and servo assistance unit." },
      { icon: "alt_route", title: "Automatic Transmission", body: "Dual-clutch (DSG/S-Tronic) mechatronic units, torque converter, planetary gears, and valve body assemblies." },
      { icon: "electric_car", title: "Differential & AWD Transfer Box", body: "Haldex clutches, limited slip differentials, drive shafts, constant velocity (CV) joints, and wheel bearings." },
    ],
  },
];

export default function CoverageExplorer() {
  const [activeTab, setActiveTab] = useState("engine");
  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  return (
    <div>
      <div className="flex flex-wrap gap-space-sm mb-space-lg">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs min-h-[44px] ${
              activeTab === tab.id
                ? "bg-primary text-on-primary shadow-sm"
                : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {active.items.map((item) => (
            <div key={item.title} className="bg-surface-container-low p-space-md rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-secondary font-headline-sm text-headline-sm">
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
