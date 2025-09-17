import 'leaflet/dist/leaflet.css';
import HeroSection from './HeroSection';
import { HoverEffect } from "./ui/card-hover-effect";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

import { DirectionAwareHover } from "./ui/direction-aware-hover";

if (L && L.Icon && L.Icon.Default) {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

const projects = [
  {
    title: "Guitar Basics",
    description: "Learn the fundamentals of guitar playing, including chords, strumming patterns, and basic music theory.",
    imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/courses/guitar-basics",
  },
  {
    title: "Piano for Beginners",
    description: "Start your piano journey with lessons on reading music, finger positioning, and simple songs.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/courses/piano-for-beginners",
  },
  {
    title: "Drumming Essentials",
    description: "Discover the basics of drumming, including rhythm patterns, drum kit setup, and practice exercises.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/courses/drumming-essentials",
  },
  {
    title: "Vocal Training",
    description: "Enhance your singing skills with vocal exercises, breathing techniques, and performance tips.",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/courses/vocal-training",
  }
]

const sampleData = [
  { month: 'Jan', value: 2 },
  { month: 'Feb', value: 6 },
  { month: 'Mar', value: 5 },
  { month: 'Apr', value: 8 },
  { month: 'May', value: 14 },
  { month: 'Jun', value: 12 },
  { month: 'Jul', value: 17 },
];

export default function SIHDashboard() {
  const imageUrl1 =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imageUrl2 =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imageUrl3 =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const imageUrl4 =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <div className="min-h-screen">
      <main className="max-w-screen m-0 grid gap-8">
        <HeroSection />

        <section className="flex justify-between gap-6 px-4 space-y-6 lg:space-y-0 lg:flex-row flex-col">

          <div className="flex flex-col justify-between gap-2 md:w-[60%]">
            <div>
              <h2 className='px-4 text-3xl font-semibold mb-1 mt-4'>Image Content</h2>
            </div>
            <div className="w-full h-auto bg-black/70 rounded-lg flex items-center justify-center gap-2 gap-y-2 grid grid-cols-2 p-4">
              <div className="h-[10rem] relative px-2 flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl1}>
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
              </div>
              <div className="h-[12rem] relative px-2 flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl1}>
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
              </div>
              <div className="h-[12rem] relative px-2 flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl1}>
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
              </div>
              <div className="h-[12rem] relative px-2 flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl1}>
                  <p className="font-bold text-xl">In the mountains</p>
                  <p className="font-normal text-sm">$1299 / night</p>
                </DirectionAwareHover>
              </div>
            </div>
          </div>

          {/* Right box */}
            <div className="md:w-[40%] space-y-6">
              <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interactive Map</h3>
              <div id="map" style={{ height: 420 }} className="rounded-md overflow-hidden">
                <MapContainer center={[22.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[22.5937, 78.9629]}>
                    <Popup>
                      Example marker: India center. Use this area to place junctions, barricades, and POIs.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            </div>
        </section>

        {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <h2 id="dashboard" className="text-2xl font-bold">Dashboard Analytics</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Last 7 months</span>
                <button className="px-2 py-1 bg-gray-100 rounded-md">Export</button>
              </div>
            </div>

            <div style={{ height: 600 }} className="mt-6">
              <div className='border border-red-900 bg-black/50 w-full'>

              </div>
            </div>

            
          </div> */}

          {/* <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interactive Map</h3>
              <div id="map" style={{ height: 260 }} className="rounded-md overflow-hidden">
                <MapContainer center={[22.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[22.5937, 78.9629]}>
                    <Popup>
                      Example marker: India center. Use this area to place junctions, barricades, and POIs.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Simulation Controls</h3>
              <div className="space-y-3">
                <label className="block text-sm text-gray-600">Road condition preset</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Default (well maintained)</option>
                  <option>Indian Urban (potholes, partial closures)</option>
                  <option>Construction-heavy (detours)</option>
                  <option>Emergency scenario</option>
                </select>

                <label className="block text-sm text-gray-600">Vehicle behavior profile</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Standard</option>
                  <option>Aggressive (lane switching)</option>
                  <option>Mixed (randomized)</option>
                </select>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-md">Run Simulation</button>
                  <button className="flex-1 bg-gray-100 border py-2 rounded-md">Reset</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm text-sm text-gray-600">
              <strong>Note:</strong> This is a base frontend skeleton. The controls above are UI hooks — integrate them with
              MATLAB/Simulink workflows or a server side that transforms selected presets into RoadRunner assets or OpenStreetMap overlays.
            </div>
          </div> */}
        {/* </section> */}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold">Asset Library</h4>
            <p className="mt-2 text-sm text-gray-600">Store templates for potholes, barricades, cones, and lane closures. Drag onto map.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold">Scenario Versions</h4>
            <p className="mt-2 text-sm text-gray-600">Manage multiple variations: baseline, peak-hour, event-day, and crisis-response.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold">Export</h4>
            <p className="mt-2 text-sm text-gray-600">Export to OpenSCENARIO, RoadRunner, or a MATLAB script that recreates the digital twin parameters.</p>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-gray-800 text-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div>© 2025 SIH 25100 Portal. All rights reserved.</div>
          <div className="text-sm">Built for prototyping digital-twins • Tailwind + Recharts + Leaflet</div>
        </div>
      </footer>
    </div>
  );
}
