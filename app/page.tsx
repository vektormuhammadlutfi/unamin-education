'use client';

import { useState } from 'react';
import { Play, Maximize, Home, Mountain, Waves, Loader2 } from 'lucide-react';

export default function Home() {
  const [showViewer, setShowViewer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleStartViewing = () => {
    setShowViewer(true);
    setIsLoading(true);
  };

  const handleGoHome = () => {
    setShowViewer(false);
    setIsFullscreen(false);
    setIsLoading(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (showViewer) {
    return (
      <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'} bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600`}>
        {/* Control Bar */}
        <div className={`${isFullscreen ? 'absolute top-4 left-4 right-4 z-10' : 'p-4'} flex justify-between items-center`}>
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-200 text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Kembali</span>
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-orange-400/95 backdrop-blur-sm hover:bg-orange-400 transition-all duration-200 text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
          >
            <Maximize className="w-5 h-5" />
            <span className="font-semibold">{isFullscreen ? 'Keluar' : 'Layar Penuh'}</span>
          </button>
        </div>

        {/* Assemblr World Viewer */}
        <div className={`${isFullscreen ? 'absolute top-16 left-4 right-4 bottom-4' : 'mx-4 pb-4'} ${isFullscreen ? 'h-[calc(100vh-5rem)]' : 'h-[calc(100vh-8rem)]'}`}>
            <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Loading Indicator */}
              {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                <div className="text-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Memuat presentasi 3D...</p>
                </div>
              </div>
              )}
              
              {/* Iframe */}
              <iframe
              src="https://viewer.assemblrworld.com/Embed/-iFm4hfWrrt3Qfm7qYJ6"
              allow="camera; microphone; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; fullscreen"
              allowFullScreen
              className="w-full h-full border-0"
              title="Rumah Adat Papua dan Bangun Ruang"
              onLoad={handleIframeLoad}
              style={{ 
                minHeight: '500px',
                background: 'white'
              }}
              />
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
            Rumah Adat Papua
          </h1>
          <h2 className="text-3xl font-bold text-white/90 mb-6">
            Bumi Cenderawasih & Bangun Ruang
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8">
          {/* Introduction Text */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold text-orange-600">Halo, teman-teman!</span> Selamat datang di Papua, Bumi Cenderawasih yang indah. 
              Di sini, kita akan menemukan warisan budaya yang sangat kaya, salah satunya adalah rumah-rumah adat yang unik dan menawan!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Coba perhatikan baik-baik, setiap rumah adat ini punya bentuk yang khas, ya? Ada <span className="font-semibold text-emerald-600">Honai</span> yang bundar dan hangat dari pegunungan, 
              ada juga rumah panggung dengan ukiran indah yang biasa ditemukan di daerah pesisir.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Setiap sudut rumah adat ini ternyata menyimpan rahasia bentuk-bentuk bangun ruang yang seru untuk kita pelajari, lho! 
              <span className="font-semibold text-blue-600">Penasaran?</span> Yuk, kita mulai petualangan kita dan kenali lebih dekat keunikan arsitektur Papua serta bentuk-bentuk geometri di dalamnya!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - House Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Jenis Rumah Adat:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
                  <Mountain className="w-8 h-8 text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-emerald-700">Honai</h4>
                    <p className="text-sm text-gray-600">Rumah bundar dari pegunungan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Waves className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-blue-700">Rumah Panggung</h4>
                    <p className="text-sm text-gray-600">Rumah tinggi dari daerah pesisir</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Start Button */}
            <div className="text-center">
              <div className="mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Play className="w-16 h-16 text-white ml-2" />
                </div>
              </div>
              
              <button
                onClick={handleStartViewing}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-2xl font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto"
              >
                <Play className="w-8 h-8" />
                Mulai Petualangan!
              </button>
              
              <p className="text-gray-600 mt-4 text-sm">
                Jelajahi rumah adat Papua dalam 3D
              </p>
            </div>
          </div>
        </div>

        {/* Learning Points */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Bentuk Geometri</h4>
            <p className="text-gray-600 text-sm">Temukan bangun ruang dalam arsitektur Papua</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Budaya Papua</h4>
            <p className="text-gray-600 text-sm">Pelajari warisan budaya Bumi Cenderawasih</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Interaktif 3D</h4>
            <p className="text-gray-600 text-sm">Eksplorasi rumah adat secara virtual</p>
          </div>
        </div>
      </div>
    </div>
  );
}