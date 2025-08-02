const PhotoGallery = () => {
  const photos = [{
    id: 1,
    src: "https://i.imgur.com/NdGzkCZ.jpeg",
    alt: "Romantic couple photo placeholder",
    caption: "The most beautiful princess 💕"
  }, {
    id: 2,
    src: "https://i.imgur.com/6vawBPV.jpeg",
    alt: "Beautiful couple moment",
    caption: "um how are u so hot? 💋"
  }, {
    id: 3,
    src: "https://i.imgur.com/2jmPCMC.jpeg",
    alt: "Happy couple together",
    caption: "You are SOOOO PRETTYY"
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