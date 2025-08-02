const PhotoGallery = () => {
  const photos = [{
    id: 1,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    alt: "Romantic couple photo placeholder",
    caption: "Our first date 💕"
  }, {
    id: 2,
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f230b8f",
    alt: "Beautiful couple moment",
    caption: "That perfect sunset 🌅"
  }, {
    id: 3,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    alt: "Happy couple together",
    caption: "Laughing together 😊"
  }, {
    id: 4,
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    alt: "Couple holding hands",
    caption: "Hand in hand 💗"
  }, {
    id: 5,
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    alt: "Romantic dinner",
    caption: "Our anniversary dinner 🥂"
  }, {
    id: 6,
    src: "https://images.unsplash.com/photo-1500653442441-561ecdc83c39",
    alt: "Adventure together",
    caption: "Exploring together 🗺️"
  }];
  return <div className="animate-fade-in-up animate-delay-1">
      <h3 className="font-romantic text-4xl text-center text-romantic-deep mb-12">My Prettiest Vivi 📸</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => <div key={photo.id} className="gallery-item bg-white rounded-2xl overflow-hidden shadow-lg border border-romantic-pink">
            <div className="aspect-square overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="font-romantic text-lg text-romantic-deep text-center">
                {photo.caption}
              </p>
            </div>
          </div>)}
      </div>
    </div>;
};
export default PhotoGallery;