'use client';

import { useEffect, useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/kids-daily-routine' : '';

const schedule = [
  {
    start: '06:45',
    end: '07:20',
    task: 'Eat Breakfast',
    image: `${basePath}/images/breakfast.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '07:20',
    end: '07:30',
    task: 'Put on Shoes',
    image: `${basePath}/images/shoes.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '18:00',
    end: '18:30',
    task: 'Eat Dinner',
    image: `${basePath}/images/dinner.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '18:30',
    end: '18:50',
    task: 'Bath Time',
    image: `${basePath}/images/bath.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '18:50',
    end: '19:10',
    task: 'Brush Teeth',
    image: `${basePath}/images/teeth.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '19:10',
    end: '19:30',
    task: 'Put on Pajamas',
    image: `${basePath}/images/pajamas.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '19:30',
    end: '20:00',
    task: 'Go to Bed',
    image: `${basePath}/images/bed.png`,
    sound: `${basePath}/sounds/chime.mp3`
  }
];

const fallbackTask = {
  task: 'Play Time',
  image: `${basePath}/images/playtime.png`,
  sound: null
};

export default function Page() {
  const [currentTask, setCurrentTask] = useState(fallbackTask);
  const [manualMode, setManualMode] = useState(false);
  const [manualIndex, setManualIndex] = useState(0);

  useEffect(() => {
    if (manualMode) return; // skip updates if in manual mode

    const checkTime = () => {
      const now = new Date();
      const time = now.toTimeString().slice(0, 5);
      const task = schedule.find(({ start, end }) => time >= start && time < end) || fallbackTask;

      if (task.task !== currentTask?.task) {
        setCurrentTask(task);
        if (task.sound) {
          const audio = new Audio(task.sound);
          audio.play().catch(() => {});
        }
      }
    };

    const interval = setInterval(checkTime, 10000);
    checkTime();
    return () => clearInterval(interval);
  }, [currentTask, manualMode]);

  const handleNext = () => {
    const nextIndex = (manualIndex + 1) % schedule.length;
    const task = schedule[nextIndex];
    setCurrentTask(task);
    setManualIndex(nextIndex);
    setManualMode(true); // enable manual mode
    if (task.sound) {
      const audio = new Audio(task.sound);
      audio.play().catch(() => {});
    }
  };

  return (
    <main
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <img
        src={currentTask.image}
        alt={currentTask.task}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      <h1
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          fontSize: '2.5rem',
          textAlign: 'center'
        }}
      >
        {currentTask.task}
      </h1>

      {/* 👇 Manual button — optional */}
      {/* <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          fontSize: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        ⏭ Next Task
      </button> */}
    </main>
  );
}
