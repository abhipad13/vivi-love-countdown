import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const FavoriteMemories = () => {
  // Organize memories into pages (2 memories per page)
  const memories = [{
    id: 1,
    src: "https://images.unsplash.com/photo-1524863479829-916d8e77f114",
    alt: "Special memory together",
    title: "The Day We Met",
    description: "I still remember how nervous I was when I first saw you. Your smile lit up the entire room, and I knew right away that you were someone special. That moment changed my life forever."
  }, {
    id: 2,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "Romantic getaway",
    title: "Our First Trip Together",
    description: "That weekend getaway where we got lost but didn't care because we had each other. We discovered that little café with the amazing pastries and spent hours just talking and dreaming about our future."
  }, {
    id: 3,
    src: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e",
    alt: "Cozy moments",
    title: "Movie Nights & Cuddles",
    description: "All those cozy Friday nights watching movies, sharing popcorn, and falling asleep in each other's arms. These simple moments are the ones I treasure most - just being together is pure magic."
  }, {
    id: 4,
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    alt: "Dancing together",
    title: "Dancing in the Kitchen",
    description: "That random Tuesday when our favorite song came on while we were cooking dinner, and we ended up dancing in the kitchen. No music needed - just your laughter was the perfect soundtrack."
  }];

  // Group memories into pages of 2
  const pages = [];
  for (let i = 0; i < memories.length; i += 2) {
    pages.push(memories.slice(i, i + 2));
  }
  return <div className="animate-fade-in-up animate-delay-2">
      <h3 className="font-romantic text-4xl text-center text-romantic-deep mb-12">
        My Favorite Memories With You 📖✨
      </h3>
      
      <div className="relative max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {pages.map((page, pageIndex) => <CarouselItem key={pageIndex}>
                <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-romantic-pink/30 min-h-[600px]">
                  {/* Page number */}
                  <div className="absolute top-4 right-6 text-romantic-deep/60 font-elegant text-sm">
                    Page {pageIndex + 1} of {pages.length}
                  </div>
                  
                  {/* Scrapbook style decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 bg-romantic-pink/20 rounded-full"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 bg-romantic-pink/30 rounded-full"></div>
                  <div className="absolute top-6 right-20 w-3 h-3 bg-romantic-pink/25 rounded-full"></div>
                  
                  <div className="space-y-8">
                    {page.map((memory, memoryIndex) => <div key={memory.id} className={`flex flex-col ${memoryIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>
                        <div className="lg:w-1/2">
                          <div className="relative">
                            {/* Polaroid-style photo frame */}
                            <div className="bg-white p-3 pb-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                              <div className="aspect-[3/4] w-full overflow-hidden rounded">
                                <img src={memory.src} alt={memory.alt} className="w-full h-full object-cover" loading="lazy" />
                              </div>
                              <div className="text-center mt-2 font-elegant text-sm text-gray-600">
                                {memory.title}
                              </div>
                            </div>
                            {/* Tape effect */}
                            <div className="absolute -top-2 right-4 w-8 h-4 bg-yellow-200/80 transform rotate-12 rounded-sm"></div>
                          </div>
                        </div>
                        
                        <div className="lg:w-1/2 space-y-3">
                          <h4 className="font-elegant text-xl text-romantic-deep">
                            {memory.title}
                          </h4>
                          <p className="text-romantic-deep/80 leading-relaxed text-base italic">
                            "{memory.description}"
                          </p>
                        </div>
                      </div>)}
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          
          <CarouselPrevious className="bg-white/80 hover:bg-white border-romantic-pink text-romantic-deep shadow-lg -left-16" />
          <CarouselNext className="bg-white/80 hover:bg-white border-romantic-pink text-romantic-deep shadow-lg -right-16" />
        </Carousel>
        
        <p className="text-center mt-6 text-romantic-deep/70 font-elegant text-sm">← Swipe to flip through our memory book →</p>
      </div>
    </div>;
};
export default FavoriteMemories;