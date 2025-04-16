'use client';

import { useEffect, useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/kids-daily-routine' : '';

const schedule = [
  {
    start: '06:45', // 6:45 AM
    end: '07:20', // 7:20 AM
    task: 'Eat Breakfast',
    image: `${basePath}/images/breakfast.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '07:20', // 7:20 AM
    end: '07:30', // 7:30 AM
    task: 'Put on Shoes',
    image: `${basePath}/images/shoes.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '16:45', // 4:45 PM
    end: '17:00', // 5:00 PM
    task: 'Bath Time',
    image: `${basePath}/images/bath.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '17:00', // 5:00 PM
    end: '18:00', // 6:00 PM
    task: 'Eat Dinner',
    image: `${basePath}/images/dinner.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '18:00', // 6:00 PM
    end: '18:15', // 6:15 PM
    task: 'Put on Pajamas',
    image: `${basePath}/images/pajamas.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '18:50', // 6:50 PM
    end: '19:00', // 7:00 PM
    task: 'Brush Teeth',
    image: `${basePath}/images/teeth.png`,
    sound: `${basePath}/sounds/chime.mp3`
  },
  {
    start: '19:00', // 7:00 PM
    end: '19:30', // 7:30 PM
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
  const [manualTimeoutId, setManualTimeoutId] = useState(null);

  // ✅ Wake Lock to keep screen on
  useEffect(() => {
    let wakeLock = null;

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen');
          console.log('Wake lock activated');
        }
      } catch (err) {
        console.warn('Wake lock failed:', err);
      }
    };

    requestWakeLock();

    const handleVisibilityChange = () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLock) wakeLock.release();
    };
  }, []);

  // ✅ Time-based schedule updater
  useEffect(() => {
    if (manualMode) return;

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

  // ✅ Manual cycle when clicking task label
  const handleManualClick = () => {
    const nextIndex = (manualIndex + 1) % schedule.length;
    const task = schedule[nextIndex];
    setCurrentTask(task);
    setManualIndex(nextIndex);
    setManualMode(true);

    if (task.sound) {
      const audio = new Audio(task.sound);
      audio.play().catch(() => {});
    }

    if (manualTimeoutId) clearTimeout(manualTimeoutId);
    const timeout = setTimeout(() => {
      setManualMode(false);
    }, 3000);
    setManualTimeoutId(timeout);
  };

  return (
    <main
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#000'
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
          objectFit: 'contain',
          backgroundColor: '#000'
        }}
      />

      <h1
        onClick={handleManualClick}
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
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        {currentTask.task}
      </h1>
    </main>
  );
}
