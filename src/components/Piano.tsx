import * as Tone from "tone";
import { useState, useRef, useEffect } from "react";

interface Note {
  note: string;
  label: string;
  sharp?: boolean;
}

export default function Piano() {
  const [isPlaying, setIsPlaying] = useState(false);
  const samplerRef = useRef<Tone.Sampler | null>(null);

  const notes: Note[] = [
    { note: "C4", label: "C" },
    { note: "C#4", label: "C#", sharp: true },
    { note: "D4", label: "D" },
    { note: "D#4", label: "D#", sharp: true },
    { note: "E4", label: "E" },
    { note: "F4", label: "F" },
    { note: "F#4", label: "F#", sharp: true },
    { note: "G4", label: "G" },
    { note: "G#4", label: "G#", sharp: true },
    { note: "A4", label: "A" },
    { note: "A#4", label: "A#", sharp: true },
    { note: "B4", label: "B" },
  ];

  
  useEffect(() => {
    samplerRef.current = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        console.log("Piano samples loaded");
      }
    }).toDestination();

    return () => {
      samplerRef.current?.dispose();
    };
  }, []);

  const playNote = async (note: string) => {
    if (!isPlaying) {
      await Tone.start();
      setIsPlaying(true);
    }

    if (samplerRef.current) {
      samplerRef.current.triggerAttackRelease(note, 0.5);
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-12 mt-10">
      
    
      <div className="w-full lg:w-1/2 text-center lg:text-left m-4 p-3">
        
        <p className="text-gray-300 leading-relaxed mb-4">
          Una de mis <i>hobbies</i> es la <span className="text-cyan-400 font-semibold">música</span>. 
          Disfruto tocar diversos instrumentos musicales, como el <span className="text-cyan-400 font-semibold">piano</span>

        </p>
        
        <p className="text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-semibold">¡Prueba tocando el piano!</span> Tiene un 
          sonido clásico inspirado en los pianos de los 90s.
        </p>
      </div>

    
      <div className="w-full lg:w-1/2 flex flex-col items-center">
      
        
          <div className="relative flex justify-center">
            <div 
              className="relative bg-linear-to-b from-amber-900 to-amber-800 p-4 rounded-lg"
              style={{ display: 'grid', gridTemplateColumns: `repeat(${notes.filter(n => !n.sharp).length}, 56px)` }}
            >
             
              {notes.filter(note => !note.sharp).map(({ note }) => (
                <button
                  key={note}
                  onClick={() => playNote(note)}
                  className="bg-white shadow-lg border border-gray-300 h-48 w-14 rounded-b-md active:bg-amber-100 transition-all duration-75 flex flex-col justify-end items-center z-10 hover:brightness-95"
                >
               
                </button>
              ))}
              
            
              <div className="absolute top-0 left-0 right-0 h-32">
                {/* C#4 - entre C y D */}
                <button
                  onClick={() => playNote("C#4")}
                  className="absolute bg-gray-900 shadow-lg text-white h-32 w-8 rounded-b-md active:bg-gray-700 transition-all duration-75 z-20 flex items-end justify-center pb-2 hover:brightness-110"
                  style={{ left: '57px' }}
                >
                
                </button>
                
                {/* D#4 - entre D y E */}
                <button
                  onClick={() => playNote("D#4")}
                  className="absolute bg-gray-900 shadow-lg text-white h-32 w-8 rounded-b-md active:bg-gray-700 transition-all duration-75 z-20 flex items-end justify-center pb-2 hover:brightness-110"
                  style={{ left: '113px' }}
                >
                 
                </button>
                
                {/* F#4 - entre F y G */}
                <button
                  onClick={() => playNote("F#4")}
                  className="absolute bg-gray-900 shadow-lg text-white h-32 w-8 rounded-b-md active:bg-gray-700 transition-all duration-75 z-20 flex items-end justify-center pb-2 hover:brightness-110"
                  style={{ left: '225px' }}
                >
                 
                </button>
                
                {/* G#4 - entre G y A */}
                <button
                  onClick={() => playNote("G#4")}
                  className="absolute bg-gray-900 shadow-lg text-white h-32 w-8 rounded-b-md active:bg-gray-700 transition-all duration-75 z-20 flex items-end justify-center pb-2 hover:brightness-110"
                  style={{ left: '281px' }}
                >
                 
                </button>
                
                {/* A#4 - entre A y B */}
                <button
                  onClick={() => playNote("A#4")}
                  className="absolute bg-gray-900 shadow-lg text-white h-32 w-8 rounded-b-md active:bg-gray-700 transition-all duration-75 z-20 flex items-end justify-center pb-2 hover:brightness-110"
                  style={{ left: '337px' }}
                >
                 
                </button>
              </div>
            </div>
          </div>

         
      </div>
    </div>
  );
}