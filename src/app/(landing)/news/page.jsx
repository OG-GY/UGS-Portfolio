'use client';
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, TrendingUp, Zap, Newspaper } from "lucide-react";
import Link from "next/link";

export default function GameNewsPage() {
  // RAWG Games State
  const [latestGames, setLatestGames] = React.useState([]);
  const [latestLoading, setLatestLoading] = React.useState(true);
  const [latestError, setLatestError] = React.useState(null);

  const [famousGames, setFamousGames] = React.useState([]);
  const [famousLoading, setFamousLoading] = React.useState(true);
  const [famousError, setFamousError] = React.useState(null);

  // News State
  const [newsItems, setNewsItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [newUpdates, setNewUpdates] = React.useState(0);
  const [showNotification, setShowNotification] = React.useState(false);

  // Track previous news for notification
  const prevNewsRef = React.useRef([]);

  React.useEffect(() => {
    // Latest Games
    fetch('/api/rawg-latest')
      .then(res => res.json())
      .then(data => {
        if (data && data.games) setLatestGames(data.games);
        else setLatestError("No games found");
        setLatestLoading(false);
      })
      .catch(() => {
        setLatestError("Failed to fetch games");
        setLatestLoading(false);
      });

    // Famous Games
    fetch('/api/rawg-popular')
      .then(res => res.json())
      .then(data => {
        if (data && data.games) setFamousGames(data.games);
        else setFamousError("No games found");
        setFamousLoading(false);
      })
      .catch(() => {
        setFamousError("Failed to fetch games");
        setFamousLoading(false);
      });

    // News
    fetch('/api/reddit-news')
      .then(res => res.json())
      .then(data => {
        if (data && data.news) {
          setNewsItems(data.news);
          if (prevNewsRef.current.length > 0) {
            const prevGuids = new Set(prevNewsRef.current.map(n => n.guid));
            const newCount = data.news.filter(n => !prevGuids.has(n.guid)).length;
            if (newCount > 0) {
              setNewUpdates(newCount);
              setShowNotification(true);
              setTimeout(() => setShowNotification(false), 4000);
            }
          }
          prevNewsRef.current = data.news;
        } else {
          setError("No news found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch news");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1012] text-white pt-24 pb-20 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <AnimatePresence>
        {showNotification && newUpdates > 0 && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="bg-red-600 px-6 py-3 rounded-xl shadow-2xl shadow-red-900/40 font-bold text-sm md:text-base flex items-center gap-3 border border-red-500/50">
              <Zap className="h-5 w-5 fill-white" />
              <span>{newUpdates} new updates in the game world!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-sm block mb-4">Daily Updates</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Gaming <span className="text-red-600">News</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-base leading-relaxed">
              Stay updated with the latest trends, releases, and rumors from the global gaming community.
            </p>
          </motion.div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: News */}
          <section className="lg:col-span-2 space-y-10">
            {/* Featured Section */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-[#1a1b1e] p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/3 flex justify-center">
                  <motion.img
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    src="/logo.png"
                    alt="Logo"
                    className="w-48 h-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                  />
                </div>
                <div className="w-full md:w-2/3 space-y-6">
                  {newsItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
                    >
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">Trending</span>
                      <a href={newsItems[0].link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white truncate max-w-[200px] md:max-w-xs">
                        {newsItems[0].title}
                      </a>
                    </motion.div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    The Pulse of the <span className="text-red-600">Gaming Industry</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-base">
                    Real-time updates fetched from IGN and global sources. Discover emerging trends and must-play titles.
                  </p>
                  <Link href="/">
                    <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-3.5 px-10 rounded-xl transition-all shadow-lg shadow-red-900/20 active:scale-95">
                      Join the Community
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* News List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Newspaper className="text-red-500" />
                Latest Articles
              </h3>

              <div className="grid gap-6">
                {loading ? (
                  <div className="flex flex-col items-center py-20 gap-4">
                    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium">Fetching the latest scoops...</p>
                  </div>
                ) : error ? (
                  <div className="p-8 rounded-2xl bg-red-900/10 border border-red-900/20 text-red-500 text-center">
                    <p>{error}</p>
                  </div>
                ) : (
                  newsItems.map((item, i) => (
                    <motion.article
                      key={item.guid || i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="group bg-[#1a1b1e] border border-gray-800 rounded-2xl p-4 md:p-6 hover:border-red-500/50 transition-all duration-300 shadow-xl"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-black/50 overflow-hidden relative">
                          {item.image ? (
                            <img src={item.image} alt="News" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold uppercase text-xs">No Preview</div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5 text-red-500" />
                              {item.pubDate ? new Date(item.pubDate).toLocaleDateString() : ""}
                            </span>
                            <span className="px-2 py-0.5 bg-white/5 rounded">News Update</span>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                          </h4>
                          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Latest Game Releases */}
            <section className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-3">
                <Zap className="text-red-500 h-5 w-5" />
                New Releases
              </h4>
              <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl p-5 space-y-5">
                {latestLoading ? (
                  <div className="space-y-4">
                    {[1, 2].map(n => <div key={n} className="h-40 bg-white/5 animate-pulse rounded-xl" />)}
                  </div>
                ) : (
                  latestGames.slice(0, 3).map((game) => (
                    <motion.div
                      key={game.id}
                      whileHover={{ y: -5 }}
                      className="group block p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-red-500/30 transition-all cursor-pointer"
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <img src={game.background_image} alt={game.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1 text-center">
                        <h5 className="font-bold text-gray-200 group-hover:text-white line-clamp-1">{game.name}</h5>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{game.released}</div>
                        <div className="inline-block px-2 py-0.5 bg-red-600/20 text-red-400 text-[10px] font-bold rounded">★ {game.rating}</div>
                      </div>
                    </motion.div>
                  ))
                )}
                <a href="https://rawg.io/games" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white/5 hover:bg-white/10 text-center rounded-xl text-sm font-bold border border-white/10 transition-colors">
                  View All Games
                </a>
              </div>
            </section>

            {/* Famous Games */}
            <section className="space-y-6">
              <h4 className="text-xl font-bold flex items-center gap-3">
                <TrendingUp className="text-red-500 h-5 w-5" />
                Top Rated
              </h4>
              <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl p-5 space-y-4">
                {famousLoading ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map(n => <div key={n} className="h-16 bg-white/5 animate-pulse rounded-lg" />)}
                  </div>
                ) : (
                  famousGames.slice(0, 5).map((game) => (
                    <div key={game.id} className="flex items-center gap-4 group cursor-pointer p-1 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-16 h-16 rounded-xl border border-gray-700 p-0.5 flex-shrink-0 group-hover:border-red-500/50 transition-colors">
                        <img src={game.background_image} alt={game.name} className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm text-gray-300 group-hover:text-white truncate transition-colors">{game.name}</div>
                        <div className="text-xs text-red-500 font-bold">★ {game.rating}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}
