import React, { useState } from 'react';
import { 
  Download, 
  Star, 
  Users, 
  Trophy, 
  Play,
  ChevronRight,
  GamepadIcon,
  Zap,
  Shield,
  Smartphone,
  Monitor,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredGames = [
    {
      id: 1,
      title: "Brookhaven RP",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      players: "500K+",
      category: "Roleplay"
    },
    {
      id: 2,
      title: "Adopt Me!",
      image: "https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      players: "2M+",
      category: "Simulation"
    },
    {
      id: 3,
      title: "Tower of Hell",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      players: "300K+",
      category: "Obby"
    },
    {
      id: 4,
      title: "Blox Fruits",
      image: "https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      players: "800K+",
      category: "Adventure"
    },
    {
      id: 5,
      title: "Murder Mystery 2",
      image: "https://images.pexels.com/photos/159201/game-controller-joystick-joypad-gamepad-159201.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      players: "400K+",
      category: "Mystery"
    },
    {
      id: 6,
      title: "Arsenal",
      image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      players: "250K+",
      category: "Shooter"
    }
  ];

  const categories = [
    { name: "Adventure", icon: "🗺️", count: "1,200+" },
    { name: "Roleplay", icon: "🎭", count: "890+" },
    { name: "Simulator", icon: "🎮", count: "750+" },
    { name: "Obby", icon: "🏃", count: "650+" },
    { name: "Tycoon", icon: "💰", count: "420+" },
    { name: "Horror", icon: "👻", count: "380+" }
  ];

  const stats = [
    { label: "Active Players", value: "50M+", icon: Users },
    { label: "Games Available", value: "40M+", icon: GamepadIcon },
    { label: "User Rating", value: "4.8/5", icon: Star },
    { label: "Downloads", value: "1B+", icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GamepadIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RobloxHub</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Games</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Download Now
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Games</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Community</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Support</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Download Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Roblox Games
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join millions of players in the ultimate gaming universe. Download and play thousands of user-created games instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold shadow-lg shadow-purple-500/25">
                <Download className="w-5 h-5" />
                <span>Download Free</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all flex items-center space-x-2 text-lg border border-white/20">
                <Play className="w-5 h-5" />
                <span>Watch Trailer</span>
              </button>
            </div>

            {/* Platform Icons */}
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Monitor className="w-5 h-5" />
                <span className="text-sm">Windows</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center space-x-2">
                <GamepadIcon className="w-5 h-5" />
                <span className="text-sm">Xbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Games</h2>
            <p className="text-xl text-gray-300">Discover the most popular games in the Roblox universe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <div key={game.id} className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {game.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{game.players}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{game.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300">{game.rating}</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm font-medium">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all border border-white/20">
              View All Games
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Game Categories</h2>
            <p className="text-xl text-gray-300">Explore games by your favorite genres</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-purple-500/50 transition-all transform hover:-translate-y-1 cursor-pointer">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} games</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Roblox?</h2>
            <p className="text-xl text-gray-300">Experience the ultimate gaming platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Instant Play</h3>
              <p className="text-gray-300">Jump into games instantly with no downloads required. Play directly in your browser or app.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Safe & Secure</h3>
              <p className="text-gray-300">Advanced moderation and safety features ensure a secure gaming environment for all players.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Create & Share</h3>
              <p className="text-gray-300">Build your own games and share them with millions of players worldwide using powerful creation tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Playing?</h2>
          <p className="text-xl text-gray-300 mb-8">Join millions of players and discover your next favorite game today!</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg shadow-purple-500/25">
              <Download className="w-5 h-5" />
              <span>Download for Free</span>
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 text-lg font-semibold">
              <span>Create Account</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GamepadIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">RobloxHub</span>
              </div>
              <p className="text-gray-400">The ultimate destination for Roblox games and community.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Top Rated</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RobloxHub. All rights reserved. Roblox is a trademark of Roblox Corporation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;