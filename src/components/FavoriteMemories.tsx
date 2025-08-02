import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const FavoriteMemories = () => {
  // Organize memories into pages (2 memories per page)
  const memories = [{
    id: 1,
    src: "https://i.imgur.com/F1Fo5tl.jpeg",
    alt: "Special memory together",
    title: "Our First Day as BF/GF",
    description: "I still remember nervous I was around you when we first started dating. I always had butterflies in my stomach next to you. And your smile makes me so happy."
  }, {
    id: 2,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
    alt: "Romantic getaway",
    title: "Our First Trip Together",
    description: "That weekend getaway when we went to UIUC was only fun because of you. I can't believe how we are able to have fun and make memories just by being with ourselves."
  }, {
    id: 3,
    src: "https://i.imgur.com/NvZvoMT.jpeg",
    alt: "Cozy moments",
    title: "Movie Nights & Cuddles",
    description: "All those cozy Friday nights watching movies, sharing biryani, and falling asleep in each other's arms. These simple moments are the ones I treasure most."
  }, {
    id: 4,
    src: "https://i.imgur.com/ktfIPqv.jpeg",
    alt: "Dancing together",
    title: "Ice Skating in Lafayette",
    description: "That day when we went ice skating and played outside in the snow was so fun. And I still remember how you fell trying to help me up after I fell. That was so cute and funny."
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