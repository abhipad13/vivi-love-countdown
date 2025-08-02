const FavoriteMemories = () => {
  const memories = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114",
      alt: "Special memory together",
      title: "The Day We Met",
      description: "I still remember how nervous I was when I first saw you. Your smile lit up the entire room, and I knew right away that you were someone special. That moment changed my life forever."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
      alt: "Romantic getaway",
      title: "Our First Trip Together",
      description: "That weekend getaway where we got lost but didn't care because we had each other. We discovered that little café with the amazing pastries and spent hours just talking and dreaming about our future."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e",
      alt: "Cozy moments",
      title: "Movie Nights & Cuddles",
      description: "All those cozy Friday nights watching movies, sharing popcorn, and falling asleep in each other's arms. These simple moments are the ones I treasure most - just being together is pure magic."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
      alt: "Dancing together",
      title: "Dancing in the Kitchen",
      description: "That random Tuesday when our favorite song came on while we were cooking dinner, and we ended up dancing in the kitchen. No music needed - just your laughter was the perfect soundtrack."
    }
  ];

  return (
    <div className="animate-fade-in-up animate-delay-2">
      <h3 className="font-romantic text-4xl text-center text-romantic-deep mb-12">
        My Favorite Memories With You 🌟
      </h3>
      
      <div className="space-y-12">
        {memories.map((memory, index) => (
          <div 
            key={memory.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="lg:w-1/2">
              <div className="gallery-item bg-white rounded-2xl overflow-hidden shadow-lg border border-romantic-pink">
                <img
                  src={memory.src}
                  alt={memory.alt}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-4">
              <h4 className="font-elegant text-2xl text-romantic-deep">
                {memory.title}
              </h4>
              <p className="text-romantic-deep/80 leading-relaxed text-lg">
                {memory.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMemories;