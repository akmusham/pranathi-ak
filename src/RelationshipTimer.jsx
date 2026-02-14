import { useState, useEffect } from 'react';

function RelationshipTimer() {
  const [timeElapsed, setTimeElapsed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2025-11-17T00:00:00');

    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      let months = 0;
      let tempDate = new Date(startDate);
      while (tempDate < now) {
        tempDate.setMonth(tempDate.getMonth() + 1);
        if (tempDate <= now) months++;
      }
      
      tempDate = new Date(startDate);
      tempDate.setMonth(tempDate.getMonth() + months);
      
      const remainingDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));

      setTimeElapsed({
        months: months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      maxWidth: '900px',
      margin: '2rem auto',
      padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 50%, #fef3c7 100%)',
      borderRadius: 'clamp(15px, 3vw, 25px)',
      boxShadow: '0 10px 30px rgba(236, 72, 153, 0.2)',
      textAlign: 'center'
    }}>
      {/* Title */}
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        color: '#ec4899',
        marginBottom: '0.5rem',
        fontFamily: 'Georgia, serif'
      }}>
        Our Love Story 💕
      </h2>
      
      <p style={{
        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        color: '#9333ea',
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
        fontStyle: 'italic'
      }}>
        Since November 17, 2025
      </p>

      {/* Timer Display - Responsive Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: 'clamp(0.75rem, 2vw, 1.5rem)',
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
      }}>
        {/* Months */}
        <div style={{
          background: 'white',
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)',
          borderRadius: 'clamp(10px, 2vw, 15px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fbbf24'
        }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#f59e0b',
            marginBottom: '0.25rem'
          }}>
            {timeElapsed.months}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Months
          </div>
        </div>

        {/* Days */}
        <div style={{
          background: 'white',
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)',
          borderRadius: 'clamp(10px, 2vw, 15px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #f472b6'
        }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '0.25rem'
          }}>
            {timeElapsed.days}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Days
          </div>
        </div>

        {/* Hours */}
        <div style={{
          background: 'white',
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)',
          borderRadius: 'clamp(10px, 2vw, 15px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #c084fc'
        }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#a855f7',
            marginBottom: '0.25rem'
          }}>
            {timeElapsed.hours}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Hours
          </div>
        </div>

        {/* Minutes */}
        <div style={{
          background: 'white',
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)',
          borderRadius: 'clamp(10px, 2vw, 15px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fb7185'
        }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#f43f5e',
            marginBottom: '0.25rem'
          }}>
            {timeElapsed.minutes}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Minutes
          </div>
        </div>

        {/* Seconds */}
        <div style={{
          background: 'white',
          padding: 'clamp(1rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)',
          borderRadius: 'clamp(10px, 2vw, 15px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '2px solid #fb923c'
        }}>
          <div style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#f97316',
            marginBottom: '0.25rem'
          }}>
            {timeElapsed.seconds}
          </div>
          <div style={{
            fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Seconds
          </div>
        </div>
      </div>

      {/* Sweet message */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.7)',
        padding: 'clamp(1rem, 3vw, 1.5rem)',
        borderRadius: 'clamp(10px, 2vw, 15px)',
        marginTop: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#ec4899',
          fontStyle: 'italic',
          margin: 0,
          lineHeight: '1.6'
        }}>
          Every second with you is a gift 💝
        </p>
        <p style={{
          fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
          color: '#9333ea',
          marginTop: '0.5rem',
          margin: '0.5rem 0 0 0'
        }}>
          And counting... ✨
        </p>
      </div>

      {/* Hearts decoration */}
      <div style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        marginTop: 'clamp(1rem, 3vw, 2rem)'
      }}>
        💕 💖 💗 💓 💝
      </div>
    </div>
  );
}

export default RelationshipTimer;