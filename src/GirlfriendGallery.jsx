function GirlfriendGallery() {
  const photos = [
    {
      id: 1,
      image: "/path-to-image-1.jpg",
      caption: "Your beautiful smile ✨"
    },
    {
      id: 2,
      image: "/path-to-image-2.jpg",
      caption: "My favorite person 💕"
    },
    {
      id: 3,
      image: "/path-to-image-3.jpg",
      caption: "Forever my Valentine 🌹"
    }
  ];

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '3rem 1rem',
      paddingBottom: '250px'
    }}>
      {/* Title and Description */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
          color: '#ec4899',
          marginBottom: '1rem',
          fontFamily: 'Georgia, serif'
        }}>
          My Beautiful Valentine 💖
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          padding: '0 1rem'
        }}>
          Every moment with you is a treasure. Here are some of my favorite memories with the most amazing person in the world ✨
        </p>
      </div>

      {/* Image Gallery */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {photos.map((photo) => (
          <div 
            key={photo.id}
            style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(236, 72, 153, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '300px',
              overflow: 'hidden',
              background: 'linear-gradient(to bottom, #fce7f3, #ffe4e6)'
            }}>
              <img 
                src={photo.image}
                alt={photo.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ 
              padding: '1.5rem',
              textAlign: 'center',
              background: 'linear-gradient(to bottom, #fff, #fdf2f8)'
            }}>
              <p style={{ 
                color: '#ec4899',
                fontSize: '1rem',
                fontStyle: 'italic',
                margin: 0
              }}>
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decoration */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        fontSize: '2rem'
      }}>
        💕 💝 💖 💗 💓
      </div>
    </div>
  );
}

export default GirlfriendGallery;