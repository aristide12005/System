"use client";

import { useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// Simplified GeoJSON URL or local file usually needed.
// Using a standard public one for now.
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { markerOffset: -15, name: "Canada", coordinates: [-106.3468, 56.1304], val: "87,142" },
    { markerOffset: -15, name: "Germany", coordinates: [10.4515, 51.1657], val: "90,069" },
    { markerOffset: -15, name: "Indonesia", coordinates: [113.9213, -0.7893], val: "120,904" },
    { markerOffset: 15, name: "Uruguay", coordinates: [-55.7658, -32.5228], val: "85,321" },
];

export function CampaignMap() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm text-text-secondary">Campaign Reach</p>
                    <h3 className="text-lg font-bold">12 country</h3>

                    <div className="mt-4">
                        <p className="text-sm text-text-secondary">User Reached</p>
                        <h3 className="text-xl font-bold">180,807,839 <span className="text-sm text-text-secondary font-normal">user</span></h3>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-text-secondary">Period</p>
                        <h3 className="text-lg font-bold">9 month</h3>
                    </div>
                </div>

                {/* Map visualization area */}
                <div className="w-[600px] h-[300px] relative">
                    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
                        <Geographies geography={GEO_URL}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#EAEAEC"
                                        stroke="#D6D6DA"
                                        strokeWidth={0.5}
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "#D6D6DA", outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                ))
                            }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset, val }) => (
                            <Marker key={name} coordinates={coordinates as [number, number]}>
                                <g>
                                    <rect x="-40" y="-30" width="80" height="30" rx="4" fill="#1F2937" fillOpacity="0.9" />
                                    <text textAnchor="middle" y="-18" style={{ fontFamily: "system-ui", fill: "#fff", fontSize: "8px", fontWeight: "bold" }}>
                                        {name}
                                    </text>
                                    <text textAnchor="middle" y="-8" style={{ fontFamily: "system-ui", fill: "#fff", fontSize: "8px" }}>
                                        {val}
                                    </text>
                                    <circle r={3} fill="#EF4444" stroke="#fff" strokeWidth={1} />
                                </g>
                            </Marker>
                        ))}
                    </ComposableMap>

                    <div className="absolute bottom-0 left-0">
                        <div className="flex items-center gap-2 text-xs text-text-secondary">
                            <span>Updated 2s ago</span>
                        </div>
                        <button className="flex items-center gap-1 text-blue-500 text-xs font-medium mt-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            Click to refresh
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
