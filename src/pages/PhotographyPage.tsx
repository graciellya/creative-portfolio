import "./Pages.css";

const PhotographyPage = () => {
  const photoGalleries = [
    {
      title: "",
      description: "",
      photos: [
        {
          src: "./landscape1.jpeg",
          alt: "Urban landscape 1",
          title: "shot on canon m50",
        },
        {
          src: "./landscape2.jpeg",
          alt: "Urban landscape 2",
          title: "shot on canon m50",
        },
        {
          src: "./landscape3.jpeg",
          alt: "Urban landscape 3",
          title: "shot on canon m50",
        },
        {
          src: "./landscape4.jpeg",
          alt: "Urban landscape 4",
          title: "shot on canon m50",
        },
        {
          src: "./landscape5.jpeg",
          alt: "Urban landscape 5",
          title: "shot on canon m50",
        },
        {
          src: "./landscape6.jpeg",
          alt: "Urban landscape 6",
          title: "shot on canon m50",
        },
        {
          src: "./landscape7.jpeg",
          alt: "Urban landscape 7",
          title: "shot on canon m50",
        },
        {
          src: "./nyc1.jpeg",
          alt: "Portrait 1",
          title: "shot on canon m50",
        },
        {
          src: "./nyc2.jpeg",
          alt: "Portrait 2",
          title: "shot on canon m50",
        },
        {
          src: "./nyc3.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./nyc4.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./nyc5.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./nyc6.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./nyc9.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./ams1.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./la.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./la2.jpeg",
          alt: "Portrait 3",
          title: "shot on canon m50",
        },
        {
          src: "./paris.jpeg",
          alt: "Paris cityscape 1",
          title: "shot on canon m50",
        },
        {
          src: "./paris2.jpeg",
          alt: "Paris cityscape 2",
          title: "shot on canon m50",
        },
        {
          src: "./paris3.jpeg",
          alt: "Paris cityscape 3",
          title: "shot on canon m50",
        },
        {
          src: "./paris4.jpeg",
          alt: "Paris cityscape 4",
          title: "shot on canon m50",
        },
        {
          src: "./paris6.jpeg",
          alt: "Paris cityscape 6",
          title: "shot on canon m50",
        },
        {
          src: "./paris7.jpeg",
          alt: "Paris cityscape 7",
          title: "shot on canon m50",
        },
        {
          src: "./colom.jpeg",
          alt: "Colombia cityscape 1",
          title: "shot on canon m50",
        },
        {
          src: "./colom2.jpeg",
          alt: "Colombia cityscape 2",
          title: "shot on canon m50",
        },
        {
          src: "./colom3.jpeg",
          alt: "Colombia cityscape 3",
          title: "shot on canon m50",
        },
        {
          src: "./colom4.jpeg",
          alt: "Colombia cityscape 4",
          title: "shot on canon m50",
        },
        {
          src: "./colom5.jpeg",
          alt: "Colombia cityscape 5",
          title: "shot on canon m50",
        },
        {
          src: "./colom6.jpeg",
          alt: "Colombia cityscape 6",
          title: "shot on canon m50",
        },
        {
          src: "./colom7.jpeg",
          alt: "Colombia cityscape 7",
          title: "shot on canon m50",
        },
        {
          src: "./experimental2.jpeg",
          alt: "Colombia cityscape 7",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3295.jpeg",
          alt: "Colombian landschape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3366.jpeg",
          alt: "My room and purse",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3432.jpeg",
          alt: "Cusco, Peru",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3478.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3554.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3579.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3602.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3694.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3700.jpeg",
          alt: "Colombia cityscape 7",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3775.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
        {
          src: "./IMG_3819.jpeg",
          alt: "Peruvian landscape",
          title: "shot on canon m50",
        },
      ],
    },
  ];

  return (
    <div className="page-container photography-page">
      <div className="page-header">
        <h1 className="page-title">PHOTOGRAPHY</h1>
        <p className="page-subtitle"></p>
      </div>

      {photoGalleries.map((gallery, galleryIndex) => (
        <div key={galleryIndex} className="photo-section">
          <div className="section-header">
            <h2 data-text={gallery.title}>{gallery.title}</h2>
            <p>{gallery.description}</p>
          </div>

          {/* Add photo-grid class back as a wrapper */}
          <div className="masonry-grid">
            {gallery.photos.map((photo, photoIndex) => (
              <div key={photoIndex} className="masonry-item">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="photo-image"
                  loading="lazy"
                />
                <div className="masonry-overlay">
                  <h4>{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotographyPage;
